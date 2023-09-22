import * as fs from "fs";
import * as path from "path";
import * as yaml from "js-yaml";
import {Schema, validate as schemaValidate, ValidatorResult} from "jsonschema";
import {Draft07, JsonSchema} from "json-schema-library";
import {substituteEnvVars} from "./env";

export * from './env'

export const partialSchema = (schema: object, propertyName: string) => {
    const s = new Draft07(schema);

    return (s.getChildSchemaSelection(propertyName) as any)[0] as JsonSchema;

}

export const processSchema = (schema: Schema, subSchema: string) => {
    const required = schema.required as string[]

    schema.required = required.filter(r => r === subSchema)

    return schema
}

export const partialValidate = (config: any, schema: object, propertyName: string) => {

    const instance = { [propertyName]: config }

    return schemaValidate(
        instance,
        processSchema(schema, propertyName)
    )
}

export const getSchema = (configFolderPath: string): Schema => yaml.load(fs.readFileSync(path.join(configFolderPath, 'schema.yaml'), 'utf8')) as Schema
export const configPath = (configDirectory: string, name: string) => path.join(configDirectory, `${name}.yaml`)
export const loadSchema =(subSchema: string, configFolderPath: string) =>
    subSchema ? (getSchema(configFolderPath) as any)[subSchema] : getSchema(configFolderPath)

export const validate = (schema: any, config: any, subSchema?: string) => (subSchema ? partialValidate(config, schema, subSchema) : schemaValidate(config, schema)) as ValidatorResult

export default <T>(configFolderPath: string, subSchema?: string): T => {
    // Load yaml schema
    const schema = getSchema(configFolderPath)

    // Determine NODE_ENV
    const nodeEnv = process.env.NODE_ENV || 'development';

    // Load and merge config yaml
    const defaultConfigPath = configPath(configFolderPath, 'default')
    const envConfigPath = configPath(configFolderPath, nodeEnv);

    const mergedConfig = loadAndMergeConfig(defaultConfigPath, envConfigPath);

    // Substitute environment variables
    substituteEnvVars(schema, mergedConfig);

    const result = validate(schema, mergedConfig, subSchema);

    if (!result.valid) {
        throw new Error(`Config validation error in ${defaultConfigPath}, ${envConfigPath}: ${result.toString()}`);
    }

    // Return config object
    return mergedConfig as T;
};

export const loadConfig = (path: string) => yaml.load(fs.readFileSync(path, 'utf8')) as object

export const loadAndMergeConfig = (defaultPath: string, envPath: string) => {
    const defaultConfig = loadConfig(defaultPath);
    let envConfig = {};

    try {
        envConfig = loadConfig(envPath);
    } catch (e) {
        // File may not exist, that's ok
    }

    return {...defaultConfig, ...envConfig};
};
