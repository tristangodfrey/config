/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JobEvent } from './JobEvent';

export type JobCompletedEvent = (JobEvent & {
    /**
     * Indicates whether the agent is in the process of shutting down.
     */
    agentShuttingDown?: boolean;
    /**
     * The ID of the request.
     */
    requestId?: number;
    /**
     * The result of the request.
     */
    result?: JobCompletedEvent.result;
});

export namespace JobCompletedEvent {

    /**
     * The result of the request.
     */
    export enum result {
        SUCCEEDED = 'succeeded',
        SUCCEEDED_WITH_ISSUES = 'succeededWithIssues',
        FAILED = 'failed',
        CANCELED = 'canceled',
        SKIPPED = 'skipped',
        ABANDONED = 'abandoned',
    }


}

