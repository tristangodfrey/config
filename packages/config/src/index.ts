import {default as pino} from "pino"
import {Options, ReturnType} from "./options";
import {init} from './init';
import 'dotenv/config';

export * from "./figure";
export * from './fs';
export * from './options';
export * from './config';
export * from './env'
export * from './config-node';

export const figure = async <O extends Options = Options>(options?: O): Promise<ReturnType<O>> => {

    const logger = options?.logger ?? pino({
        level: options?.debug ? 'debug' : 'error',
        customLevels: {
            'log': 0
        }
    })

    return await init<O>(options, logger) as ReturnType<O>
}


