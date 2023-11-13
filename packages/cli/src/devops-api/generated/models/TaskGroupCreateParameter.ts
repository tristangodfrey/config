/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskGroupStep } from './TaskGroupStep';
import type { TaskInputDefinition } from './TaskInputDefinition';
import type { TaskVersion } from './TaskVersion';

export type TaskGroupCreateParameter = {
    /**
     * Sets author name of the task group.
     */
    author?: string;
    /**
     * Sets category of the task group.
     */
    category?: string;
    /**
     * Sets description of the task group.
     */
    description?: string;
    /**
     * Sets friendly name of the task group.
     */
    friendlyName?: string;
    /**
     * Sets url icon of the task group.
     */
    iconUrl?: string;
    /**
     * Sets input for the task group.
     */
    inputs?: Array<TaskInputDefinition>;
    /**
     * Sets display name of the task group.
     */
    instanceNameFormat?: string;
    /**
     * Sets name of the task group.
     */
    name?: string;
    /**
     * Sets parent task group Id. This is used while creating a draft task group.
     */
    parentDefinitionId?: string;
    /**
     * Sets RunsOn of the task group. Value can be 'Agent', 'Server' or 'DeploymentGroup'.
     */
    runsOn?: Array<string>;
    /**
     * Sets tasks for the task group.
     */
    tasks?: Array<TaskGroupStep>;
    /**
     * Sets version of the task group.
     */
    version?: TaskVersion;
};

