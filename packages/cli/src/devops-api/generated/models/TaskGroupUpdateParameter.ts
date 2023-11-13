/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskGroupStep } from './TaskGroupStep';
import type { TaskInputDefinition } from './TaskInputDefinition';
import type { TaskVersion } from './TaskVersion';

export type TaskGroupUpdateParameter = {
    /**
     * Sets author name of the task group.
     */
    author?: string;
    /**
     * Sets category of the task group.
     */
    category?: string;
    /**
     * Sets comment of the task group.
     */
    comment?: string;
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
     * Sets the unique identifier of this field.
     */
    id?: string;
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
     * Gets or sets parent task group Id. This is used while creating a draft task group.
     */
    parentDefinitionId?: string;
    /**
     * Sets revision of the task group.
     */
    revision?: number;
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

