import { ValidationError } from "jsonschema";
import { ConfigNode, getConfigNodeForError } from "./config-node.js";

export const formatError = (
    error: ValidationError,
    configNodes: ConfigNode[],
) => {
    const cn = getConfigNodeForError(error, configNodes);

    if (error.name === "required") {
        if (error.path.length !== 0) {
            return `Missing value for: ${cn.configPath.dotPath()} [env: ${cn?.envVarName}]`;
        }
        return `Missing value for: ${error.argument}`;
    }

    return `${cn.configPath.dotPath()}: ${error.message}`;
};
