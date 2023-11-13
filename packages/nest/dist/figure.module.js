"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FigureModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FigureModule = exports.CONFIG = void 0;
const figure_service_1 = require("./figure.service");
const common_1 = require("@nestjs/common");
exports.CONFIG = 'CONFIG';
let FigureModule = FigureModule_1 = class FigureModule {
    static register(options) {
        return {
            module: FigureModule_1,
            providers: [
                {
                    provide: exports.CONFIG,
                    useFactory: async (figureService) => {
                        await figureService.init(options);
                        return figureService.getConfig();
                    },
                    inject: [figure_service_1.FigureService]
                },
                figure_service_1.FigureService,
            ],
            exports: [figure_service_1.FigureService, exports.CONFIG],
        };
    }
};
exports.FigureModule = FigureModule;
exports.FigureModule = FigureModule = FigureModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({})
], FigureModule);
//# sourceMappingURL=figure.module.js.map