/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskOrchestrationOwner } from './TaskOrchestrationOwner';

export type TaskOrchestrationQueuedPlan = {
    assignTime?: string;
    definition?: TaskOrchestrationOwner;
    owner?: TaskOrchestrationOwner;
    planGroup?: string;
    planId?: string;
    poolId?: number;
    queuePosition?: number;
    queueTime?: string;
    scopeIdentifier?: string;
};

