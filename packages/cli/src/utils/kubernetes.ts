import {EnvVar, getEnvVars} from "@tristangodfrey/config";
import {Secret} from "kubernetes-models/v1";

const subAzure = (o: EnvVar[]) => o.reduce((o, curr) => ({...o, [curr.name]: `$(${curr.name})`}), {})
const subValue = (o: EnvVar[]) => o.reduce((o, curr) => ({...o, [curr.name]: `$(${curr.name})`}), {})

export const generateSecret = (schema: any, mode: string) => {
    const env = getEnvVars(schema)

    const secrets = env.filter(e => e.isSecret)

    let kvPairs

    if (mode === 'azure_variable') {
        kvPairs = subAzure(secrets)
    }

    if (mode === 'value') {
        //Get the values
    }
    const secret = new Secret({ data: kvPairs })

    console.log(secret.toJSON());
}
