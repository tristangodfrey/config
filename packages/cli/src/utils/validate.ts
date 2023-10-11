import {figure} from "figure-config";

export const validate = async (appName: any, options: any) => {
    const config = await figure({
        env: options.environment,
        subSchema: appName,
        returnInstance: true
    })

    console.log('Validating configuration...')
    console.log('Configuration files:')
    console.log(`Default: ${config.options.configFolderPath}`);
    console.log(`Environment (${options.env}): ${config.options.env}`);
    console.log(`Schema: ${config.options.schemaPath}`)

    const res = config.config;

    if (res) {
        console.log('Configuration is valid!')
    }
}
