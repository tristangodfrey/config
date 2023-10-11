import * as path from "path";
import {compile} from "json-schema-to-typescript";
import * as fs from "fs";
import {getConfigPath, getPath, getSchema} from "figure-config";



const gen = (p: string, schema: any, subSchema: string) => {

    compile(schema, 'Config', {
        additionalProperties: false,

    }).then(ts => {
        const match = ts.match(/^export interface (\w+)/m);
        const interfaceName = match ? match[1] : null;


        const packageJson = {
            "name": "figure-types",
            "description": "Generated types for figure-config",
            "types": "index.d.ts"
        }

        const append = subSchema
            ? `\nexport type Config = ${interfaceName}["${subSchema}"]; \n`
            : `\nexport type Config = ${interfaceName}; \n`

        const res = ts.concat(append);

        fs.writeFileSync(p, res)
    })
}

const generate = (configFolderPath: string, subSchema: string) => {
    const p = path.join(process.cwd(), 'node_modules/figure-config/dist/config.d.ts')

    const schema = getSchema(getPath(configFolderPath, 'schema'))

    gen(p, schema, subSchema)

    if (process.env.FIGURE_DEV_MODE) {
        gen(path.join(process.cwd(), 'node_modules/figure-config/src/config.ts'), schema, subSchema)
    }
}

export const generateDeclarationFiles = async (options: any) => {
    const configFolderPath = options.configPath ?? await getConfigPath()

    try {
        generate(configFolderPath, options.subSchema)
        console.log("Configuration types generated")
    } catch (e) {
        console.error(e);
    }
}
