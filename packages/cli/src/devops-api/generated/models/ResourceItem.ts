/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IdentityRef } from './IdentityRef';

/**
 * Resources include Service Connections, Variable Groups and Secure Files.
 */
export type ResourceItem = {
    /**
     * Gets or sets the identity who created the resource.
     */
    createdBy?: IdentityRef;
    /**
     * Gets or sets description of the resource.
     */
    description?: string;
    /**
     * Gets or sets icon url of the resource.
     */
    iconUrl?: string;
    /**
     * Gets or sets Id of the resource.
     */
    id?: string;
    /**
     * Indicates whether resource is shared with other projects or not.
     */
    isShared?: boolean;
    /**
     * Gets or sets name of the resource.
     */
    name?: string;
    /**
     * Gets or sets internal properties of the resource.
     */
    properties?: Record<string, string>;
    /**
     * Gets or sets resource type.
     */
    resourceType?: string;
};

