/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeploymentGroupReference } from './DeploymentGroupReference';
import type { EnvironmentResourceReference } from './EnvironmentResourceReference';
import type { TaskAgentPoolReference } from './TaskAgentPoolReference';

/**
 * Deployment pool summary.
 */
export type DeploymentPoolSummary = {
    /**
     * List of deployment groups referring to the deployment pool.
     */
    deploymentGroups?: Array<DeploymentGroupReference>;
    /**
     * Number of deployment agents that are offline.
     */
    offlineAgentsCount?: number;
    /**
     * Number of deployment agents that are online.
     */
    onlineAgentsCount?: number;
    /**
     * Deployment pool.
     */
    pool?: TaskAgentPoolReference;
    /**
     * Virtual machine Resource referring in pool.
     */
    resource?: EnvironmentResourceReference;
};

