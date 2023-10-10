import fs from "fs";
import * as yaml from "js-yaml";
import {Schema} from "jsonschema";
import path from "path";

export const loadConfig = (path: string) => {
    try {
        const data = fs.readFileSync(path, 'utf8')
        return yaml.load(data) as object
    } catch (e) {
        throw Error(`Could not find configuration file: ${path}`)
    }
}

export const findDefaultConfigPath = () => {
    let currentDir = process.cwd(); // Start from the current directory or a specified directory

    while (currentDir) {
        const packagePath = path.join(currentDir, 'package.json'); // Construct the path to package.json in the current directory

        if (fs.existsSync(packagePath)) {
            const packageJson = JSON.parse(fs.readFileSync(packagePath).toString('utf-8'))

            if (packageJson['figure']) {
                if (packageJson['figure']['configFolderPath']) {
                    return path.join(currentDir, packageJson['figure']['configFolderPath']);
                }
            }
        }

        // Move up to the parent directory, or null if already at the root
        const parentDir = path.dirname(currentDir);
        if (parentDir === currentDir) break; // Stop if we are at the root (i.e., the parent is the same as the current directory)
        currentDir = parentDir;
    }

    return null; // Return null if .figrc is not found in any parent directory


}


export const getSchema = (schemaPath: string): Schema => yaml.load(fs.readFileSync(schemaPath, 'utf8')) as Schema
export const getPath = (configFolderPath: string, name: string) => path.join(configFolderPath, `${name}.yaml`)
