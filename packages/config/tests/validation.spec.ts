import {describe, expect, jest, test} from "@jest/globals";
import { Options } from "./../src/options";
import {figure, FigureData} from "../src";
import {Schema} from "jsonschema";
import {handleConfig} from "../src/init";

describe("Validation", () => {

    test("It logs errors and exits if options.logErrors is set", async () => {

        //@ts-ignore
        const exitSpy = jest.spyOn(process, 'exit').mockImplementation((code) => {});
        const logger = {
            error: jest.fn(),
            debug: jest.fn(),
            log: jest.fn(),
        }

        const schema: Schema = {
            "title": "Test",
            "description": "Configuration values for the IoT project",
            "type": "object",
            "properties": {
                "app": {
                    "type": "object",
                    "properties": {
                        "port": {
                            "type": "string",
                            "env": "APP_PORT"
                        },
                        "hostname": {
                            "type": "string",
                        }
                    },
                    "required": ["port", "hostname"]
                },

            },
            "required": ["app"]
        } as Schema;

        const options: Options = {
            logErrors: true,
            // logger: logger,
            schema: schema
        }

        const processed = new FigureData();
        processed.schema = schema;
        processed.config = {}

        const res = await handleConfig(processed, options, logger);

        expect(exitSpy).toHaveBeenCalled();






        //Stages:


        //Figure out root config path
        //Load schema
        //Load config files
        //Validate config against schema
        //Handle possible validation errors

    })

    test("validation error on subschema", async () => {

    })


})
