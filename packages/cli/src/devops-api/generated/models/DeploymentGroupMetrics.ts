/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeploymentGroupReference } from './DeploymentGroupReference';
import type { MetricsColumnsHeader } from './MetricsColumnsHeader';
import type { MetricsRow } from './MetricsRow';

/**
 * Deployment group metrics.
 */
export type DeploymentGroupMetrics = {
    /**
     * List of deployment group properties. And types of metrics provided for those properties.
     */
    columnsHeader?: MetricsColumnsHeader;
    /**
     * Deployment group.
     */
    deploymentGroup?: DeploymentGroupReference;
    /**
     * Values of properties and the metrics. E.g. 1: total count of deployment targets for which 'TargetState' is 'offline'. E.g. 2: Average time of deployment to the deployment targets for which 'LastJobStatus' is 'passed' and 'TargetState' is 'online'.
     */
    rows?: Array<MetricsRow>;
};

