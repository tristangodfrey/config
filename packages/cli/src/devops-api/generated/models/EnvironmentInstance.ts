/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnvironmentResourceReference } from './EnvironmentResourceReference';
import type { IdentityRef } from './IdentityRef';
import type { ProjectReference } from './ProjectReference';

/**
 * Environment.
 */
export type EnvironmentInstance = {
    /**
     * Identity reference of the user who created the Environment.
     */
    createdBy?: IdentityRef;
    /**
     * Creation time of the Environment
     */
    createdOn?: string;
    /**
     * Description of the Environment.
     */
    description?: string;
    /**
     * Id of the Environment
     */
    id?: number;
    /**
     * Identity reference of the user who last modified the Environment.
     */
    lastModifiedBy?: IdentityRef;
    /**
     * Last modified time of the Environment
     */
    lastModifiedOn?: string;
    /**
     * Name of the Environment.
     */
    name?: string;
    /**
     * Project information for environment.
     */
    project?: ProjectReference;
    resources?: Array<EnvironmentResourceReference>;
};

