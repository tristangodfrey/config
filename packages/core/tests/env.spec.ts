import { test, expect } from "bun:test";
import {envVarPaths, substituteEnvVars} from "../src";

test("substituteEnvVars", async () => {

    process.env.DEBUG = 'hello';
    process.env.BROKER_URL = 'something';

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
                    },
                    unSubbed: {
                        type: 'string',
                        env: 'UNSUBBED'
                    }
                }
            }
        }
    }

    const config = {
        global: {
            unSubbed: 'HELLO'
        }

    }

    const res = await substituteEnvVars(schema, config)

    const expected = {
        global: {
            debug: 'hello',
            brokerUrl: 'something',
            unSubbed: 'HELLO'
        }
    }

    expect(res).toMatchObject(expected)
})
