import {ValidationError as SchemaValidationError} from "jsonschema";

export class ValidationError extends Error {

    constructor(private readonly errors: SchemaValidationError[]) {
        super('Config validation error');
    }
}
