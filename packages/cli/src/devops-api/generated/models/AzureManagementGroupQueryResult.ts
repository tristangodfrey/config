/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AzureManagementGroup } from './AzureManagementGroup';

/**
 * Azure management group query result
 */
export type AzureManagementGroupQueryResult = {
    /**
     * Error message in case of an exception
     */
    errorMessage?: string;
    /**
     * List of azure management groups
     */
    value?: Array<AzureManagementGroup>;
};

