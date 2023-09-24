/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A reference to a task.
 */
export type TaskReference = {
    /**
     * The ID of the task definition. Corresponds to the id value of task.json file. <br />Example: CmdLineV2 { "id": "D9BAFED4-0B18-4F58-968D-86655B4D2CE9" }
     */
    id?: string;
    /**
     * A dictionary of inputs specific to a task definition. Corresponds to inputs value of task.json file.
     */
    inputs?: Record<string, string>;
    /**
     * The name of the task definition. Corresponds to the name value of task.json file. <br />Example: CmdLineV2 { "name": "CmdLine" }
     */
    name?: string;
    /**
     * The version of the task definition. Corresponds to the version value of task.json file. <br />Example: CmdLineV2 { "version": { "Major": 2, "Minor": 212, "Patch": 0 } }
     */
    version?: string;
};

