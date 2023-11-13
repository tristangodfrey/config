/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An attempt to update a TimelineRecord.
 */
export type TimelineAttempt = {
    /**
     * The attempt of the record.
     */
    attempt?: number;
    /**
     * The unique identifier for the record.
     */
    identifier?: string;
    /**
     * The record identifier located within the specified timeline.
     */
    recordId?: string;
    /**
     * The timeline identifier which owns the record representing this attempt.
     */
    timelineId?: string;
};

