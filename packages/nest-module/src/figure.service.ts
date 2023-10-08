import {Inject, Injectable, Logger, OnModuleInit} from "@nestjs/common";
import {Options as FigureOptions, Config, figure} from "figure-config"

@Injectable()
export class FigureService {

    private config: Config;
    private readonly logger = new Logger(FigureService.name)

    constructor(@Inject('CONFIG_OPTIONS') private readonly options?: FigureOptions) {}

    async init() {
        if (! this.config) {
            this.config = await figure(this.options)
        }
    }

    getConfig() {
        return this.config;
    }
}
