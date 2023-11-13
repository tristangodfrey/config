/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Metrics row.
 */
export type MetricsRow = {
    /**
     * The values of the properties mentioned as 'Dimensions' in column header. E.g. 1: For a property 'LastJobStatus' - metrics will be provided for 'passed', 'failed', etc. E.g. 2: For a property 'TargetState' - metrics will be provided for 'online', 'offline' targets.
     */
    dimensions?: Array<string>;
    /**
     * Metrics in serialized format. Should be deserialized based on the data type provided in header.
     */
    metrics?: Array<string>;
};

