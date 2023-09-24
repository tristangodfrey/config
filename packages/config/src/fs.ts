import fs from "fs";
import * as yaml from "js-yaml";
import {Schema} from "jsonschema";
import path from "path";

export const loadConfig = (path: string) => {
    try {
        const data = fs.readFileSync(path, 'utf8')
        return yaml.load(data) as object
    } catch (e) {
        logger.debug(`Could not find configuration file: ${path}`)
    }
}


export const getSchema = (schemaPath: string): Schema => yaml.load(fs.readFileSync(schemaPath, 'utf8')) as Schema
export const getPath = (configFolderPath: string, name: string) => path.join(configFolderPath, `${name}.yaml`)
