/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JobRequestMessage } from './JobRequestMessage';
import type { TaskInstance } from './TaskInstance';

export type AgentJobRequestMessage = (JobRequestMessage & {
    lockedUntil?: string;
    lockToken?: string;
    requestId?: number;
    tasks?: Array<TaskInstance>;
});

