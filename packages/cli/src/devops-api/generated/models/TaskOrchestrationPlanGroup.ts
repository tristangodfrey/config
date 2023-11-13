/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectReference } from './ProjectReference';
import type { TaskAgentJobRequest } from './TaskAgentJobRequest';

export type TaskOrchestrationPlanGroup = {
    planGroup?: string;
    project?: ProjectReference;
    runningRequests?: Array<TaskAgentJobRequest>;
};

