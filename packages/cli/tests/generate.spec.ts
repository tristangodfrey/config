import { expect, test } from "bun:test";
import { generateDeclarationFiles } from "../src/commands/generate";

test("generate declaration files", async () => {
    expect(async () => await generateDeclarationFiles({})).not.toThrow();
});

test("generate declaration files with subschema", async () => {});
