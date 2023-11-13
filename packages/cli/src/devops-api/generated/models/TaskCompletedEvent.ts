/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskEvent } from './TaskEvent';

export type TaskCompletedEvent = (TaskEvent & {
    /**
     * The api request was no delivered successfully
     */
    deliveryFailed?: boolean;
    /**
     * The result of the task.
     */
    result?: TaskCompletedEvent.result;
});

export namespace TaskCompletedEvent {

    /**
     * The result of the task.
     */
    export enum result {
        SUCCEEDED = 'succeeded',
        SUCCEEDED_WITH_ISSUES = 'succeededWithIssues',
        FAILED = 'failed',
        CANCELED = 'canceled',
        SKIPPED = 'skipped',
        ABANDONED = 'abandoned',
    }


}

