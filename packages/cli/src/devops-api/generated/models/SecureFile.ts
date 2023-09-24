/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IdentityRef } from './IdentityRef';

export type SecureFile = {
    createdBy?: IdentityRef;
    createdOn?: string;
    id?: string;
    modifiedBy?: IdentityRef;
    modifiedOn?: string;
    name?: string;
    properties?: Record<string, string>;
    ticket?: string;
};

