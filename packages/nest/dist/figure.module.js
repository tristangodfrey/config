var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FigureModule_1;
import { FigureService } from "./figure.service";
import { Global, Module } from "@nestjs/common";
export const CONFIG = 'CONFIG';
let FigureModule = FigureModule_1 = class FigureModule {
    static register(options) {
        return {
            module: FigureModule_1,
            providers: [
                {
                    provide: CONFIG,
                    useFactory: async (figureService) => {
                        await figureService.init(options);
                        return figureService.getConfig();
                    },
                    inject: [FigureService]
                },
                FigureService,
            ],
            exports: [FigureService, CONFIG],
        };
    }
};
FigureModule = FigureModule_1 = __decorate([
    Global(),
    Module({})
], FigureModule);
export { FigureModule };
//# sourceMappingURL=figure.module.js.map