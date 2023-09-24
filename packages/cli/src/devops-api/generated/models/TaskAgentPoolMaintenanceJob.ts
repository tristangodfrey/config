/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IdentityRef } from './IdentityRef';
import type { TaskAgentPoolMaintenanceJobTargetAgent } from './TaskAgentPoolMaintenanceJobTargetAgent';
import type { TaskAgentPoolReference } from './TaskAgentPoolReference';

export type TaskAgentPoolMaintenanceJob = {
    /**
     * The maintenance definition for the maintenance job
     */
    definitionId?: number;
    /**
     * The total error counts during the maintenance job
     */
    errorCount?: number;
    /**
     * Time that the maintenance job was completed
     */
    finishTime?: string;
    /**
     * Id of the maintenance job
     */
    jobId?: number;
    /**
     * The log download url for the maintenance job
     */
    logsDownloadUrl?: string;
    /**
     * Orchestration/Plan Id for the maintenance job
     */
    orchestrationId?: string;
    /**
     * Pool reference for the maintenance job
     */
    pool?: TaskAgentPoolReference;
    /**
     * Time that the maintenance job was queued
     */
    queueTime?: string;
    /**
     * The identity that queued the maintenance job
     */
    requestedBy?: IdentityRef;
    /**
     * The maintenance job result
     */
    result?: TaskAgentPoolMaintenanceJob.result;
    /**
     * Time that the maintenance job was started
     */
    startTime?: string;
    /**
     * Status of the maintenance job
     */
    status?: TaskAgentPoolMaintenanceJob.status;
    targetAgents?: Array<TaskAgentPoolMaintenanceJobTargetAgent>;
    /**
     * The total warning counts during the maintenance job
     */
    warningCount?: number;
};

export namespace TaskAgentPoolMaintenanceJob {

    /**
     * The maintenance job result
     */
    export enum result {
        SUCCEEDED = 'succeeded',
        FAILED = 'failed',
        CANCELED = 'canceled',
    }

    /**
     * Status of the maintenance job
     */
    export enum status {
        IN_PROGRESS = 'inProgress',
        COMPLETED = 'completed',
        CANCELLING = 'cancelling',
        QUEUED = 'queued',
    }


}

