/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Issue } from './Issue';
import type { JObject } from './JObject';
import type { TaskLogReference } from './TaskLogReference';
import type { TaskReference } from './TaskReference';
import type { TimelineAttempt } from './TimelineAttempt';
import type { TimelineReference } from './TimelineReference';
import type { VariableValue } from './VariableValue';

/**
 * Detailed information about the execution of different operations during pipeline run.
 */
export type TimelineRecord = {
    /**
     * The specification of an agent running a pipeline job, in binary format. Applicable when record is of type Job. <br />Example: { "VMImage" : "windows-2019" }
     */
    agentSpecification?: JObject;
    /**
     * The number of record attempts.
     */
    attempt?: number;
    /**
     * The ID connecting all records updated at the same time. This value is taken from timeline's ChangeId.
     */
    changeId?: number;
    /**
     * A string that indicates the current operation.
     */
    currentOperation?: string;
    /**
     * A reference to a sub-timeline.
     */
    details?: TimelineReference;
    /**
     * The number of errors produced by this operation.
     */
    errorCount?: number;
    /**
     * The finish time of the record.
     */
    finishTime?: string;
    /**
     * The ID of the record.
     */
    id?: string;
    /**
     * String identifier that is consistent across attempts.
     */
    identifier?: string;
    /**
     * The list of issues produced by this operation.
     */
    issues?: Array<Issue>;
    /**
     * The time the record was last modified.
     */
    lastModified?: string;
    /**
     * The REST URL of the record.
     */
    location?: string;
    /**
     * A reference to the log produced by this operation.
     */
    log?: TaskLogReference;
    /**
     * The name of the record.
     */
    name?: string;
    /**
     * An ordinal value relative to other records within the timeline.
     */
    order?: number;
    /**
     * The ID of the record's parent. <br />Example: Stage is a parent of a Phase, Phase is a parent of a Job, Job is a parent of a Task.
     */
    parentId?: string;
    /**
     * The percentage of record completion.
     */
    percentComplete?: number;
    /**
     * The previous record attempts.
     */
    previousAttempts?: Array<TimelineAttempt>;
    /**
     * The ID of the queue which connects projects to agent pools on which the operation ran on. Applicable when record is of type Job.
     */
    queueId?: number;
    /**
     * Name of the referenced record.
     */
    refName?: string;
    /**
     * The result of the record.
     */
    result?: TimelineRecord.result;
    /**
     * Evaluation of predefined conditions upon completion of record's operation. <br />Example: Evaluating `succeeded()`, Result = True <br />Example: Evaluating `and(succeeded(), eq(variables['system.debug'], False))`, Result = False
     */
    resultCode?: string;
    /**
     * The start time of the record.
     */
    startTime?: string;
    /**
     * The state of the record.
     */
    state?: TimelineRecord.state;
    /**
     * A reference to the task. Applicable when record is of type Task.
     */
    task?: TaskReference;
    /**
     * The type of operation being tracked by the record. <br />Example: Stage, Phase, Job, Task...
     */
    type?: string;
    /**
     * The variables of the record.
     */
    variables?: Record<string, VariableValue>;
    /**
     * The number of warnings produced by this operation.
     */
    warningCount?: number;
    /**
     * The name of the agent running the operation. Applicable when record is of type Job.
     */
    workerName?: string;
};

export namespace TimelineRecord {

    /**
     * The result of the record.
     */
    export enum result {
        SUCCEEDED = 'succeeded',
        SUCCEEDED_WITH_ISSUES = 'succeededWithIssues',
        FAILED = 'failed',
        CANCELED = 'canceled',
        SKIPPED = 'skipped',
        ABANDONED = 'abandoned',
    }

    /**
     * The state of the record.
     */
    export enum state {
        PENDING = 'pending',
        IN_PROGRESS = 'inProgress',
        COMPLETED = 'completed',
    }


}

