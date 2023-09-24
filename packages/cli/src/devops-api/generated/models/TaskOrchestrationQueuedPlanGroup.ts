/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectReference } from './ProjectReference';
import type { TaskOrchestrationOwner } from './TaskOrchestrationOwner';
import type { TaskOrchestrationQueuedPlan } from './TaskOrchestrationQueuedPlan';

export type TaskOrchestrationQueuedPlanGroup = {
    definition?: TaskOrchestrationOwner;
    owner?: TaskOrchestrationOwner;
    planGroup?: string;
    plans?: Array<TaskOrchestrationQueuedPlan>;
    project?: ProjectReference;
    queuePosition?: number;
};

