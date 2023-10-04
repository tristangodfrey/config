import {EnvVar, EnvVarValue, FigureInstance} from "figure-config";
import {ConfigMap, Secret} from "kubernetes-models/v1";

const subAzure = (o: EnvVar[]) => o.reduce((o, curr) => ({...o, [curr.name]: `$(${curr.name})`}), {})
const subValue = (o: EnvVarValue[]) => o.reduce((o, curr) => ({...o, [curr.name]: curr.value}), {})

export const generateSecret = <T>(instance: FigureInstance<T>, mode: string) => {
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

export const generateConfigMap = <T>(instance: FigureInstance<T>, mode: string) => {
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
