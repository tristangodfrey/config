import {Schema} from "jsonschema";
import {FigureInstance} from "./figure";
import {Config} from "@figure-config/types";

export type ReturnType<O extends Options> =
    O["returnInstance"] extends true ? FigureInstance<MappedConfig<O>> : MappedConfig<O>

export type MappedConfig<O extends Options> = O["subSchema"] extends keyof Config ? Config[O["subSchema"]] : Config

export type Logger = {
    error(message?: any, ...optionalParams: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;
    debug(message?: any, ...optionalParams: any[]): void;
}

export class Options {

    logger?: Logger;

    /**
     * Path to the configuration directory
     */
    configFolderPath?: string;
    /**
     * Optional path to the JSON schema (if it is not in `configFolderPath`)
     */
    schemaPath?: string;
    /**
     * Subschema to load (when using multiple configs in the same schema)
     */
    subSchema?: keyof Config;
    /**
     * Pass a schema directly. `schemaPath` will be ignored.
     */
    schema?: Schema;
    /**
     * Enables debug logging
     */
    debug?: boolean = false;
    /**
     * Set the environment-specific config name, setting it to "production" will lead to production.yaml being loaded,
     * defaults to the value of the NODE_ENV environment variable
     */
    env?: string;

    /**
     * If set, validation errors will be logged to the console (default = true)
     */
    logErrors?: boolean = true;

    /**
     * If set, figure will prompt for missing config values
     */
    prompt?: boolean = false;

    /**
     * If set, `FigureInstance` will be returned instead of the configuration object
     */
    returnInstance?: boolean = false;
}
