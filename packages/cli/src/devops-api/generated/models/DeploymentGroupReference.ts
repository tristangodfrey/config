/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectReference } from './ProjectReference';
import type { TaskAgentPoolReference } from './TaskAgentPoolReference';

/**
 * Deployment group reference. This is useful for referring a deployment group in another object.
 */
export type DeploymentGroupReference = {
    /**
     * Deployment group identifier.
     */
    id?: number;
    /**
     * Name of the deployment group.
     */
    name?: string;
    /**
     * Deployment pool in which deployment agents are registered.
     */
    pool?: TaskAgentPoolReference;
    /**
     * Project to which the deployment group belongs.
     */
    project?: ProjectReference;
};

