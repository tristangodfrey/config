import path from "path";
import {compile} from "json-schema-to-typescript";
import fs from "fs";
import {getPath, getSchema} from "figure-config";

export const generate = (configFolderPath: string) => {
    const p = path.join(process.cwd(), 'node_modules/figure-config/dist/config.d.ts')

    const schema = getSchema(getPath(configFolderPath, 'schema'))

    compile(schema as any, 'Config', {
        additionalProperties: false,

    }).then(ts => {


        const match = ts.match(/^export interface (\w+)/m);
        const interfaceName = match ? match[1] : null;

        const res = ts.concat(`\nexport type Config = ${interfaceName}; \n`);

        fs.writeFileSync(p, res)
    })
}
