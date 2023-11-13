/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskOrchestrationItem } from './TaskOrchestrationItem';

export type TaskOrchestrationContainer = (TaskOrchestrationItem & {
    children?: Array<TaskOrchestrationItem>;
    continueOnError?: boolean;
    data?: Record<string, string>;
    maxConcurrency?: number;
    parallel?: boolean;
    rollback?: TaskOrchestrationContainer;
});

