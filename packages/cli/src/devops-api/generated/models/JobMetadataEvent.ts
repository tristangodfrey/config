/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JobEvent } from './JobEvent';
import type { JobMetadataMessage } from './JobMetadataMessage';

export type JobMetadataEvent = (JobEvent & {
    /**
     * A message to be sent to an agent currently running the job.
     */
    message?: JobMetadataMessage;
});

