/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JobOption } from './JobOption';
import type { MaskHint } from './MaskHint';
import type { SecureFile } from './SecureFile';
import type { ServiceEndpoint } from './ServiceEndpoint';

/**
 * Represents the context of variables and vectors for a job request.
 */
export type JobEnvironment = {
    endpoints?: Array<ServiceEndpoint>;
    mask?: Array<MaskHint>;
    options?: Record<string, JobOption>;
    secureFiles?: Array<SecureFile>;
    /**
     * Gets or sets the endpoint used for communicating back to the calling service.
     */
    systemConnection?: ServiceEndpoint;
    variables?: Record<string, string>;
};

