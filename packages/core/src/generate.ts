import { getPath, loadSchema } from "./fs";
import path from "path";
import fs from "fs";
import { compile } from "json-schema-to-typescript";

export const generate = () => {
    // Get path to parent package

    const schema = loadSchema(getPath("configFolderPath", "schema"));
    const defaultOutputPath = path.join(__dirname, "../src/config.ts");

    // path to config.d.ts
    const outputPath = "";

    compile(schema as any, "Configuration", {
        additionalProperties: false,
    }).then((ts) => {
        fs.writeFileSync(outputPath, ts);
    });
};
