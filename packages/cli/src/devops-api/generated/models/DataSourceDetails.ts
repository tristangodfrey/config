/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthorizationHeader } from './AuthorizationHeader';

export type DataSourceDetails = {
    dataSourceName?: string;
    dataSourceUrl?: string;
    headers?: Array<AuthorizationHeader>;
    parameters?: Record<string, string>;
    resourceUrl?: string;
    resultSelector?: string;
};

