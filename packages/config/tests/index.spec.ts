import { test, expect } from "@jest/globals";
import {envVarPaths, loadSchema, partialSchema, partialValidate, substituteEnvVars} from "../src/index";
import {Draft07} from "json-schema-library"

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
    }

    const expected = {
        DEBUG: 'global.debug',
        BROKER_URL: 'global.brokerUrl',
    }

    const result = await envVarPaths(schema)

    expect(result).toMatchObject(expected)
})


test("substitute env vars", async () => {

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

    process.env.BROKER_URL = 'different'

    const config = {
        global: {
            debug: 'false',
            brokerUrl: 'something'
        }
    }

    substituteEnvVars(schema, config)

    console.log(config);

})

test("definition reference w/ subschema", () => {

    const s = {
        "title": "IoT Project Configuration",
        "description": "Configuration values for the IoT project",
        "type": "object",
        "$id": "HELLO",
        "definitions": {
            "kafka": {
                "type": "object",
                "description": "Configuration properties for the IoT Kafka library",
                "properties": {
                    "debug": {
                        "type": "string",
                        "env": "KAFKA_DEBUG",
                        "description": "A comma-separated list of debug contexts to enable. Detailed Producer debugging: broker,topic,msg. Consumer: consumer,cgrp,topic,fetch\n"
                    },
                    "bootstrapServer": {
                        "type": "string",
                        "format": "uri",
                        "env": "KAFKA_BOOTSTRAP_SERVER"
                    },
                    "username": {
                        "type": "string",
                        "env": "KAFKA_USERNAME"
                    },
                    "password": {
                        "type": "string",
                        "env": "KAFKA_PASSWORD"
                    },
                    "groupId": {
                        "type": "string",
                        "env": "KAFKA_CONSUMER_GROUP_ID"
                    }
                },
                "required": [
                    "debug",
                    "bootstrapServer",
                    "username",
                    "password",
                    "groupId"
                ]
            }
        },
        "properties": {
            "@core/runtime": {
                "type": "object",
                "properties": {
                    "kafka": {
                        "$ref": "#/definitions/kafka"
                    },
                    "appName": {
                        "type": "string",
                        "description": "The name of the application to run. @apps/<appName> should be a valid rush package in the repository. Used to dynamically load the package and set up topic configuration.\n"
                    },
                    "mode": {
                        "type": "string",
                        "description": "Sets the \"mode\" of the runtime instance. This determines which function from the application will be executed, and which source/destination topics will be used.\n",
                        "enum": [
                            "filter",
                            "map",
                            "delivery"
                        ]
                    }
                },
                "required": [
                    "kafka",
                    "mode",
                    "appName"
                ]
            },
            "@iot/api": {
                "type": "object",
                "properties": {
                    "jwt": {
                        "type": "object",
                        "properties": {
                            "cookie-name": {
                                "type": "string",
                                "env": "JWT_COOKIE_NAME"
                            },
                            "secret": {
                                "type": "string",
                                "env": "JWT_SECRET",
                                "secret": true
                            }
                        }
                    },
                    "kerlink": {
                        "type": "object",
                        "properties": {
                            "base-path": {
                                "type": "string",
                                "env": "KERLINK_BASE_PATH"
                            },
                            "push-configuration-id": {
                                "type": "string",
                                "env": "KERLINK_PUSH_CONFIGURATION_ID"
                            },
                            "customer-id": {
                                "type": "string",
                                "env": "KERLINK_SCHIPHOL_CUSTOMER_ID"
                            }
                        }
                    },
                    "scim": {
                        "type": "object",
                        "properties": {
                            "base-url": {
                                "type": "string",
                                "env": "SCIM_BASE_URL"
                            },
                            "basic_auth_username": {
                                "type": "string",
                                "env": "SCIM_BASIC_AUTH_USERNAME"
                            },
                            "basic_auth_password": {
                                "type": "string",
                                "env": "SCIM_BASIC_AUTH_PASSWORD",
                                "secret": true
                            }
                        }
                    },
                    "disable_splunk": {
                        "type": "boolean",
                        "env": "DISABLE_SPLUNK"
                    },
                    "mongodb": {
                        "type": "object",
                        "properties": {
                            "dbname": {
                                "type": "string",
                                "env": "MONGODB_DBNAME"
                            },
                            "uri": {
                                "type": "string",
                                "env": "MONGODB_URI",
                                "secret": true
                            }
                        }
                    },
                    "cors_origins": {
                        "type": "string",
                        "env": "CORS_ORIGINS"
                    },
                    "oauth": {
                        "type": "object",
                        "properties": {
                            "app_id": {
                                "type": "string",
                                "env": "OAUTH_APP_ID"
                            },
                            "app_secret": {
                                "type": "string",
                                "env": "OAUTH_APP_SECRET",
                                "secret": true
                            },
                            "base_url": {
                                "type": "string",
                                "env": "OAUTH_BASE_URL"
                            },
                            "discovery_document_location": {
                                "type": "string",
                                "env": "OAUTH_DISCOVERY_DOCUMENT_LOCATION"
                            },
                            "callback_url": {
                                "type": "string",
                                "env": "OAUTH_CALLBACK_URL"
                            }
                        }
                    }
                }
            },
            "@libs/kafka": {
                "type": "object",
                "properties": {
                    "brokerUrl": {
                        "type": "string",
                        "env": "KAFKA_BROKER_URL"
                    }
                }
            }
        },
        "required": [
            "global",
            "@apps/api",
            "@pipeline/filter",
            "@core/runtime"
        ]
    }



    const res = partialValidate(s, '@core/runtime', {
        appName: 'foo',
        // mode: 'filter',
        kafka: {
            debug: 'false'
        }
    })

    console.log(res)


})
