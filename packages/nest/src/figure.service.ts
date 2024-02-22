import { Injectable, Logger } from "@nestjs/common";
import { figure, Options as FigureOptions } from "@figure-config/core";

@Injectable()
export class FigureService {
    private config: any;
    private readonly logger = new Logger(FigureService.name);

    async init(options?: FigureOptions) {
        if (!this.config) {
            this.config = await figure({
                logger: this.logger,
                ...options,
            });
        }
    }

    getConfig() {
        return this.config;
    }
}
