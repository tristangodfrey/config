import {Schema} from "jsonschema";
import * as jq from "node-jq";
import {get} from "dot-prop";

export type EnvVar = { name: string, isSecret: boolean }

type JqRes = string[][]
export const envVarPaths = async (schema: Schema) => {
    let res = (await jq.run('paths | select(.[-1] == "env")', schema, {input: 'json', output: 'compact'}) as string)
        .replace('\n', ',')


    const jqRes: JqRes = JSON.parse(`[${res}]`)

    jqRes
        .map(props => props.join('.')) //Create a path
        .map(path => ({
            name: get(schema, path) as string, //Name of the env variable
            path: path.split('.').filter(p => !["properties", "env"].includes(p)).join('.') //Associated config path
        }))
        .reduce((o, curr) => ({...o, [curr.name]: curr.path}), {}) //Convert to object
}

export const getEnvVars = (schema: Schema): EnvVar[] => {
    const envVars: EnvVar[] = [];

    for (const [key, value] of Object.entries(schema.properties ?? {})) {
        //@ts-ignore
        const envVar = value['env'];
        //@ts-ignore
        const isSecret = value['secret'];

        if (envVar) {
            envVars.push({
                name: envVar,
                isSecret: isSecret ?? false
            });
        } else if (value.type === 'object') {
            envVars.push(...getEnvVars(value));
        }
    }

    return envVars;
}

export const substituteEnvVars = (schemaObj: Schema, configObj: any) => {
    for (const [key, value] of Object.entries(schemaObj.properties ?? {})) {
        if (configObj[key] === undefined) {
            continue;
        }
        //@ts-ignore
        const envVarName = value['env'];

        if (envVarName) {
            if (process.env[envVarName]) {
                configObj[key] = process.env[envVarName];
            }
        } else if (value.type === 'object') {
            substituteEnvVars(value, configObj[key]);
        }
    }
};
