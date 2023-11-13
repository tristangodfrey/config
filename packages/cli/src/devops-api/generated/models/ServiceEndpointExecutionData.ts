/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskOrchestrationOwner } from './TaskOrchestrationOwner';

/**
 * Represents service endpoint execution data.
 */
export type ServiceEndpointExecutionData = {
    /**
     * Gets the definition of service endpoint execution owner.
     */
    definition?: TaskOrchestrationOwner;
    /**
     * Gets the finish time of service endpoint execution.
     */
    finishTime?: string;
    /**
     * Gets the Id of service endpoint execution data.
     */
    id?: number;
    /**
     * Gets the owner of service endpoint execution data.
     */
    owner?: TaskOrchestrationOwner;
    /**
     * Gets the plan type of service endpoint execution data.
     */
    planType?: string;
    /**
     * Gets the result of service endpoint execution.
     */
    result?: ServiceEndpointExecutionData.result;
    /**
     * Gets the start time of service endpoint execution.
     */
    startTime?: string;
};

export namespace ServiceEndpointExecutionData {

    /**
     * Gets the result of service endpoint execution.
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

