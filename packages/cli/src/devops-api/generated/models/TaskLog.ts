/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskLogReference } from './TaskLogReference';

/**
 * A task log connected to a timeline record.
 */
export type TaskLog = (TaskLogReference & {
    /**
     * The time of the task log creation.
     */
    createdOn?: string;
    /**
     * The REST URL of the task log when indexed.
     */
    indexLocation?: string;
    /**
     * The time of the last modification of the task log.
     */
    lastChangedOn?: string;
    /**
     * The number of the task log lines.
     */
    lineCount?: number;
    /**
     * The path of the task log.
     */
    path?: string;
});

