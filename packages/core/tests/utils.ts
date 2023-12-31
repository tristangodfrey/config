import {Schema} from "jsonschema";

import * as fs from "fs/promises";
import {join} from "path";

export const setupConfigFiles = async (path: string, schema: Schema, config: object) => {

    await fs.mkdir(path, { recursive: true });

    await fs.writeFile(join(path, 'schema.yaml'), JSON.stringify(schema));
    await fs.writeFile(join(path, 'default.yaml'), JSON.stringify(config));
}

export const createSchema = () => {
    const schema = {
        "title": "Test",
        "description": "Configuration values for the IoT project",
        "type": "object",
        "properties": {
            "appName": {
                "type": "string",
                "env": "APP_NAME"
            },
            "appDescription": {
                "type": "string",
                "env": "APP_DESCRIPTION"
            },
        },
        "required": ["appName", "appDescription"]
    };

    return schema;
}
