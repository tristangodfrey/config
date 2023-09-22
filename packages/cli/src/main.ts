#!/usr/bin/env bun
import * as path from "path";
import {compile} from 'json-schema-to-typescript'
import * as fs from "fs";
import {fileURLToPath} from 'url';
import {
    configPath,
    getEnvVars,
    getSchema,
    loadAndMergeConfig,
    validate,
    default as config
} from "@tristangodfrey/config";
import prompts from 'prompts';
import {Command, Option} from 'commander';
import {createVariableGroup} from "./utils/azure-devops.ts";
import * as packageJson from "./../package.json"
import {generateSecret} from "./utils/kubernetes.ts";

const program = new Command();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const CONFIG_FOLDER_PATH = process.env.CONFIG_FOLDER_PATH;

if (!CONFIG_FOLDER_PATH) {
    console.error('CONFIG_FOLDER_PATH environment variable not defined')
    process.exit(1)
}

program.version(packageJson.version)

program.command('kubernetes')
    .command('secret')
    .argument('[appName]', 'Application name')
    .option('-e, --env <environment>', 'Environment specific config file')
    .addOption(new Option('-vs, --value-substitution <mode>', 'One of: [azure_variable, value]')
        .choices(['azure_variable', 'value']))
    .action((appName, options) => {

        const schema = getSchema(CONFIG_FOLDER_PATH)

        generateSecret(schema, 'azure_variable')

    })


program.command('validate')
    .description('Validate a configuration against a config schema')
    .argument('[appName]', 'Application name')
    .option('-e, --env <environment>', 'Environment specific config file')
    .action((appName, options) => {

        console.log(options);

        const defaultConfigPath = configPath(CONFIG_FOLDER_PATH, 'default')
        const envConfigPath = configPath(CONFIG_FOLDER_PATH, options.env ?? process.env.NODE_ENV)
        const schemaPath = configPath(CONFIG_FOLDER_PATH, 'schema')

        console.log('Validating configuration...')
        console.log('Configuration files:')
        console.log(`Default: ${defaultConfigPath}`);
        console.log(`Environment (${options.env}): ${envConfigPath}`);
        console.log(`Schema: ${schemaPath}`)

        const schema = getSchema(options.schema ?? CONFIG_FOLDER_PATH)

        const config = loadAndMergeConfig(
            defaultConfigPath,
            envConfigPath
        )

        const res = validate(schema, config, appName);

        const messages = res.errors.map(err => err.message)

        messages.length === 0 ? console.log('Configuration is valid!') : messages.forEach(m => console.error(m))
    })

program.command('upload')
    .description('Set remote configuration (Azure variable group) for a given package')
    .argument('<package_name>', 'Name of the package to configure')
    .action(async (packageName) => {
        //Fetch config from schema
        const schema = getSchema(CONFIG_FOLDER_PATH)

        if (!schema?.properties?.[packageName]) {
            console.error(`No configuration schema found for package: ${packageName}`)
            process.exit(1)
        }

        const vars = getEnvVars(schema['properties'][packageName])

        //Iterate each of them and ask for a value
        const variables: any = {}

        //Upload the list to azure variable group
        for (const envVar of vars) {
            const response = await prompts({
                type: 'text',
                name: 'value',
                message: envVar.name
            });

            variables[envVar.name] = {
                value: response.value,
                isReadOnly: false,
                isSecret: envVar.isSecret
            }
        }

        await createVariableGroup(variables, packageName)
    })


program.command('generate')
    .command('types')
    .description('Generate Typescript declaration file for config')
    .action(() => {
        const schema = getSchema(CONFIG_FOLDER_PATH)

        compile(schema as any, 'Configuration', {
            additionalProperties: false
        }).then(ts => {
            fs.writeFileSync(path.join(__dirname, '../src/config.ts'), ts)
        })
    })


program.parse(process.argv)
