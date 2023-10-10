import { test, expect } from "@jest/globals";
import {envVarPaths, substituteEnvVars, figure} from "../src/index";
import {Draft07} from "json-schema-library"



test("full config from only env vars", async () => {

    process.env.APP_NAME = "cool-app"
    process.env.APP_DESCRIPTION = "cool-app-description"

    const schema = {
        "title": "Test",
        "description": "Configuration values for the IoT project",
        "type": "object",
        "properties": {
            "appName": {
                "type": "string",
                "env": "APP_NAME"
            },
            "appDescription": {
                "type": "string",
                "env": "APP_DESCRIPTION"
            },
        },
        "required": ["appName", "appDescription"]
    };

    const expected = {
        appName: "cool-app",
        appDescription: "cool-app-description"
    }

    const res = await figure({
        schema: schema,
        configFolderPath: '.'
    })

    expect(res).toMatchObject(expected)
})

