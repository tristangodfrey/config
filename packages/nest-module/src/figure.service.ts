import {Inject, Injectable, Logger} from "@nestjs/common";
import {Config, figure, Options as FigureOptions} from "figure-config"

@Injectable()
export class FigureService {

    private config: Config;
    private readonly logger = new Logger(FigureService.name)

    constructor(@Inject('CONFIG_OPTIONS') private readonly options?: FigureOptions) {}

    async init() {
        if (! this.config) {
            this.config = await figure({
                ...this.options,
                logger: this.logger
            });
        }
    }

    getConfig() {
        return this.config;
    }
}
