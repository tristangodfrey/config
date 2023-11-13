/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResourceLimit } from './ResourceLimit';
import type { TaskAgentJobRequest } from './TaskAgentJobRequest';

export type ResourceUsage = {
    resourceLimit?: ResourceLimit;
    runningRequests?: Array<TaskAgentJobRequest>;
    usedCount?: number;
    usedMinutes?: number;
};

