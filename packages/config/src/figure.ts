import {Schema, validate, ValidatorResult, ValidationError as SchemaValidationError} from "jsonschema";
import {getPath, getSchema, loadConfig} from "./fs";
import JsonRefs from "json-refs";
import {FigureEnv, getConfigNodesForEnv, substituteEnvVars} from "./env";
import {formatError} from "./validation";
import {Path} from "./config-node";
import {set} from "dot-prop";
import prompts from 'prompts';
import {Options} from "./options";
import {Config} from "./config";
import {ReturnType, MappedConfig} from "./options";

export const processSchema = async (schema: Schema, subSchema?: string) => {
    const resolved = (await JsonRefs.resolveRefs(schema)).resolved as Schema;
    logger.debug(`Loading subschema: ${subSchema}`);

    return (subSchema ? resolved?.properties?.[subSchema] : resolved) as Schema
}

class ValidationError extends Error {

    constructor(private readonly errors: SchemaValidationError[]) {
        super('Config validation error');
    }
}

export class FigureData<T> {
    schema: Schema;
    config: T;
}

type ConfigParseResult<T> = {
    isValid: boolean,
    errors?: string[],
    config?: T
}

export const init = async <O extends Options>(options: O): Promise<ReturnType<O>> => {

    const processed = new FigureData();

    if (! options.configFolderPath) {
        throw new TypeError(`Missing option: configFolderPath`);
    }

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

    processed.config = substituteEnvVars(processed.schema, { ...defaultConfig, ...envConfig });

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
            result.errors.map(e => formatError(e, cn)).forEach(e => console.error(e));
            process.exit(1);
        }
    } else {
        throw new ValidationError(result.errors)
    }

    if (options.returnInstance) {
        return new FigureInstance<MappedConfig<O>>(processed.schema, processed.config as Config, options, result);
    }

    return new FigureInstance<MappedConfig<O>>(processed.schema, processed.config as Config, options, result).config as ReturnType<O>;

}

export class FigureInstance<T> {

    public readonly env: FigureEnv<T>

    constructor(
        public readonly schema: Schema,
        public readonly config: T,
        public readonly options: Options,
        public readonly validatorResult: ValidatorResult
    ) {
        this.env = new FigureEnv<T>(schema, config)
    }
}
