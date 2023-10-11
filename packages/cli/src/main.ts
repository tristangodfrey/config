import * as path from "path";
import {Command, Option} from 'commander';
import {configMap, secret} from "./utils/kubernetes";
import {upload} from "./utils/azure-devops";
import * as fs from "node:fs";
import {generateDeclarationFiles} from './utils/generate';
import {validate} from "./utils/validate";


// Init
const program = new Command();
const packageJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8'));
program.version(packageJson.version).name('figure')

//Common options

const OPTION_VS = new Option('-vs, --value-substitution <mode>', 'One of: [azure_variable, value]')
    .choices(['azure_variable', 'value']).default('azure_variable');
const OPTION_ENV = new Option('-e, --env <environment>', 'Environment specific config file');
const OPTION_KUBE_NS = new Option('-ns --namespace <namespace>', 'Kubernetes namespace');

//Commands

const kubernetes = program.command('kubernetes').description('Generate kubernetes resources')

kubernetes.command('secret')
    .argument('[appName]', 'Application name')
    .addOption(OPTION_ENV)
    .addOption(OPTION_KUBE_NS)
    .addOption(OPTION_VS)
    .action(secret)

kubernetes.command('configmap')
    .argument('[subSchema]', 'Application name')
    .addOption(OPTION_ENV)
    .addOption(OPTION_VS)
    .action(configMap)

program.command('set')
    .description('Set a configuration value')
    .argument('<path>', 'JSON Path to the configuration value (eg "app.kafka.url")')
    .argument('<value>', 'Value to set')
    .addOption(OPTION_ENV)
    .action((path, value, options) => {
        console.error('Not yet implemented')
    })

program.command('validate')
    .description('Validate a configuration against a config schema')
    .argument('[appName]', 'Application name')
    .addOption(OPTION_ENV)
    .action(validate)

const azure = program.command('azure').description('Azure DevOps resources')

azure.command('upload')
    .description('Set remote configuration (Azure variable group) for a given configuration')
    .argument('<sub_schema>', 'Sub-schema to use')
    .option('-p --pat <personal_access_token>', 'Azure DevOps personal access token')
    .option('-o --org <organisation>', 'Azure DevOps organisation')
    .action(upload)

azure.command('generate')
    .description('Generate Typescript declaration file for config')
    .option('-o --output <output_path>', 'Generated file output path')
    .option('-p --config-path <config_path>', 'Config directory path')
    .option('-s --sub-schema <sub_schema>', 'Generate type for sub-config instead of full config')
    .action(generateDeclarationFiles)


program.parse(process.argv)
