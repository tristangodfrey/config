/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IdentityRef } from './IdentityRef';
import type { VariableGroupProjectReference } from './VariableGroupProjectReference';
import type { VariableGroupProviderData } from './VariableGroupProviderData';
import type { VariableValue } from './VariableValue';

/**
 * A variable group is a collection of related variables.
 */
export type VariableGroup = {
    /**
     * Gets or sets the identity who created the variable group.
     */
    createdBy?: IdentityRef;
    /**
     * Gets or sets the time when variable group was created.
     */
    createdOn?: string;
    /**
     * Gets or sets description of the variable group.
     */
    description?: string;
    /**
     * Gets or sets id of the variable group.
     */
    id?: number;
    /**
     * Indicates whether variable group is shared with other projects or not.
     */
    isShared?: boolean;
    /**
     * Gets or sets the identity who modified the variable group.
     */
    modifiedBy?: IdentityRef;
    /**
     * Gets or sets the time when variable group was modified
     */
    modifiedOn?: string;
    /**
     * Gets or sets name of the variable group.
     */
    name?: string;
    /**
     * Gets or sets provider data.
     */
    providerData?: VariableGroupProviderData;
    /**
     * Gets or sets type of the variable group.
     */
    type?: string;
    /**
     * all project references where the variable group is shared with other projects.
     */
    variableGroupProjectReferences?: Array<VariableGroupProjectReference>;
    /**
     * Gets or sets variables contained in the variable group.
     */
    variables?: Record<string, VariableValue>;
};

