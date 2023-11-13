/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskAgentReference } from './TaskAgentReference';

export type TaskAgentPoolMaintenanceJobTargetAgent = {
    agent?: TaskAgentReference;
    jobId?: number;
    result?: TaskAgentPoolMaintenanceJobTargetAgent.result;
    status?: TaskAgentPoolMaintenanceJobTargetAgent.status;
};

export namespace TaskAgentPoolMaintenanceJobTargetAgent {

    export enum result {
        SUCCEEDED = 'succeeded',
        FAILED = 'failed',
        CANCELED = 'canceled',
    }

    export enum status {
        IN_PROGRESS = 'inProgress',
        COMPLETED = 'completed',
        CANCELLING = 'cancelling',
        QUEUED = 'queued',
    }


}

