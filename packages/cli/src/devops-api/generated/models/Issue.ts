/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An issue (error, warning) associated with a pipeline run.
 */
export type Issue = {
    /**
     * The category of the issue. <br />Example: Code - refers to compilation errors <br />Example: General - refers to generic errors
     */
    category?: string;
    /**
     * A dictionary containing details about the issue.
     */
    data?: Record<string, string>;
    /**
     * A description of issue.
     */
    message?: string;
    /**
     * The type (error, warning) of the issue.
     */
    type?: Issue.type;
};

export namespace Issue {

    /**
     * The type (error, warning) of the issue.
     */
    export enum type {
        ERROR = 'error',
        WARNING = 'warning',
    }


}

