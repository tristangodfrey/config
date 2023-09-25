#!/usr/bin/env bun
import * as path from "path";
import {figure, getSchema} from "figure-config";
import prompts from 'prompts';
import {Command, Option} from 'commander';
import {createVariableGroup} from "./utils/azure-devops.ts";
import * as packageJson from "./../package.json"
import {generateConfigMap, generateSecret} from "./utils/kubernetes.ts";
import {generate} from "./utils/generate.ts";

const program = new Command();

const CONFIG_FOLDER_PATH = process.env.CONFIG_FOLDER_PATH;

if (!CONFIG_FOLDER_PATH) {
    console.error('CONFIG_FOLDER_PATH environment variable not defined')
    process.exit(1)
}

program.version(packageJson.version).name('figure')

const kubernetes = program.command('kubernetes').description('Generate kubernetes resources')

const OPTION_VS = new Option('-vs, --value-substitution <mode>', 'One of: [azure_variable, value]')
    .choices(['azure_variable', 'value']).default('azure_variable');

const OPTION_ENV = new Option('-e, --env <environment>', 'Environment specific config file');
const OPTION_KUBE_NS = new Option('-ns --namespace <namespace>', 'Kubernetes namespace');

kubernetes.command('secret')
    .argument('[appName]', 'Application name')
    .addOption(OPTION_ENV)
    .addOption(OPTION_KUBE_NS)
    .addOption(OPTION_VS)
    .action(async (appName, options) => {
        const instance = await figure({
            configFolderPath: CONFIG_FOLDER_PATH,
            env: options.environment,
            subSchema: appName
        })

        console.log(instance.config);

        const secret = generateSecret(instance, options.valueSubstitution)

        console.log(JSON.stringify(secret));

    })

kubernetes.command('configmap')
    .argument('[appName]', 'Application name')
    .addOption(OPTION_ENV)
    .addOption(OPTION_VS)
    .action(async (appName, options) => {

        const instance = await figure({
            configFolderPath: CONFIG_FOLDER_PATH,
            env: options.environment,
            subSchema: appName
        })

        const schema = getSchema(CONFIG_FOLDER_PATH)

        const cm = generateConfigMap(instance, options.valueSubstitution)

    })

program.command('set')
    .description('Set a configuration value')
    .argument('<path>', 'JSON Path to the configuration value (eg "app.kafka.url")')
    .argument('<value>', 'Value to set')
    .addOption(OPTION_ENV)
    .action((path, value, options) => {

    })

program.command('validate')
    .description('Validate a configuration against a config schema')
    .argument('[appName]', 'Application name')
    .addOption(OPTION_ENV)
    .action(async (appName, options) => {
        const config = await figure({
            configFolderPath: CONFIG_FOLDER_PATH,
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
    })

program.command('upload')
    .description('Set remote configuration (Azure variable group) for a given configuration')
    .argument('<sub_schema>', 'Sub-schema to use')
    .option('-p --pat <personal_access_token>', 'Azure DevOps personal access token')
    .option('-o --org <organisation>', 'Azure DevOps organisation')
    .action(async (subSchema, options) => {

        const configFolderPath = path.join(__dirname, '../config')

        const cliConfig = await figure({
            configFolderPath: configFolderPath,
            subSchema: 'azureDevops',
            debug: true,
            prompt: true,
            returnInstance: true
        });

        const cliConfigInstance = cliConfig.config;

        const appConfig = await figure({
            configFolderPath: CONFIG_FOLDER_PATH,
            subSchema: subSchema
        })

        const vars = appConfig.env.getConfigNodesForEnv()

        //Iterate each of them and ask for a value
        const variables: any = {}

        //Upload the list to azure variable group
        for (const envVar of vars) {

            const response = await prompts({
                type: 'text',
                name: 'value',
                message: envVar.envVarName,
                initial: envVar.configValue
            });

            variables[envVar.envVarName] = {
                value: response.value,
                isReadOnly: false,
                isSecret: envVar.isSecret
            }
        }

        if (cliConfigInstance) {
            await createVariableGroup(variables, subSchema, cliConfigInstance.pat, options.org, cliConfigInstance.project)
        }

    })


program.command('generate')
    .description('Generate Typescript declaration file for config')
    .option('-o --output <output_path>', 'Generated file output path')
    .option('-p --config-path <config_path>', 'Config directory path')
    .action(async (options) => {
        const configFolderPath = options.configPath ?? CONFIG_FOLDER_PATH

        generate(configFolderPath)
    })


program.parse(process.argv)
