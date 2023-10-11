import {Logger, MappedConfig, Options, ReturnType} from "./options";
import {
    findConfigPathFromPackageJson,
    findDefaultConfigPath,
    getConfigPath,
    getPath,
    getSchema,
    loadConfig
} from "./fs";
import {getConfigNodesForEnv, substituteEnvVars} from "./env";
import {validate} from "jsonschema";
import {Path} from "./config-node";
import prompts from "prompts";
import {set} from "dot-prop";
import {formatError} from "./validation";
import {FigureData, FigureInstance, processSchema} from "./figure";
import {ValidationError} from "./errors";

export const init = async <O extends Options>(options: O, logger: Logger): Promise<ReturnType<O>> => {

    options = { ...new Options(), ...options }

    logger.debug(`Options:`);
    logger.debug(options);

    const processed = new FigureData<O>();

    if (! options.configFolderPath) {
        const path = await getConfigPath()

        if (! path) {
            throw new TypeError(`Missing option: configFolderPath`);
        } else {
            options.configFolderPath = path;
        }
    }

    logger.debug(`Using config path: ${options.configFolderPath}`);

    if (options.schema) {
        //Ignore schema path
        processed.schema = options.schema;
    } else {
        if (options.schemaPath) {
            //Load schema
            processed.schema = getSchema(options.schemaPath)
        } else {
            processed.schema = getSchema(getPath(options.configFolderPath, 'schema'))
        }
    }

    // Load config files

    // Default
    const defaultConfig = loadConfig(getPath(options.configFolderPath, 'default'))

    if (Object.keys(defaultConfig).length === 0) {
        logger.debug('Default configuration is empty');
    }

    const env = options.env ?? process.env.NODE_ENV

    const envConfig = loadConfig(getPath(options.configFolderPath, env))

    if (Object.keys(envConfig).length === 0) {
        logger.debug(`Environment-specific configuration for "${env}" is empty`);
    }

    processed.schema = await processSchema(processed.schema, options.subSchema as string)

    processed.config = options.subSchema ?
        substituteEnvVars(processed.schema, { ...defaultConfig, ...envConfig })[options.subSchema] as MappedConfig<O>
        : substituteEnvVars(processed.schema, { ...defaultConfig, ...envConfig }) as MappedConfig<O>

    logger.debug(`Processed config:`)
    logger.debug(processed.config)

    if (!processed.config) {
        throw Error('Failed to find any configuration values after processing');
    }

    return handleConfig(processed, options, logger)

}

export const handleConfig = async <O extends Options>(processed: FigureData<any>, options: O, logger: Logger) => {
    //Validate configuration
    let result = validate(processed.config, processed.schema)

    if (options.prompt) {
        //Prompt for missing values & try again
        const errors = result.errors.filter(e => e.name === 'required')

        for (const error of errors) {
            const p = Path.fromValidationError(error)

            const r = await prompts({
                type: 'text',
                name: 'value',
                message: error.message
            });

            set(processed.config, p.dotPath(), r.value)
        }

        //Re-validate
        result = validate(processed.config, processed.schema);
    }

    if (options.logErrors) {
        const cn = getConfigNodesForEnv(processed.schema, processed.config);

        if (!result.valid) {
            result.errors.map(e => formatError(e, cn)).forEach(e => logger.error(e));
            process.exit(1);
        }
    } else {
        throw new ValidationError(result.errors)
    }

    if (options.returnInstance) {
        return new FigureInstance<MappedConfig<O>>(processed.schema, processed.config, options, result) as ReturnType<O>;
    }

    return new FigureInstance<MappedConfig<O>>(processed.schema, processed.config, options, result).config as ReturnType<O>;
}
