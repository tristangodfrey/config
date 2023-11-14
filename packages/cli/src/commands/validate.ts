import { figure } from "@figure-config/core";
import { logger } from "../utils/logger";

const validate = async (appName: any, env: string): Promise<boolean> => {
    //eslint-disable-next-line
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
        //eslint-disable-next-line
        console.log(`${env}: valid`);
    } else {
        //eslint-disable-next-line
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
