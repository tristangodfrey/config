import {ValidationError} from "jsonschema";
import {FigureInstance} from "./figure";
import {ConfigNode, getConfigNodeForError} from "./config-node";

export const formatError = (error: ValidationError, configNodes: ConfigNode[]) => {

    const cn = getConfigNodeForError(error, configNodes)

    console.log(error);

    if (error.name === 'required') {
        if (error.path.length !== 0) {
            return `Missing value for: ${error.path.join('.')} [env: ${cn?.envVarName}]`;
        }
        return `Missing value for: ${error.argument}`;
    }

    return `${error.path.join('.')}: ${error.message}`;
};
