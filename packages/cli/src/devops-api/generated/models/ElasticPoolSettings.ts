/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Class used for updating an elastic pool where only certain members are populated
 */
export type ElasticPoolSettings = {
    /**
     * Set whether agents should be configured to run with interactive UI
     */
    agentInteractiveUI?: boolean;
    /**
     * Azure string representing to location of the resource
     */
    azureId?: string;
    /**
     * Number of machines to have ready waiting for jobs
     */
    desiredIdle?: number;
    /**
     * Maximum number of machines that will exist in the elastic pool
     */
    maxCapacity?: number;
    /**
     * Keep machines in the pool on failure for investigation
     */
    maxSavedNodeCount?: number;
    /**
     * Operating system type of the machines in the pool
     */
    orchestrationType?: ElasticPoolSettings.orchestrationType;
    /**
     * Operating system type of the machines in the pool
     */
    osType?: ElasticPoolSettings.osType;
    /**
     * Discard machines after each job completes
     */
    recycleAfterEachUse?: boolean;
    /**
     * Id of the Service Endpoint used to connect to Azure
     */
    serviceEndpointId?: string;
    /**
     * Scope the Service Endpoint belongs to
     */
    serviceEndpointScope?: string;
    /**
     * The minimum time in minutes to keep idle agents alive
     */
    timeToLiveMinutes?: number;
};

export namespace ElasticPoolSettings {

    /**
     * Operating system type of the machines in the pool
     */
    export enum orchestrationType {
        UNIFORM = 'uniform',
        FLEXIBLE = 'flexible',
    }

    /**
     * Operating system type of the machines in the pool
     */
    export enum osType {
        WINDOWS = 'windows',
        LINUX = 'linux',
    }


}

