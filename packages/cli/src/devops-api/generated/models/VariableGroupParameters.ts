/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VariableGroupProjectReference } from './VariableGroupProjectReference';
import type { VariableGroupProviderData } from './VariableGroupProviderData';
import type { VariableValue } from './VariableValue';

export type VariableGroupParameters = {
    /**
     * Sets description of the variable group.
     */
    description?: string;
    /**
     * Sets name of the variable group.
     */
    name?: string;
    /**
     * Sets provider data.
     */
    providerData?: VariableGroupProviderData;
    /**
     * Sets type of the variable group.
     */
    type?: string;
    variableGroupProjectReferences?: Array<VariableGroupProjectReference>;
    /**
     * Sets variables contained in the variable group.
     */
    variables?: Record<string, VariableValue>;
};

