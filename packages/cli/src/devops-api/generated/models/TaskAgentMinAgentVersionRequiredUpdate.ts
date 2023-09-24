/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Demand } from './Demand';
import type { TaskAgentUpdateReason } from './TaskAgentUpdateReason';
import type { TaskOrchestrationOwner } from './TaskOrchestrationOwner';

export type TaskAgentMinAgentVersionRequiredUpdate = (TaskAgentUpdateReason & {
    jobDefinition?: TaskOrchestrationOwner;
    jobOwner?: TaskOrchestrationOwner;
    minAgentVersion?: Demand;
});

