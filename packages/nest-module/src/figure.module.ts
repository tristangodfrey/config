import {Options as FigureOptions} from "@figure-config/core"
import {FigureService} from "./figure.service";
import {DynamicModule, Global, Module, Provider} from "@nestjs/common";

export const CONFIG = 'CONFIG';

@Global()
@Module({})
export class FigureModule {
    static register(options?: FigureOptions): DynamicModule {
        return {
            module: FigureModule,
            providers: [
                {
                    provide: CONFIG,
                    useFactory: async (figureService: FigureService) => {
                        await figureService.init(options);
                        return figureService.getConfig();
                    },
                    inject: [FigureService]
                } as Provider,
                FigureService,
            ],
            exports: [FigureService, CONFIG],
        };
    }
}
