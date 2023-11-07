import fs from "fs";
import { stat } from "fs/promises";
import * as yaml from "js-yaml";
import { Schema } from "jsonschema";
import path, { join } from "path";

export const loadConfig = (path: string): object => {
    try {
        const data = fs.readFileSync(path, "utf8");

        if (!data) {
            return {};
        }

        return yaml.load(data) as object;
    } catch (e) {
        return {};
    }
};

export const getConfigPath = async () => {
    return (
        process.env.FIGURE_PATH ??
        (await findDefaultConfigPath()) ??
        findConfigPathFromPackageJson()
    );
};

export const findDefaultConfigPath = async () => {
    //check if ./config/schema.yaml exists
    const currentDir = process.cwd();

    const path = join(currentDir, "config", "schema.yaml");

    try {
        await stat(path);
        return join(currentDir, "config");
    } catch {
        return null;
    }
};

export const findConfigPathFromPackageJson = () => {
    let currentDir = process.cwd(); // Start from the current directory or a specified directory

    while (currentDir) {
        const packagePath = path.join(currentDir, "package.json"); // Construct the path to package.json in the current directory

        if (fs.existsSync(packagePath)) {
            const packageJson = JSON.parse(
                fs.readFileSync(packagePath).toString("utf-8"),
            );

            if (packageJson["figure"]) {
                if (packageJson["figure"]["configFolderPath"]) {
                    return path.join(
                        currentDir,
                        packageJson["figure"]["configFolderPath"],
                    );
                }
            }
        }

        // Move up to the parent directory, or null if already at the root
        const parentDir = path.dirname(currentDir);
        if (parentDir === currentDir) break; // Stop if we are at the root (i.e., the parent is the same as the current directory)
        currentDir = parentDir;
    }

    return null; // Return null if .figrc is not found in any parent directory
};

export const loadSchema = (schemaPath: string): Schema =>
    yaml.load(fs.readFileSync(schemaPath, "utf8")) as Schema;
export const getPath = (configFolderPath: string, name: string) =>
    path.join(configFolderPath, `${name}.yaml`);
