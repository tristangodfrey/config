import {Schema, ValidatorResult} from "jsonschema";
import JsonRefs from "json-refs";
import {FigureEnv} from "./env";
import {MappedConfig, Options} from "./options";


export const processSchema = async (schema: Schema, subSchema?: string) => {
    const resolved = (await JsonRefs.resolveRefs(schema)).resolved as Schema;
    logger.debug(`Loading subschema: ${subSchema}`);

    return (subSchema ? resolved?.properties?.[subSchema] : resolved) as Schema
}

export class FigureData<O extends Options> {
    schema: Schema;
    config: MappedConfig<O>;
}

type ConfigParseResult<T> = {
    isValid: boolean,
    errors?: string[],
    config?: T
}

export class FigureInstance<T> {

    public readonly env: FigureEnv<T>

    constructor(
        public readonly schema: Schema,
        public readonly config: T,
        public readonly options: Options,
        public readonly validatorResult: ValidatorResult
    ) {
        this.env = new FigureEnv<T>(schema, config)
    }
}
