import { ValidationError } from "jsonschema";
import { ConfigNode, getConfigNodeForError } from "./config-node";

export const formatError = (
    error: ValidationError,
    configNodes: ConfigNode[],
) => {
    const cn = getConfigNodeForError(error, configNodes);

    if (!cn) {
        console.log("CN not found");
        console.log(error);
        // console.log(configNodes);
    }

    if (error.name === "required") {
        if (error.path.length !== 0) {
            return `Missing value for: ${cn.configPath.dotPath()} [env: ${cn?.envVarName}]`;
        }
        return `Missing value for: ${error.argument}`;
    }

    return `${cn.configPath.dotPath()}: ${error.message}`;
};
