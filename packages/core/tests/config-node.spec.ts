import { describe, expect, it } from "@jest/globals";
import { ValidationError } from "jsonschema";

import jp from "jsonpath";
import { Path } from "../src";

describe("Path", () => {
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
});
