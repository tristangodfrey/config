import { default as pino } from "pino";
import { Options, ReturnType } from "./options.js";
import { init } from "./init.js";
import { config } from "dotenv";

export * from "./figure.js";
export * from "./fs.js";
export * from "./options.js";
export * from "./env.js";
export * from "./config-node.js";

export const figure = async <O extends Options = Options>(
    options?: O,
): Promise<ReturnType<O>> => {
    const logger =
        options?.logger ??
        pino({
            level: options?.debug ? "debug" : "error",
            customLevels: {
                log: 0,
            },
        });

    return (await init<O>(options, logger)) as ReturnType<O>;
};
