/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Class used for updating an elastic node where only certain members are populated
 */
export type ElasticNodeSettings = {
    /**
     * State of the ElasticNode
     */
    state?: ElasticNodeSettings.state;
};

export namespace ElasticNodeSettings {

    /**
     * State of the ElasticNode
     */
    export enum state {
        NONE = 'none',
        NEW = 'new',
        CREATING_COMPUTE = 'creatingCompute',
        STARTING_AGENT = 'startingAgent',
        IDLE = 'idle',
        ASSIGNED = 'assigned',
        OFFLINE = 'offline',
        PENDING_REIMAGE = 'pendingReimage',
        PENDING_DELETE = 'pendingDelete',
        SAVED = 'saved',
        DELETING_COMPUTE = 'deletingCompute',
        DELETED = 'deleted',
        LOST = 'lost',
        REIMAGING_COMPUTE = 'reimagingCompute',
        RESTARTING_AGENT = 'restartingAgent',
        FAILED_TO_START_PENDING_DELETE = 'failedToStartPendingDelete',
        FAILED_TO_RESTART_PENDING_DELETE = 'failedToRestartPendingDelete',
        FAILED_VMPENDING_DELETE = 'failedVMPendingDelete',
        ASSIGNED_PENDING_DELETE = 'assignedPendingDelete',
        RETRY_DELETE = 'retryDelete',
    }


}

