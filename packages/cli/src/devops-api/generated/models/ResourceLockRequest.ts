/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A request for a resource's exclusive lock
 */
export type ResourceLockRequest = {
    /**
     * The date/time this request was assigned.
     */
    assignTime?: string;
    /**
     * The ID of the check run waiting on this request
     */
    checkRunId?: string;
    /**
     * The ID of the pipeline that requested this resource
     */
    definitionId?: number;
    /**
     * The date/time this request was finished.
     */
    finishTime?: string;
    /**
     * The behavior this request should exhibit in relation to other lock requests
     */
    lockType?: ResourceLockRequest.lockType;
    /**
     * Attempt of the graph node
     */
    nodeAttempt?: number;
    /**
     * Name of the graph node (currently stage) requesting this resource
     */
    nodeName?: string;
    /**
     * Internal ID for the orchestration plan connected with this request.
     */
    planId?: string;
    /**
     * The ID of the project of the check run and definition exist in
     */
    projectId?: string;
    /**
     * The date/time this request was queued.
     */
    queueTime?: string;
    /**
     * ID of the request.
     */
    requestId?: number;
    /**
     * The id of the resource
     */
    resourceId?: string;
    /**
     * The type of the resource
     */
    resourceType?: string;
    /**
     * The result of this request.
     */
    status?: ResourceLockRequest.status;
};

export namespace ResourceLockRequest {

    /**
     * The behavior this request should exhibit in relation to other lock requests
     */
    export enum lockType {
        RUN_LATEST = 'runLatest',
        SEQUENTIAL = 'sequential',
    }

    /**
     * The result of this request.
     */
    export enum status {
        QUEUED = 'queued',
        IN_USE = 'inUse',
        FINISHED = 'finished',
        TIMED_OUT = 'timedOut',
        CANCELED = 'canceled',
        ABANDONED = 'abandoned',
        WAITING_ON_CHECKS = 'waitingOnChecks',
    }


}

