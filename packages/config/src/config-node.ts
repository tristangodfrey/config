import jp from "jsonpath";
import {ValidationError} from "jsonschema";

export class Path {


    constructor(private p: jp.PathComponent[]) {}

    static fromValidationError(error: ValidationError): Path {
        const s = `${error.path.join('.')}.${error.argument}`

        return new Path([...error.path, error.argument])
    }

    parent() {
        return new Path(this.p.slice(0, -1))
    }

    toConfigPath() {
        const np = this.p.filter(p => ![
            "properties", "env"
        ].includes(p.toString()))

        return new Path(np)
    }

    dotPath() {
        return jp.stringify(this.p).replace('$.', '');
    }

    jpPath() {
        return jp.stringify(this.p)
    }
}


export type ConfigNode = {
    schemaPath: Path,
    configPath: Path,
    envVarName: string,
    configValue: string,
    isSecret: boolean,
    [k: symbol]: ConfigNode
}

export const getConfigNodeForError = (error: ValidationError, configNodes: ConfigNode[]) => {

    error.path.push(error.argument);

    const p = error.path.join('.')

    return configNodes.find(cn => cn.configPath.dotPath() === p)
}
