/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MetricsColumnMetaData } from './MetricsColumnMetaData';

/**
 * Metrics columns header
 */
export type MetricsColumnsHeader = {
    /**
     * Properties of deployment group for which metrics are provided. E.g. 1: LastJobStatus E.g. 2: TargetState
     */
    dimensions?: Array<MetricsColumnMetaData>;
    /**
     * The types of metrics. E.g. 1: total count of deployment targets. E.g. 2: Average time of deployment to the deployment targets.
     */
    metrics?: Array<MetricsColumnMetaData>;
};

