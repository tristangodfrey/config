/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskAgent } from './TaskAgent';
import type { TaskAgentPoolReference } from './TaskAgentPoolReference';

export type AgentChangeEvent = {
    agent?: TaskAgent;
    eventType?: string;
    pool?: TaskAgentPoolReference;
};

