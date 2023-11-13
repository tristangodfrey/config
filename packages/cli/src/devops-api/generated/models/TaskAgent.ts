/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PropertiesCollection } from './PropertiesCollection';
import type { TaskAgentAuthorization } from './TaskAgentAuthorization';
import type { TaskAgentCloudRequest } from './TaskAgentCloudRequest';
import type { TaskAgentJobRequest } from './TaskAgentJobRequest';
import type { TaskAgentReference } from './TaskAgentReference';
import type { TaskAgentUpdate } from './TaskAgentUpdate';

/**
 * A task agent.
 */
export type TaskAgent = (TaskAgentReference & {
    /**
     * The agent cloud request that's currently associated with this agent.
     */
    assignedAgentCloudRequest?: TaskAgentCloudRequest;
    /**
     * The request which is currently assigned to this agent.
     */
    assignedRequest?: TaskAgentJobRequest;
    /**
     * Authorization information for this agent.
     */
    authorization?: TaskAgentAuthorization;
    /**
     * Date on which this agent was created.
     */
    createdOn?: string;
    /**
     * The last request which was completed by this agent.
     */
    lastCompletedRequest?: TaskAgentJobRequest;
    /**
     * Maximum job parallelism allowed for this agent.
     */
    maxParallelism?: number;
    /**
     * Pending update for this agent.
     */
    pendingUpdate?: TaskAgentUpdate;
    properties?: PropertiesCollection;
    /**
     * Date on which the last connectivity status change occurred.
     */
    statusChangedOn?: string;
    /**
     * System-defined capabilities supported by this agent's host. Warning: To set capabilities use the PUT method, PUT will completely overwrite existing capabilities.
     */
    systemCapabilities?: Record<string, string>;
    /**
     * User-defined capabilities supported by this agent's host. Warning: To set capabilities use the PUT method, PUT will completely overwrite existing capabilities.
     */
    userCapabilities?: Record<string, string>;
});

