import {MappedConfig, Options, ReturnType} from "./options";
import {getPath, getSchema, loadConfig} from "./fs";
import {getConfigNodesForEnv, substituteEnvVars} from "./env";
import {validate} from "jsonschema";
import {Path} from "./config-node";
import prompts from "prompts";
import {set} from "dot-prop";
import {formatError} from "./validation";
import {FigureData, FigureInstance, processSchema} from "./figure";
import {ValidationError} from "./errors";
import path from "path";
import fs from "fs";

const findDefaultConfigPath = () => {
    let currentDir = process.cwd(); // Start from the current directory or a specified directory

    while (currentDir) {
        const packagePath = path.join(currentDir, 'package.json'); // Construct the path to .figrc in the current directory

        console.log(`Searching for: ${packagePath}`);

        if (fs.existsSync(packagePath)) {
            const packageJson = JSON.parse(fs.readFileSync(packagePath).toString('utf-8'))

            if (packageJson['figure']) {
                if (packageJson['figure']['configFolderPath']) {
                    return path.join(currentDir, packageJson['figure']['configFolderPath']);
                }
            }
        }

        // Move up to the parent directory, or null if already at the root
        const parentDir = path.dirname(currentDir);
        if (parentDir === currentDir) break; // Stop if we are at the root (i.e., the parent is the same as the current directory)
        currentDir = parentDir;
    }

    return null; // Return null if .figrc is not found in any parent directory


}

export const init = async <O extends Options>(options?: O): Promise<ReturnType<O>> => {

    options = { ...new Options(), ...options }

    logger.debug(`Options:`);
    logger.debug(options);

    const processed = new FigureData<O>();

    if (! options.configFolderPath) {

        //Attempt to get it from config
        const path = findDefaultConfigPath();

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

    const env = options.env ?? process.env.NODE_ENV

    const envConfig = loadConfig(getPath(options.configFolderPath, env))

    processed.schema = await processSchema(processed.schema, options.subSchema)

    processed.config = options.subSchema ?
        substituteEnvVars(processed.schema, { ...defaultConfig, ...envConfig })[options.subSchema] as MappedConfig<O>
        : substituteEnvVars(processed.schema, { ...defaultConfig, ...envConfig }) as MappedConfig<O>

    logger.debug(`Processed config:`)
    logger.debug(processed.config)

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

        console.log(`Logging errors!`)

        const cn = getConfigNodesForEnv(processed.schema, processed.config);

        if (!result.valid) {
            result.errors.map(e => formatError(e, cn)).forEach(e => console.error(e));
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
