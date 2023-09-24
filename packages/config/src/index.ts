import {default as pino, Logger} from "pino"
import {FigureInstance, init, Options} from "./figure";

export * from "./figure";
export * from './fs';

declare global {
    var logger: Logger
}

export * from './env'
export * from './config-node';
export const figure = async <T>(options: Options): Promise<FigureInstance<T>> => {

    global.logger = pino({level: options.debug ? 'debug' : 'error'})

    return await init<T>(options)
}


