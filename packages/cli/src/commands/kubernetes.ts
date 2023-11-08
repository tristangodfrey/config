import {
    EnvVar,
    EnvVarValue,
    figure,
    FigureInstance,
} from "@figure-config/core";
import { ConfigMap, Secret } from "kubernetes-models/v1";
import { logger } from "../utils/logger";
import YAML from "yaml";

const subAzure = (o: EnvVar[]) =>
    o.reduce((o, curr) => ({ ...o, [curr.name]: `$(${curr.name})` }), {});
const subValue = (o: EnvVarValue[]) =>
    o.reduce((o, curr) => ({ ...o, [curr.name]: curr.value }), {});

const generateSecret = <T>(
    instance: FigureInstance<T>,
    mode: string,
    name: string,
) => {
    const env = instance.env.getEnvVars();

    const secrets = env.filter((e) => e.isSecret);

    let kvPairs;

    if (mode === "azure_variable") {
        kvPairs = subAzure(secrets);
    }

    if (mode === "value") {
        //Get the values
        const values = instance.env.getEnvVarValues();

        kvPairs = subValue(values.filter((v) => v.isSecret));
    }
    return new Secret({
        data: kvPairs,
        metadata: { name },
    });
};

const generateConfigMap = <T>(
    instance: FigureInstance<T>,
    mode: string,
    name: string,
) => {
    const envVars = instance.env.getEnvVars().filter((e) => !e.isSecret);

    let kvPairs;

    if (mode === "azure_variable") {
        kvPairs = subAzure(envVars);
    }

    if (mode === "value") {
        //Get the values
        logger.debug("Getting values");
        const values = instance.env.getEnvVarValues();

        kvPairs = subValue(values.filter((v) => !v.isSecret));
    }
    return new ConfigMap({ data: kvPairs, metadata: { name } });
};

const initConfig = async (subSchema: string, env: string) => {
    return await figure({
        env: env,
        subSchema: subSchema,
        logger: logger,
        exitOnError: false,
        returnInstance: true,
    });
};

export const configMap = async (subSchema: any, options: any) => {
    const instance = await initConfig(subSchema, options.env);

    const cm = generateConfigMap(
        instance,
        options.valueSubstitution,
        options.name ?? subSchema,
    );

    if (options.output === "json") {
        console.log(JSON.stringify(cm));
    }

    if (options.output === "yaml") {
        console.log(YAML.stringify(cm));
    }
};
export const secret = async (subSchema: any, options: any) => {
    const instance = await initConfig(subSchema, options.env);

    const secret = generateSecret(
        instance,
        options.valueSubstitution,
        options.name ?? subSchema,
    );

    console.log(JSON.stringify(secret));
};
