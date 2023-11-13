import { describe, expect, it } from "@jest/globals";
import { ValidationError } from "jsonschema";

import { Path } from "../src";

describe("Path", () => {
    // it("gets all config leaf nodes", () => {
    //     const res = getConfigNodes(
    //         loadSchema(path.join(__dirname, "../config")),
    //         loadConfig(path.join(__dirname, "../config")),
    //     );
    // });

    it("should create a path from a validation error", () => {
        const err: ValidationError = {
            path: ["@core/api", "kerlink"],
            property: "instance.@core/api.kerlink",
            message: 'requires property "basePath"',
            schema: {
                type: "object",
                properties: {},
                required: ["basePath", "pushConfigurationId", "customerId"],
            },
            instance: {
                pushConfigurationId: "",
                customerId: "27",
            },
            name: "required",
            argument: "basePath",
            stack: 'instance.@core/api.kerlink requires property "basePath"',
        };

        const path = Path.fromValidationError(err);

        expect(path.dotPath()).toBe('$["@core/api"].kerlink.basePath');
    });

    it("should do it again", () => {
        const err: ValidationError = {
            path: ["splunk", "disable"],
            property: "instance.splunk.disable",
            message: "is not of a type(s) boolean",
            //@ts-ignore
            schema: { type: "boolean", env: "DISABLE_SPLUNK" },
            instance: "true",
            name: "type",
            argument: ["boolean"],
            stack: "instance.splunk.disable is not of a type(s) boolean",
        };

        const path = Path.fromValidationError(err);

        expect(path.dotPath()).toBe("splunk.disable");
    });
});
