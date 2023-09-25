import {Schema} from "jsonschema";
import {FigureInstance} from "./figure";
import {Config} from "./config";

export type ReturnType<O extends Options> =
    O["returnInstance"] extends true ? FigureInstance<MappedConfig<O>> : MappedConfig<O>

export type MappedConfig<O extends Options> = O["subSchema"] extends string ? Config[O["subSchema"]] : Config
export class Options {
    /**
     * Path to the configuration directory (required)
     */
    configFolderPath: string;
    /**
     * Optional path to the JSON schema (if it is not in `configFolderPath`)
     */
    schemaPath?: string;
    /**
     * Subschema to load (when using multiple configs in the same schema)
     */
    subSchema?: string;
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
