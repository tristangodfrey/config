/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReferenceLinks } from './ReferenceLinks';

/**
 * A reference to an agent.
 */
export type TaskAgentReference = {
    _links?: ReferenceLinks;
    /**
     * This agent's access point.
     */
    accessPoint?: string;
    /**
     * Whether or not this agent should run jobs.
     */
    enabled?: boolean;
    /**
     * Identifier of the agent.
     */
    id?: number;
    /**
     * Name of the agent.
     */
    name?: string;
    /**
     * Agent OS.
     */
    osDescription?: string;
    /**
     * Provisioning state of this agent.
     */
    provisioningState?: string;
    /**
     * Whether or not the agent is online.
     */
    status?: TaskAgentReference.status;
    /**
     * Agent version.
     */
    version?: string;
};

export namespace TaskAgentReference {

    /**
     * Whether or not the agent is online.
     */
    export enum status {
        OFFLINE = 'offline',
        ONLINE = 'online',
    }


}

