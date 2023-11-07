import { Logger, MappedConfig, Options, ReturnType } from "./options";
import { getConfigPath, getPath, loadSchema, loadConfig } from "./fs";
import { substituteEnvVars } from "./env";
import { validate } from "jsonschema";
import { getConfigNodes, Path } from "./config-node";
import inquirer, { QuestionCollection } from "inquirer";
import { set } from "dot-prop";
import { formatError } from "./validation";
import { FigureData, FigureInstance, processSchema } from "./figure";
import { ValidationError } from "./errors";
import yaml from "js-yaml";
import fs from "fs/promises";

export const init = async <O extends Options>(
    options: O,
    logger: Logger,
): Promise<ReturnType<O>> => {
    options = { ...new Options(), ...options };

    logger.debug(`Options:`);
    logger.debug(options);

    const processed = new FigureData<O>();

    if (!options.configFolderPath && !options.configFilePath) {
        const path = await getConfigPath();

        if (!path) {
            throw new TypeError(`Missing option: configFolderPath`);
        } else {
            options.configFolderPath = path;
        }
    }

    logger.debug(
        `Using config path: ${
            options.configFolderPath ?? options.configFilePath
        }`,
    );

    if (options.schema) {
        //Ignore schema path
        processed.schema = options.schema;
    } else {
        if (options.schemaPath) {
            //Load schema
            processed.schema = loadSchema(options.schemaPath);
        } else {
            processed.schema = loadSchema(
                getPath(options.configFolderPath, "schema"),
            );
        }
    }

    // Load config files
    // Default

    const defaultConfig = options.configFilePath
        ? loadConfig(options.configFilePath)
        : loadConfig(getPath(options.configFolderPath, "default"));

    if (Object.keys(defaultConfig).length === 0) {
        logger.debug("Default configuration is empty");
    }

    const env = options.env ?? process.env.NODE_ENV;

    const envConfig = options.configFilePath
        ? loadConfig(options.configFilePath)
        : loadConfig(getPath(options.configFolderPath, env));

    if (Object.keys(envConfig).length === 0) {
        logger.debug(
            `Environment-specific configuration for "${env}" is empty`,
        );
    }

    processed.schema = await processSchema(
        processed.schema,
        options.subSchema as string,
    );

    const mergedConfig = {
        ...defaultConfig,
        ...envConfig,
    };

    processed.config = options.subSchema
        ? (substituteEnvVars(processed.schema, mergedConfig)[
              options.subSchema
          ] as MappedConfig<O>)
        : (substituteEnvVars(
              processed.schema,
              mergedConfig,
          ) as MappedConfig<O>);

    logger.debug(`Processed config:`);
    logger.debug(processed.config);

    if (!processed.config && !options.prompt) {
        throw Error("Failed to find any configuration values after processing");
    }

    return handleConfig(processed, options, logger);
};

export const handleConfig = async <O extends Options>(
    processed: FigureData<any>,
    options: O,
    logger: Logger,
) => {
    //Validate configuration
    let result = validate(processed.config, processed.schema);
    let wasPrompted = false;

    if (options.prompt && result.errors.length > 0) {
        wasPrompted = true;
        //Prompt for missing values & try again
        const errors = result.errors.filter((e) => e.name === "required");

        const paths = errors.map((error) => Path.fromValidationError(error));

        const questions: QuestionCollection = paths.map((p) => {
            return {
                type: "input",
                name: p.dotPath(),
                message: p.dotPath(),
            };
        });

        const answers = await inquirer.prompt(questions);

        paths.forEach((p) => {
            const answer = answers[p.dotPath()];
            set(processed.config, p.dotPath(), answer);
        });

        //Re-validate
        result = validate(processed.config, processed.schema);

        if (options.configFilePath) {
            //Prompt to save configuration to file
            const saveAnswers = await inquirer.prompt({
                type: "confirm",
                message: `Would you like to save this configuration to ${options.configFilePath}?`,
                name: "saveToFile",
            });

            if (saveAnswers.saveToFile) {
                await fs.writeFile(
                    options.configFilePath,
                    yaml.dump(processed.config),
                );
            }
        }

        if (options.configFolderPath) {
            //Prompt to save configuration to file
            const saveAnswers = await inquirer.prompt([
                {
                    type: "confirm",
                    message: `Would you like to save this configuration under ${options.configFolderPath}?`,
                    name: "saveToFile",
                },
                {
                    type: "list",
                    message: `Please specify an environment (NODE_ENV)`,
                    default: `${process.env.NODE_ENV}`,
                    name: "nodeEnv",
                },
            ]);

            if (saveAnswers.saveToFile) {
                //Save the file
                const filePath = getPath(
                    options.configFolderPath,
                    saveAnswers.nodeEnv,
                );

                //Convert config object to a YAML string
                await fs.writeFile(filePath, yaml.dump(processed.config));
            }
        }
    }

    if (options.logErrors) {
        const cn = getConfigNodes(processed.schema, processed.config);

        if (!result.valid) {
            result.errors
                .map((e) => formatError(e, cn))
                .forEach((e) => logger.error(e));

            if (options.exitOnError) {
                process.exit(1);
            }
        }
    } else {
        throw new ValidationError(result.errors);
    }

    if (options.returnInstance) {
        return new FigureInstance<MappedConfig<O>>(
            processed.schema,
            processed.config,
            options,
            result,
            wasPrompted,
        ) as ReturnType<O>;
    }

    return new FigureInstance<MappedConfig<O>>(
        processed.schema,
        processed.config,
        options,
        result,
        wasPrompted,
    ).config as ReturnType<O>;
};
