/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A wrapper class for a generic variable.
 */
export type VariableValue = {
    /**
     * Indicates whether the variable can be changed during script's execution runtime.
     */
    isReadOnly?: boolean;
    /**
     * Indicates whether the variable should be encrypted at rest.
     */
    isSecret?: boolean;
    /**
     * The value of the variable.
     */
    value?: string;
};

