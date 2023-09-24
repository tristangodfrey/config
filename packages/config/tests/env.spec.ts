import { test, expect } from "bun:test";
import {envVarPaths, getEnvVarValues, substituteEnvVars, transformPath} from "../src";
import jp from "jsonpath";

test("transformPath", async () => {

    const obj = {
        hello: {
            world: 'something_cool'
        }
    }

    const nodes = jp.nodes(obj, '$.hello.world')

    const input = nodes[0].path;

    console.log(input);

    const expected = 'hello.world';

    const res = transformPath(input)

    expect(res).toBe(expected)
})
test("envVarPaths", async () => {
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
    }

    const expected = [
        {
            path: 'global.debug',
            value: 'DEBUG'
        },
        {
            path: 'global.brokerUrl',
            value: 'BROKER_URL'
        }
    ]

    const res = await envVarPaths(schema)

    expect(res).toMatchObject(expected)
})

test("getEnvVarValues", async () => {
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
                        env: 'BROKER_URL',
                        isSecret: true
                    }
                }
            }
        }
    }

    const config = {
        global: {
            debug: 'hello',
            brokerUrl: 'something'
        }
    }

    const expected = [
        {
            name: 'DEBUG',
            value: 'hello',
            isSecret: false,
        },
        {
            name: 'BROKER_URL',
            value: 'something',
            isSecret: true,
        },
    ]


    const res = await getEnvVarValues(schema, config)

    expect(res).toMatchObject(expected);
})


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
