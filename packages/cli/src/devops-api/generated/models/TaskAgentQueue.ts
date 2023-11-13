/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskAgentPoolReference } from './TaskAgentPoolReference';

/**
 * An agent queue.
 */
export type TaskAgentQueue = {
    /**
     * ID of the queue
     */
    id?: number;
    /**
     * Name of the queue
     */
    name?: string;
    /**
     * Pool reference for this queue
     */
    pool?: TaskAgentPoolReference;
    /**
     * Project ID
     */
    projectId?: string;
};

