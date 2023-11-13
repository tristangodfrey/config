/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EventsConfig } from './EventsConfig';
import type { JobEventConfig } from './JobEventConfig';

export type JobEventsConfig = (EventsConfig & {
    jobAssigned?: JobEventConfig;
    jobCompleted?: JobEventConfig;
    jobStarted?: JobEventConfig;
});

