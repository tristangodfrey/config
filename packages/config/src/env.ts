import {Schema} from "jsonschema";
import {set, get} from "dot-prop";
import jp from "jsonpath";
import {ConfigNode, Path} from "./config-node";
import {FigureData} from "./figure";

export type EnvVar = { name: string, isSecret: boolean }
export type EnvVarValue = { name: string, isSecret: boolean, value: any }
export type EnvVarPath = { path: Path, value: any, isSecret: boolean }

export const envVarPaths = (schema: Schema): EnvVarPath[] => {
    const nodes = jp.nodes(schema, '$..env')

    return nodes.map(r => {

        const p = new Path(r.path);

        return {
            path: p,
            value: r.value,
            isSecret: Boolean(jp.query(schema, p.parent().jpPath())[0].isSecret)
        }
    })
}

export const substituteEnvVars = <T>(schema: Schema, config: T): T => {

    const paths = envVarPaths(schema);

    paths.map(p => ({
        path: p.path.toConfigPath().dotPath(),
        value: p.value

    })).forEach(p => process.env[p.value] ? set(config, p.path, process.env[p.value]) : null)

    return config;
};

export const getConfigNodesForEnv = (schema: Schema, config: any): ConfigNode[] => {
    // Iterate all schema end-nodes
    const nodes = jp.nodes(schema, '$..env').map(n => ({ path: new Path(n.path), value: n.value }))

    return nodes.map(n => {
        const cn: ConfigNode = {
            configPath: n.path.toConfigPath(),
            configValue: get(config, n.path.toConfigPath().dotPath()),
            envVarName: n.value,
            schemaPath: n.path,
            isSecret: Boolean(jp.query(schema, n.path.parent().jpPath())[0].isSecret)
        }

        return cn;
    })
}

export class FigureEnv<T> {


    constructor(private readonly schema: Schema, private readonly config: T) {
    }


    envVarPaths = () => envVarPaths(this.schema)

    getConfigNodesForEnv = () => getConfigNodesForEnv(this.schema, this.config)

    getEnvVars = (): EnvVar[] => {
        const envVars: EnvVar[] = [];

        const paths = this.envVarPaths()

        return paths.map(p => ({name: p.value, isSecret: p.isSecret}));
    }

    getEnvVarValues = (): EnvVarValue[] => {
        const paths = this.envVarPaths()

        return paths.map(p => ({
            name: p.value,
            value: jp.query(this.config, `$.${p.path}`)[0],
            isSecret: p.isSecret
        }))
    }
}
