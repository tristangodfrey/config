import { figure } from "@figure-config/core";
import { logger } from "../utils/logger";

export const validate = async (appName: any, options: any) => {
    console.log("Validating configuration...");

    const config = await figure({
        env: options.env,
        subSchema: appName,
        returnInstance: true,
        logErrors: true,
        logger: logger,
        debug: false,
    });

    console.log("Configuration files:");
    console.log(`Default: ${config.options.configFolderPath}`);
    console.log(`Environment (${options.env}): ${config.options.env}`);
    console.log(`Schema: ${config.options.schemaPath}`);

    const res = config.config;

    if (res) {
        console.log("Configuration is valid!");
    } else {
        process.exit(1);
    }
};
