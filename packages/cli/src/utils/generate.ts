import * as path from "path";
import {compile} from "json-schema-to-typescript";
import * as fs from "fs/promises";
import {getConfigPath, getPath, getSchema} from "@figure-config/core";

const gen = async (p: string, schema: any, subSchema: string) => {
    const ts = await compile(schema, 'Config', {
        additionalProperties: false,
    });

    const match = ts.match(/^export interface (\w+)/m);
    const interfaceName = match ? match[1] : null;

    const append = subSchema
        ? `\nexport type Config = ${interfaceName}["${subSchema}"]; \n`
        : `\nexport type Config = ${interfaceName}; \n`

    await fs.writeFile(p, ts.concat(append))

}

const generate = async (configFolderPath: string, subSchema: string) => {

    const modulePath = path.join(process.cwd(), 'node_modules/@figure-config/types')

    await fs.mkdir(modulePath).catch(e => e)

    await fs.writeFile(path.join(modulePath, '/package.json'), JSON.stringify({
        "name": "figure-types",
        "description": "Generated types for @figure-config/core",
        "types": "index.d.ts"
    }))

    const p = path.join(modulePath, '/index.d.ts')

    const schema = getSchema(getPath(configFolderPath, 'schema'))

    await gen(p, schema, subSchema)
}

export const generateDeclarationFiles = async (options: any) => {
    const configFolderPath = options.configPath ?? await getConfigPath()

    try {
        await generate(configFolderPath, options.subSchema)
        console.log("Configuration package generated")
    } catch (e) {
        console.error(e);
    }
}
