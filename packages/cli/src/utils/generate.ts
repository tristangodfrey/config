import * as path from "path";
import {compile} from "json-schema-to-typescript";
import * as fs from "fs";
import {getConfigPath, getPath, getSchema} from "figure-config";

const gen = (p: string, schema: any) => {

    compile(schema, 'Config', {
        additionalProperties: false,

    }).then(ts => {


        const match = ts.match(/^export interface (\w+)/m);
        const interfaceName = match ? match[1] : null;

        const res = ts.concat(`\nexport type Config = ${interfaceName}; \n`);

        fs.writeFileSync(p, res)
    })
}

export const generate = (configFolderPath: string) => {
    const p = path.join(process.cwd(), 'node_modules/figure-config/dist/config.d.ts')

    const schema = getSchema(getPath(configFolderPath, 'schema'))

    gen(p, schema)

    if (process.env.FIGURE_DEV_MODE) {
        gen(path.join(process.cwd(), 'node_modules/figure-config/src/config.ts'), schema)
    }
}

export const generateDeclarationFiles = async (options: any) => {
    const configFolderPath = options.configPath ?? await getConfigPath()

    try {
        generate(configFolderPath)
        console.log("Configuration types generated")
    } catch(e) {
        console.error(e);
    }
}
