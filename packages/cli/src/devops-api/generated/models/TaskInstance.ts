/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskReference } from './TaskReference';

export type TaskInstance = (TaskReference & {
    alwaysRun?: boolean;
    condition?: string;
    continueOnError?: boolean;
    displayName?: string;
    enabled?: boolean;
    environment?: Record<string, string>;
    instanceId?: string;
    refName?: string;
    retryCountOnTaskFailure?: number;
    timeoutInMinutes?: number;
});

