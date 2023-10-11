import {EnvVar, EnvVarValue, figure, FigureInstance, getSchema} from "figure-config";
import {ConfigMap, Secret} from "kubernetes-models/v1";

const subAzure = (o: EnvVar[]) => o.reduce((o, curr) => ({...o, [curr.name]: `$(${curr.name})`}), {})
const subValue = (o: EnvVarValue[]) => o.reduce((o, curr) => ({...o, [curr.name]: curr.value}), {})

const generateSecret = <T>(instance: FigureInstance<T>, mode: string) => {
    const env = instance.env.getEnvVars();

    console.debug(`Got env var values`);
    console.debug(env);

    const secrets = env.filter(e => e.isSecret)

    let kvPairs

    if (mode === 'azure_variable') {
        kvPairs = subAzure(secrets)
    }

    if (mode === 'value') {
        //Get the values
        const values = instance.env.getEnvVarValues();

        kvPairs = subValue(values.filter(v => v.isSecret));
    }
    const secret = new Secret({ data: kvPairs, metadata: { name: instance.options.subSchema as string } })

    return secret;
}

const generateConfigMap = <T>(instance: FigureInstance<T>, mode: string) => {
    const env = instance.env.getEnvVars()

    const secrets = env.filter(e => ! e.isSecret)

    let kvPairs

    if (mode === 'azure_variable') {
        kvPairs = subAzure(secrets)
    }

    if (mode === 'value') {
        //Get the values
    }
    const cm = new ConfigMap({ data: kvPairs })

    console.log(cm.toJSON());
}

export const configMap = async (subSchema: any, options: any) => {

    const instance = await figure({
        env: options.environment,
        subSchema: subSchema
    })

    const schema = getSchema(instance.options.configFolderPath)
    const cm = generateConfigMap(instance, options.valueSubstitution)
}
export const secret = async (appName: any, options: any) => {
    const instance = await figure({
        env: options.environment,
        subSchema: appName
    })

    const secret = generateSecret(instance, options.valueSubstitution)
}
