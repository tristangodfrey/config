import { test, expect, jest } from "@jest/globals";
import {figure} from "../src";


test('Default logger', async () => {
    const config = await figure()

    expect(config).toBeDefined()
})


test('Custom logger', async () => {

    const customLogger = {
        error: jest.fn(),
        debug: jest.fn()
    };

    await figure({
        logger: customLogger
    })

    expect(customLogger.debug).toHaveBeenCalled()
})
