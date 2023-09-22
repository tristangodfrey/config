import { test, expect } from "@jest/globals";
import { envVarPaths } from "../index";
test("getting env var paths from schema", async () => {
    const schema = {
        properties: {
            global: {
                type: 'object',
                properties: {
                    debug: {
                        type: 'string',
                        env: 'DEBUG'
                    },
                    brokerUrl: {
                        type: 'string',
                        env: 'BROKER_URL'
                    }
                }
            }
        }
    };
    const expected = {
        DEBUG: 'global.debug',
        BROKER_URL: 'global.brokerUrl',
    };
    const result = await envVarPaths(schema);
    expect(result).toBe(expected);
});
//# sourceMappingURL=index.spec.js.map