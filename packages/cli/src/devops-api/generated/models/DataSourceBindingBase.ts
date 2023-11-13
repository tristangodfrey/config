/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthorizationHeader } from './AuthorizationHeader';

/**
 * Represents binding of data source for the service endpoint request.
 */
export type DataSourceBindingBase = {
    /**
     * Pagination format supported by this data source(ContinuationToken/SkipTop).
     */
    callbackContextTemplate?: string;
    /**
     * Subsequent calls needed?
     */
    callbackRequiredTemplate?: string;
    /**
     * Gets or sets the name of the data source.
     */
    dataSourceName?: string;
    /**
     * Gets or sets the endpoint Id.
     */
    endpointId?: string;
    /**
     * Gets or sets the url of the service endpoint.
     */
    endpointUrl?: string;
    /**
     * Gets or sets the authorization headers.
     */
    headers?: Array<AuthorizationHeader>;
    /**
     * Defines the initial value of the query params
     */
    initialContextTemplate?: string;
    /**
     * Gets or sets the parameters for the data source.
     */
    parameters?: Record<string, string>;
    /**
     * Gets or sets http request body
     */
    requestContent?: string;
    /**
     * Gets or sets http request verb
     */
    requestVerb?: string;
    /**
     * Gets or sets the result selector.
     */
    resultSelector?: string;
    /**
     * Gets or sets the result template.
     */
    resultTemplate?: string;
    /**
     * Gets or sets the target of the data source.
     */
    target?: string;
};

