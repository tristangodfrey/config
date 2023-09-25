import {default as pino, Logger} from "pino"
import {init} from "./figure";
import {Options, ReturnType} from "./options";

export * from "./figure";
export * from './fs';
export * from './options';

declare global {
    var logger: Logger
}

export * from './env'
export * from './config-node';
export const figure = async <O extends Options = Options>(options: O): Promise<ReturnType<O>> => {

    global.logger = pino({level: options.debug ? 'debug' : 'error'})

    return await init<O>(options) as ReturnType<O>
}


