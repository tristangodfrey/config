/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JobOption } from './JobOption';
import type { MaskHint } from './MaskHint';

export type PlanEnvironment = {
    mask?: Array<MaskHint>;
    options?: Record<string, JobOption>;
    variables?: Record<string, string>;
};

