/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Demand } from './Demand';
import type { IdentityRef } from './IdentityRef';
import type { TaskInstance } from './TaskInstance';
import type { TaskOrchestrationItem } from './TaskOrchestrationItem';

export type TaskOrchestrationJob = (TaskOrchestrationItem & {
    demands?: Array<Demand>;
    executeAs?: IdentityRef;
    executionMode?: string;
    executionTimeout?: string;
    instanceId?: string;
    name?: string;
    refName?: string;
    tasks?: Array<TaskInstance>;
    variables?: Record<string, string>;
});

