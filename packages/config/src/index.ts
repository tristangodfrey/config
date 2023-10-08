import {default as pino} from "pino"
import {Logger, Options, ReturnType} from "./options";
import {init} from './init';

export * from "./figure";
export * from './fs';
export * from './options';
export * from './config';

declare global {
    var logger: Logger
}

export * from './env'
export * from './config-node';
export const figure = async <O extends Options = Options>(options?: O): Promise<ReturnType<O>> => {

    if (options?.logger) {
        global.logger = options.logger;
    } else {
        global.logger = pino({
            level: options?.debug ? 'debug' : 'error',
            customLevels: {
                'log': 0
            }
        })
    }

    return await init<O>(options) as ReturnType<O>
}


