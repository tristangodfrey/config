/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IdentityRef } from './IdentityRef';
import type { TaskDefinition } from './TaskDefinition';
import type { TaskGroupStep } from './TaskGroupStep';

export type TaskGroup = (TaskDefinition & {
    /**
     * Gets or sets comment.
     */
    comment?: string;
    /**
     * Gets or sets the identity who created.
     */
    createdBy?: IdentityRef;
    /**
     * Gets or sets date on which it got created.
     */
    createdOn?: string;
    /**
     * Gets or sets as 'true' to indicate as deleted, 'false' otherwise.
     */
    deleted?: boolean;
    /**
     * Gets or sets the identity who modified.
     */
    modifiedBy?: IdentityRef;
    /**
     * Gets or sets date on which it got modified.
     */
    modifiedOn?: string;
    /**
     * Gets or sets the owner.
     */
    owner?: string;
    /**
     * Gets or sets parent task group Id. This is used while creating a draft task group.
     */
    parentDefinitionId?: string;
    /**
     * Gets or sets revision.
     */
    revision?: number;
    /**
     * Gets or sets the tasks.
     */
    tasks?: Array<TaskGroupStep>;
});

