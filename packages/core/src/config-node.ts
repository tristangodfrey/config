import jp from "jsonpath";
import { Schema, ValidationError } from "jsonschema";
import { getProperty } from "dot-prop";

export class Path {
    constructor(private p: jp.PathComponent[]) {}

    static fromValidationError(error: ValidationError): Path {
        if (typeof error.schema !== "string") {
            if (error.schema.type === "object") {
                return new Path([...error.path, error.argument]);
            }
        }

        return new Path(error.path);
    }

    parent() {
        return new Path(this.p.slice(0, -1));
    }

    toConfigPath() {
        const np = this.p.filter(
            (p) => !["properties", "env"].includes(p.toString()),
        );

        return new Path(np);
    }

    dotPath() {
        return jp.stringify(this.p).replace("$.", "").replace("\\", "");
        // return "";
    }

    jpPath() {
        return jp.stringify(this.p);
    }
}

export type ConfigNode = {
    schemaPath: Path;
    configPath: Path;
    envVarName: string;
    configValue: string;
    isSecret: boolean;
    [k: symbol]: ConfigNode;
};

export const getConfigNodeForError = (
    error: ValidationError,
    configNodes: ConfigNode[],
) => {
    const p = Path.fromValidationError(error);

    return configNodes.find((cn) => {
        console.log(`${cn.configPath.dotPath()} === ${p.dotPath()}`);

        return cn.configPath.jpPath() === p.jpPath();
    });
};

export const getConfigNodes = (schema: Schema, config: any): ConfigNode[] => {
    // Iterate all schema end-nodes
    const nodes = jp.nodes(schema, "$..*").map((n) => ({
        path: new Path(n.path.map((p) => p.toString().replace("\\", ""))),
        value: n.value,
    }));

    return nodes.map((n) => {
        console.log(n.path.toConfigPath().dotPath());

        const cn: ConfigNode = {
            configPath: n.path.toConfigPath(),
            configValue: jp.value(config, n.path.toConfigPath().jpPath()),
            envVarName: n.value,
            schemaPath: n.path,
            isSecret: Boolean(
                jp.query(schema, n.path.parent().jpPath())[0].isSecret,
            ),
        };

        return cn;
    });
};
