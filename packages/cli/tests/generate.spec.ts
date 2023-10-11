import {generateDeclarationFiles} from "../src/functions";
import {expect, test} from "bun:test";

test("generate declaration files", async () => {
    expect(async () => await generateDeclarationFiles({})).not.toThrow()
})

test("generate declaration files with subschema", async () => {

})
