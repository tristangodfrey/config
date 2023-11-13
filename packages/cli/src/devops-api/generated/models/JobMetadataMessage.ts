/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A message to be sent to an agent currently running the job.
 */
export type JobMetadataMessage = {
    /**
     * The id of the job.
     */
    jobId?: string;
    /**
     * The agent's frequency of posting lines to the logs console expressed in milliseconds. There are 2 modes: Slow (10 seconds) and Fast (half a second).
     */
    postLinesFrequencyMillis?: number;
};

