#!/usr/bin/env node
import * as path from "path";
import { Option, program } from "commander";
import { configMap, secret } from "./commands/kubernetes";
import { upload } from "./commands/azure-devops";
import * as fs from "node:fs";
import { generateDeclarationFiles } from "./commands/generate";
import { validateCommand } from "./commands/validate";
import { figure } from "@figure-config/core";
import { packagePath } from "./utils/fs.js";
import { homedir } from "os";

let cliConfig: any;

// Init
const packageJson = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../package.json"), "utf8"),
);
program.version(packageJson.version).name("figure");

//Common options

const OPTION_VS = new Option(
    "-vs, --value-substitution <mode>",
    "One of: [azure_variable, value]",
)
    .choices(["azure_variable", "value"])
    .default("value");
const OPTION_ENV = new Option(
    "-e, --env <environment>",
    "Environment specific config file",
);
const OPTION_KUBE_NS = new Option(
    "-ns --namespace <namespace>",
    "Kubernetes namespace",
);
const OPTION_NAME = new Option(
    "-n --name <name>",
    "Name of the kubernetes resource",
);
const OPTION_OUTPUT = new Option(
    "-o --output <format>",
    "Output format. One of: [yaml, json]",
)
    .choices(["yaml", "json"])
    .default("json");

//Commands

const kubernetes = program
    .command("kubernetes")
    .description("Generate kubernetes resources");

kubernetes
    .command("secret")
    .argument("[appName]", "Application name")
    .addOption(OPTION_ENV)
    .addOption(OPTION_KUBE_NS)
    .addOption(OPTION_VS)
    .addOption(OPTION_NAME)
    .addOption(OPTION_OUTPUT)
    .action(secret);

kubernetes
    .command("configmap")
    .argument("[subSchema]", "Application name")
    .addOption(OPTION_ENV)
    .addOption(OPTION_VS)
    .addOption(OPTION_NAME)
    .addOption(OPTION_OUTPUT)
    .action(configMap);

program
    .command("set")
    .description("Set a configuration value")
    .argument(
        "<path>",
        'JSON Path to the configuration value (eg "app.kafka.url")',
    )
    .argument("<value>", "Value to set")
    .addOption(OPTION_ENV)
    .action((path, value, options) => {
        console.error("Not yet implemented");
    });

program
    .command("validate")
    .description("Validate a configuration against a config schema")
    .argument("[appName]", "Application name")
    .addOption(OPTION_ENV)
    .action(validateCommand);

const azure = program.command("azure").description("Azure DevOps resources");

azure
    .command("upload")
    .description(
        "Set remote configuration (Azure variable group) for a given configuration",
    )
    .argument("<sub_schema>", "Sub-schema to use")
    .option(
        "-p --pat <personal_access_token>",
        "Azure DevOps personal access token",
    )
    .option("-o --org <organisation>", "Azure DevOps organisation")
    .action(upload);

program
    .command("generate")
    .description("Generate Typescript declaration file for config")
    .option("-o --output <output_path>", "Generated file output path")
    .option("-p --config-path <config_path>", "Config directory path")
    .option(
        "-s --sub-schema <sub_schema>",
        "Generate type for sub-config instead of full config",
    )
    .action(generateDeclarationFiles);

const run = async () => {
    cliConfig = await figure({
        schemaPath: path.join(await packagePath("config"), "schema.yaml"),
        configFilePath: path.join(homedir(), ".figurerc"),
        prompt: false,
        returnInstance: true,
        debug: false,
    });

    program.parse(process.argv);
};

run();
