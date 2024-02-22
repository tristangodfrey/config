import { describe, expect, it } from "@jest/globals";
import { FigureModule } from "./index";
import { NestFactory } from "@nestjs/core";
import { CONFIG } from "./figure.module";
import { Module } from "@nestjs/common";

const voidLogger = {
    error(message?: any, ...optionalParams) {},
    log(message?: any, ...optionalParams) {},
    debug(message?: any, ...optionalParams) {},
    warn(message: any, ...optionalParams): any {},
};

describe("FigureModule", () => {
    @Module({
        imports: [FigureModule.register({ logger: voidLogger })],
    })
    class TestModule {}

    it("should log nothing when a null logger is passed", async () => {
        const app = await NestFactory.create(TestModule, {
            logger: voidLogger,
        });

        const config = app.get(CONFIG);

        expect(config.name).toBe("some_name");
        expect(config.url).toBe("https://www.google.com");
    });
});
