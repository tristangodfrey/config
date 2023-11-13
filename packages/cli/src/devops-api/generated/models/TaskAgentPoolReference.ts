/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TaskAgentPoolReference = {
    id?: number;
    /**
     * Gets or sets a value indicating whether or not this pool is managed by the service.
     */
    isHosted?: boolean;
    /**
     * Determines whether the pool is legacy.
     */
    isLegacy?: boolean;
    name?: string;
    /**
     * Additional pool settings and details
     */
    options?: TaskAgentPoolReference.options;
    /**
     * Gets or sets the type of the pool
     */
    poolType?: TaskAgentPoolReference.poolType;
    scope?: string;
    /**
     * Gets the current size of the pool.
     */
    size?: number;
};

export namespace TaskAgentPoolReference {

    /**
     * Additional pool settings and details
     */
    export enum options {
        NONE = 'none',
        ELASTIC_POOL = 'elasticPool',
        SINGLE_USE_AGENTS = 'singleUseAgents',
        PRESERVE_AGENT_ON_JOB_FAILURE = 'preserveAgentOnJobFailure',
    }

    /**
     * Gets or sets the type of the pool
     */
    export enum poolType {
        AUTOMATION = 'automation',
        DEPLOYMENT = 'deployment',
    }


}

