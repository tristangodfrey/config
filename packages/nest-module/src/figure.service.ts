import {Injectable, Logger} from "@nestjs/common";
import {Config, figure, Options as FigureOptions} from "figure-config"

@Injectable()
export class FigureService {

    private config: Config;
    private readonly logger = new Logger(FigureService.name)

    async init(options?: FigureOptions) {
        if (! this.config) {
            this.config = await figure({
                ...options,
                logger: this.logger
            });
        }
    }

    getConfig() {
        return this.config;
    }
}
