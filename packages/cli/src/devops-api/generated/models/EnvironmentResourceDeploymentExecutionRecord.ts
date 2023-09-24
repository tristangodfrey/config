/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * EnvironmentResourceDeploymentExecutionRecord.
 */
export type EnvironmentResourceDeploymentExecutionRecord = {
    /**
     * Id of the Environment
     */
    environmentId?: number;
    /**
     * Finish time of the environment resource deployment execution
     */
    finishTime?: string;
    /**
     * Id of the Environment deployment execution history record
     */
    requestId?: number;
    /**
     * Resource Id
     */
    resourceId?: number;
    /**
     * Result of the environment deployment execution
     */
    result?: EnvironmentResourceDeploymentExecutionRecord.result;
    /**
     * Start time of the environment resource deployment execution
     */
    startTime?: string;
};

export namespace EnvironmentResourceDeploymentExecutionRecord {

    /**
     * Result of the environment deployment execution
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

