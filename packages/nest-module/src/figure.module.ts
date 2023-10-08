import {Options as FigureOptions} from "figure-config"
import {FigureService} from "./figure.service";
import {DynamicModule, Module, Provider} from "@nestjs/common";

export const CONFIG = 'CONFIG';

@Module({})
export class FigureModule {
    static register(options?: FigureOptions): DynamicModule {
        return {
            module: FigureModule,
            providers: [
                {
                    provide: 'CONFIG_OPTIONS',
                    useValue: options || null,
                },
                {
                    provide: CONFIG,
                    useFactory: async (figureService: FigureService) => {
                        await figureService.init();
                        return figureService.getConfig();
                    },
                    inject: [FigureService]
                } as Provider,
                FigureService,
            ],
            exports: [FigureService, 'CONFIG'],
        };
    }
}
