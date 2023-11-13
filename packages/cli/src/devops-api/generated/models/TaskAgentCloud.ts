/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TaskAgentCloud = {
    /**
     * Gets or sets a AcquireAgentEndpoint using which a request can be made to acquire new agent
     */
    acquireAgentEndpoint?: string;
    acquisitionTimeout?: number;
    agentCloudId?: number;
    getAccountParallelismEndpoint?: string;
    getAgentDefinitionEndpoint?: string;
    getAgentRequestStatusEndpoint?: string;
    id?: string;
    /**
     * Signifies that this Agent Cloud is internal and should not be user-manageable
     */
    internal?: boolean;
    maxParallelism?: number;
    name?: string;
    releaseAgentEndpoint?: string;
    sharedSecret?: string;
    /**
     * Gets or sets the type of the endpoint.
     */
    type?: string;
};

