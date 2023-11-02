"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FigureService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FigureService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@figure-config/core");
let FigureService = FigureService_1 = class FigureService {
    constructor() {
        this.logger = new common_1.Logger(FigureService_1.name);
    }
    async init(options) {
        if (!this.config) {
            this.config = await (0, core_1.figure)(Object.assign(Object.assign({}, options), { logger: this.logger }));
        }
    }
    getConfig() {
        return this.config;
    }
};
exports.FigureService = FigureService;
exports.FigureService = FigureService = FigureService_1 = __decorate([
    (0, common_1.Injectable)()
], FigureService);
//# sourceMappingURL=figure.service.js.map