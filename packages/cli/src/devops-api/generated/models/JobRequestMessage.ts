/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JobEnvironment } from './JobEnvironment';
import type { TaskOrchestrationPlanReference } from './TaskOrchestrationPlanReference';
import type { TimelineReference } from './TimelineReference';

export type JobRequestMessage = {
    environment?: JobEnvironment;
    jobId?: string;
    jobName?: string;
    jobRefName?: string;
    messageType?: string;
    plan?: TaskOrchestrationPlanReference;
    timeline?: TimelineReference;
};

