import { Schema } from "jsonschema";
import { set } from "dot-prop";
import jp from "jsonpath";
import { getConfigNodes, Path } from "./config-node";

export type EnvVar = { name: string; secret: boolean };
export type EnvVarValue = { name: string; isSecret: boolean; value: any };
export type EnvVarNode = {
    path: Path;
    value: any;
    isSecret: boolean;
    type: string;
};

/**
 * Finds end nodes that have `env` defined and returns their path
 * @param schema
 */
export const envVarPaths = (schema: Schema): EnvVarNode[] => {
    const nodes = jp.nodes(schema, "$..env");

    return nodes.map((r) => {
        const p = new Path(r.path);

        return {
            path: p,
            value: r.value,
            isSecret: Boolean(jp.query(schema, p.parent().jpPath())[0].secret),
            type: jp.query(schema, p.parent().jpPath())[0].type,
        };
    });
};

/**
 * Takes a configuration object and merges it with values from environment variables
 *
 * @param schema
 * @param config
 */
export const substituteEnvVars = <T>(schema: Schema, config: T): T => {
    const paths = envVarPaths(schema);

    paths.forEach((p) => {
        let value = process.env[p.value];

        if (value) {
            if (p.type === "boolean") {
                value = JSON.parse(value);
            }
        }

        return process.env[p.value]
            ? set(config, p.path.toConfigPath().dotPath(), value)
            : null;
    });

    return config;
};

export class FigureEnv<T> {
    constructor(
        private readonly schema: Schema,
        private readonly config: T,
    ) {}

    envVarPaths = () => envVarPaths(this.schema);

    getConfigNodesForEnv = () => getConfigNodes(this.schema, this.config);

    getEnvVars = (): EnvVar[] => {
        const paths = this.envVarPaths();

        return paths.map((p) => ({ name: p.value, secret: p.isSecret }));
    };

    /**
     * For each schema property that has `env` defined, return its value for the current configuration
     */
    getEnvVarValues = (): EnvVarValue[] => {
        const paths = this.envVarPaths();

        return paths.map((p) => ({
            name: p.value,
            value: jp.query(this.config, p.path.toConfigPath().dotPath())[0],
            isSecret: p.isSecret,
        }));
    };
}
