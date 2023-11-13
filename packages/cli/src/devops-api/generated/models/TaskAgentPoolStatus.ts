/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskAgentPoolReference } from './TaskAgentPoolReference';

export type TaskAgentPoolStatus = (TaskAgentPoolReference & {
    /**
     * Number of requests queued and assigned to an agent. Not running yet.
     */
    assignedRequestCount?: number;
    /**
     * Number of queued requests which are not assigned to any agents
     */
    queuedRequestCount?: number;
    /**
     * Number of currently running requests
     */
    runningRequestCount?: number;
});

