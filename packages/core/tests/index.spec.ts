import { afterAll, afterEach, expect, test } from "@jest/globals";
import { figure } from "../src/index";
import * as fs from "fs/promises";
import { setupConfigFiles } from "./utils";
import { join } from "path";

afterEach(() => {
    process.env.APP_NAME = undefined;
    process.env.APP_DESCRIPTION = undefined;
    process.env.FIGURE_PATH = undefined;
});

test("full config from only env vars", async () => {
    process.env.APP_NAME = "cool-app";
    process.env.APP_DESCRIPTION = "cool-app-description";

    const schema = {
        title: "Test",
        description: "Configuration values for the IoT project",
        type: "object",
        properties: {
            appName: {
                type: "string",
                env: "APP_NAME",
            },
            appDescription: {
                type: "string",
                env: "APP_DESCRIPTION",
            },
        },
        required: ["appName", "appDescription"],
    };

    const expected = {
        appName: "cool-app",
        appDescription: "cool-app-description",
    };

    const res = await figure({
        schema: schema,
        configFolderPath: ".",
    });

    expect(res).toMatchObject(expected);
});

test("load config from default path", async () => {
    //create a temporary file at the default path

    const schema = {
        title: "Test",
        description: "Configuration values for the IoT project",
        type: "object",
        properties: {
            appName: {
                type: "string",
                env: "APP_NAME",
            },
            appDescription: {
                type: "string",
                env: "APP_DESCRIPTION",
            },
        },
        required: ["appName", "appDescription"],
    };

    const config = {
        appName: "some_app",
        appDescription: "some_description",
    };

    await setupConfigFiles(join(process.cwd(), "config"), schema, config);

    const actual = await figure();

    expect(actual).toMatchObject(config);
});

test("merge configs (deep)", async () => {});

test("load config path from env variable", async () => {
    process.env.FIGURE_PATH = join(__dirname, "fixture/env-config-dir");

    const actual = await figure();

    expect(actual).toMatchObject({
        name: "some_name",
        url: "https://www.google.com",
    });
});

test("load config path from package.json", async () => {
    const actual = await figure();

    expect(actual).toMatchObject({
        appName: "some_app",
        appDescription: "some_description",
    });
});
