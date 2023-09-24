/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnvironmentReference } from './EnvironmentReference';
import type { IdentityRef } from './IdentityRef';

export type EnvironmentResource = {
    createdBy?: IdentityRef;
    createdOn?: string;
    environmentReference?: EnvironmentReference;
    id?: number;
    lastModifiedBy?: IdentityRef;
    lastModifiedOn?: string;
    name?: string;
    /**
     * Tags of the Environment Resource.
     */
    tags?: Array<string>;
    /**
     * Environment resource type
     */
    type?: EnvironmentResource.type;
};

export namespace EnvironmentResource {

    /**
     * Environment resource type
     */
    export enum type {
        UNDEFINED = 'undefined',
        GENERIC = 'generic',
        VIRTUAL_MACHINE = 'virtualMachine',
        KUBERNETES = 'kubernetes',
    }


}

