/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Data and settings for an elastic node
 */
export type ElasticNode = {
    /**
     * Distributed Task's Agent Id
     */
    agentId?: number;
    /**
     * Summary of the state of the agent
     */
    agentState?: ElasticNode.agentState;
    /**
     * Compute Id.  VMSS's InstanceId
     */
    computeId?: string;
    /**
     * State of the compute host
     */
    computeState?: ElasticNode.computeState;
    /**
     * Users can force state changes to specific states (ToReimage, ToDelete, Save)
     */
    desiredState?: ElasticNode.desiredState;
    /**
     * Unique identifier since the agent and/or VM may be null
     */
    id?: number;
    /**
     * Computer name. Used to match a scaleset VM with an agent
     */
    name?: string;
    /**
     * Pool Id that this node belongs to
     */
    poolId?: number;
    /**
     * Last job RequestId assigned to this agent
     */
    requestId?: number;
    /**
     * State of the ElasticNode
     */
    state?: ElasticNode.state;
    /**
     * Last state change. Only updated by SQL.
     */
    stateChangedOn?: string;
};

export namespace ElasticNode {

    /**
     * Summary of the state of the agent
     */
    export enum agentState {
        NONE = 'none',
        ENABLED = 'enabled',
        ONLINE = 'online',
        ASSIGNED = 'assigned',
    }

    /**
     * State of the compute host
     */
    export enum computeState {
        NONE = 'none',
        HEALTHY = 'healthy',
        CREATING = 'creating',
        DELETING = 'deleting',
        FAILED = 'failed',
        STOPPED = 'stopped',
        REIMAGING = 'reimaging',
    }

    /**
     * Users can force state changes to specific states (ToReimage, ToDelete, Save)
     */
    export enum desiredState {
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

