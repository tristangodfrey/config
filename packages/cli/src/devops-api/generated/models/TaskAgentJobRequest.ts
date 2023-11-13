/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Demand } from './Demand';
import type { JObject } from './JObject';
import type { TaskAgentReference } from './TaskAgentReference';
import type { TaskOrchestrationOwner } from './TaskOrchestrationOwner';

/**
 * A job request for an agent.
 */
export type TaskAgentJobRequest = {
    agentSpecification?: JObject;
    /**
     * The date/time this request was assigned.
     */
    assignTime?: string;
    /**
     * Additional data about the request.
     */
    data?: Record<string, string>;
    /**
     * The pipeline definition associated with this request
     */
    definition?: TaskOrchestrationOwner;
    /**
     * A list of demands required to fulfill this request.
     */
    demands?: Array<Demand>;
    /**
     * The date/time this request was finished.
     */
    finishTime?: string;
    /**
     * The host which triggered this request.
     */
    hostId?: string;
    /**
     * ID of the job resulting from this request.
     */
    jobId?: string;
    /**
     * Name of the job resulting from this request.
     */
    jobName?: string;
    /**
     * The deadline for the agent to renew the lock.
     */
    lockedUntil?: string;
    matchedAgents?: Array<TaskAgentReference>;
    matchesAllAgentsInPool?: boolean;
    orchestrationId?: string;
    /**
     * The pipeline associated with this request
     */
    owner?: TaskOrchestrationOwner;
    planGroup?: string;
    /**
     * Internal ID for the orchestration plan connected with this request.
     */
    planId?: string;
    /**
     * Internal detail representing the type of orchestration plan.
     */
    planType?: string;
    /**
     * The ID of the pool this request targets
     */
    poolId?: number;
    priority?: number;
    /**
     * The ID of the queue this request targets
     */
    queueId?: number;
    /**
     * The date/time this request was queued.
     */
    queueTime?: string;
    /**
     * The date/time this request was receieved by an agent.
     */
    receiveTime?: string;
    /**
     * ID of the request.
     */
    requestId?: number;
    /**
     * The agent allocated for this request.
     */
    reservedAgent?: TaskAgentReference;
    /**
     * The result of this request.
     */
    result?: TaskAgentJobRequest.result;
    /**
     * Scope of the pipeline; matches the project ID.
     */
    scopeId?: string;
    /**
     * The service which owns this request.
     */
    serviceOwner?: string;
    statusMessage?: string;
    userDelayed?: boolean;
};

export namespace TaskAgentJobRequest {

    /**
     * The result of this request.
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

