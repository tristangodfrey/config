/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JObject } from './JObject';
import type { TaskAgentPoolReference } from './TaskAgentPoolReference';
import type { TaskAgentReference } from './TaskAgentReference';

export type TaskAgentCloudRequest = {
    agent?: TaskAgentReference;
    agentCloudId?: number;
    agentConnectedTime?: string;
    agentData?: JObject;
    agentSpecification?: JObject;
    pool?: TaskAgentPoolReference;
    provisionedTime?: string;
    provisionRequestTime?: string;
    releaseRequestTime?: string;
    requestId?: string;
};

