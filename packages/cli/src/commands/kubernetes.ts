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

const getData = <T>(
    instance: FigureInstance<T>,
    mode: string,
    secret: boolean,
) => {
    const env = instance.env.getEnvVars();

    const values = env.filter((e) => e.secret === secret);

    let kvPairs;

    if (mode === "azure_variable") {
        kvPairs = subAzure(values);
    }

    if (mode === "value") {
        //Get the values
        const values = instance.env
            .getEnvVarValues()
            // .filter((v) => {
            //     console.log(v);
            //     return v.isSecret === secret;
            // })
            .map((v) => ({ ...v, value: v.value?.toString() }));

        kvPairs = subValue(values);
    }
    return kvPairs;
};

const generateSecret = <T>(
    instance: FigureInstance<T>,
    mode: string,
    name: string,
) => {
    const kvPairs = getData(instance, mode, true);

    return new Secret({
        stringData: kvPairs,
        metadata: { name },
    });
};

const generateConfigMap = <T>(
    instance: FigureInstance<T>,
    mode: string,
    name: string,
) => {
    const kvPairs = getData(instance, mode, false);
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

    logOutput(options.output, cm);
};

const logOutput = (format: string, value: object) => {
    if (format === "json") {
        console.log(JSON.stringify(value));
    }

    if (format === "yaml") {
        console.log(
            YAML.stringify(value, { defaultStringType: "QUOTE_DOUBLE" }),
        );
    }
};

export const secret = async (subSchema: any, options: any) => {
    const instance = await initConfig(subSchema, options.env);

    const secret = generateSecret(
        instance,
        options.valueSubstitution,
        options.name ?? subSchema,
    );

    logOutput(options.output, secret);
};
