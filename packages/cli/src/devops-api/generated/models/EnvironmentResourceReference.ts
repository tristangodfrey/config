/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * EnvironmentResourceReference.
 */
export type EnvironmentResourceReference = {
    /**
     * Id of the resource.
     */
    id?: number;
    /**
     * Name of the resource.
     */
    name?: string;
    /**
     * Tags of the Environment Resource Reference.
     */
    tags?: Array<string>;
    /**
     * Type of the resource.
     */
    type?: EnvironmentResourceReference.type;
};

export namespace EnvironmentResourceReference {

    /**
     * Type of the resource.
     */
    export enum type {
        UNDEFINED = 'undefined',
        GENERIC = 'generic',
        VIRTUAL_MACHINE = 'virtualMachine',
        KUBERNETES = 'kubernetes',
    }


}

