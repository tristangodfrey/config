import { default as findUp } from "find-up";
import path from "path";

export const packagePath = async (subPath?: string) => {
    const packageJsonPath = await findUp("package.json", { cwd: __dirname });
    return path.join(path.dirname(packageJsonPath), subPath);
};
