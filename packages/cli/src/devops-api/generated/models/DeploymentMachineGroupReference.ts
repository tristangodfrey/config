/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectReference } from './ProjectReference';
import type { TaskAgentPoolReference } from './TaskAgentPoolReference';

export type DeploymentMachineGroupReference = {
    id?: number;
    name?: string;
    pool?: TaskAgentPoolReference;
    project?: ProjectReference;
};

