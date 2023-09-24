/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeploymentGroupReference } from './DeploymentGroupReference';
import type { MetricsColumnsHeader } from './MetricsColumnsHeader';
import type { MetricsRow } from './MetricsRow';
import type { TaskAgentPoolReference } from './TaskAgentPoolReference';
import type { TaskAgentQueue } from './TaskAgentQueue';

export type TaskAgentPoolSummary = {
    columnsHeader?: MetricsColumnsHeader;
    deploymentGroups?: Array<DeploymentGroupReference>;
    pool?: TaskAgentPoolReference;
    queues?: Array<TaskAgentQueue>;
    rows?: Array<MetricsRow>;
};

