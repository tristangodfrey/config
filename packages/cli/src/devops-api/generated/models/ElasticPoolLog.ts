/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Log data for an Elastic Pool
 */
export type ElasticPoolLog = {
    /**
     * Log Id
     */
    id?: number;
    /**
     * E.g. error, warning, info
     */
    level?: ElasticPoolLog.level;
    /**
     * Log contents
     */
    message?: string;
    /**
     * Operation that triggered the message being logged
     */
    operation?: ElasticPoolLog.operation;
    /**
     * Id of the associated TaskAgentPool
     */
    poolId?: number;
    /**
     * Datetime that the log occurred
     */
    timestamp?: string;
};

export namespace ElasticPoolLog {

    /**
     * E.g. error, warning, info
     */
    export enum level {
        ERROR = 'error',
        WARNING = 'warning',
        INFO = 'info',
    }

    /**
     * Operation that triggered the message being logged
     */
    export enum operation {
        CONFIGURATION_JOB = 'configurationJob',
        SIZING_JOB = 'sizingJob',
        INCREASE_CAPACITY = 'increaseCapacity',
        REIMAGE = 'reimage',
        DELETE_VMS = 'deleteVMs',
    }


}

