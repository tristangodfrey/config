/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeploymentGroupReference } from './DeploymentGroupReference';
import type { DeploymentMachine } from './DeploymentMachine';

/**
 * Deployment group.
 */
export type DeploymentGroup = (DeploymentGroupReference & {
    /**
     * Description of the deployment group.
     */
    description?: string;
    /**
     * Number of deployment targets in the deployment group.
     */
    machineCount?: number;
    /**
     * List of deployment targets in the deployment group.
     */
    machines?: Array<DeploymentMachine>;
    /**
     * List of unique tags across all deployment targets in the deployment group.
     */
    machineTags?: Array<string>;
});

