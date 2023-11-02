import { expect, test } from "@jest/globals";
import { FigureModule } from "../src";
import { Test } from "@nestjs/testing";
import { CONFIG } from "../src/figure.module";

test("module can be loaded", async () => {
    const ref = await Test.createTestingModule({
        imports: [FigureModule.register()],
    }).compile();

    const module = await ref.init();

    const config = module.get(CONFIG);

    expect(config.name).toBe("some_name");
    expect(config.url).toBe("https://www.google.com");
});
