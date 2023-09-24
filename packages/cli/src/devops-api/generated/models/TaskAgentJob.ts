/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskAgentJobStep } from './TaskAgentJobStep';
import type { TaskAgentJobVariable } from './TaskAgentJobVariable';

export type TaskAgentJob = {
    container?: string;
    id?: string;
    name?: string;
    sidecarContainers?: Record<string, string>;
    steps?: Array<TaskAgentJobStep>;
    variables?: Array<TaskAgentJobVariable>;
};

