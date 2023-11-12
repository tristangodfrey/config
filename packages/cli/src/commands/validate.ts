import { figure } from "@figure-config/core";
import { logger } from "../utils/logger.js";

const validate = async (appName: any, env: string): Promise<boolean> => {
    console.log(`validating: ${env}`);

    const config = await figure({
        env: env,
        subSchema: appName,
        returnInstance: true,
        logErrors: true,
        logger: logger,
        debug: false,
        exitOnError: false,
    });

    if (config.validatorResult.valid) {
        console.log(`${env}: valid`);
    } else {
        console.log(`${env}: invalid`);
    }

    return config.validatorResult.valid;
};

export const validateCommand = async (subSchema: any, options: any) => {
    const environments = options.env.split(",");

    let valid = true;

    for (const env of environments) {
        const res = await validate(subSchema, env);
        valid = valid && res;
    }

    if (!valid) {
        process.exit(1);
    }
};
