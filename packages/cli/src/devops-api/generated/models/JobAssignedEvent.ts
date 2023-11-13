/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JobEvent } from './JobEvent';
import type { TaskAgentJobRequest } from './TaskAgentJobRequest';

export type JobAssignedEvent = (JobEvent & {
    /**
     * A pipeline job request for an agent.
     */
    request?: TaskAgentJobRequest;
});

