/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskAgentPoolMaintenanceOptions } from './TaskAgentPoolMaintenanceOptions';
import type { TaskAgentPoolMaintenanceRetentionPolicy } from './TaskAgentPoolMaintenanceRetentionPolicy';
import type { TaskAgentPoolMaintenanceSchedule } from './TaskAgentPoolMaintenanceSchedule';
import type { TaskAgentPoolReference } from './TaskAgentPoolReference';

export type TaskAgentPoolMaintenanceDefinition = {
    /**
     * Enable maintenance
     */
    enabled?: boolean;
    /**
     * Id
     */
    id?: number;
    /**
     * Maintenance job timeout per agent
     */
    jobTimeoutInMinutes?: number;
    /**
     * Max percentage of agents within a pool running maintenance job at given time
     */
    maxConcurrentAgentsPercentage?: number;
    options?: TaskAgentPoolMaintenanceOptions;
    /**
     * Pool reference for the maintenance definition
     */
    pool?: TaskAgentPoolReference;
    retentionPolicy?: TaskAgentPoolMaintenanceRetentionPolicy;
    scheduleSetting?: TaskAgentPoolMaintenanceSchedule;
};

