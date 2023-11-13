/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskAgentJobTask } from './TaskAgentJobTask';

export type TaskAgentJobStep = {
    condition?: string;
    continueOnError?: boolean;
    enabled?: boolean;
    env?: Record<string, string>;
    id?: string;
    inputs?: Record<string, string>;
    name?: string;
    retryCountOnTaskFailure?: number;
    task?: TaskAgentJobTask;
    timeoutInMinutes?: number;
    type?: TaskAgentJobStep.type;
};

export namespace TaskAgentJobStep {

    export enum type {
        TASK = 'task',
        ACTION = 'action',
    }


}

