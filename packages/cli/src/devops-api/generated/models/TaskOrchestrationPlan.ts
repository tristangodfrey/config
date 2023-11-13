/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PlanEnvironment } from './PlanEnvironment';
import type { TaskLogReference } from './TaskLogReference';
import type { TaskOrchestrationContainer } from './TaskOrchestrationContainer';
import type { TaskOrchestrationPlanReference } from './TaskOrchestrationPlanReference';
import type { TimelineReference } from './TimelineReference';

export type TaskOrchestrationPlan = (TaskOrchestrationPlanReference & {
    environment?: PlanEnvironment;
    expandedYaml?: TaskLogReference;
    finishTime?: string;
    implementation?: TaskOrchestrationContainer;
    initializationLog?: TaskLogReference;
    requestedById?: string;
    requestedForId?: string;
    result?: TaskOrchestrationPlan.result;
    resultCode?: string;
    startTime?: string;
    state?: TaskOrchestrationPlan.state;
    timeline?: TimelineReference;
});

export namespace TaskOrchestrationPlan {

    export enum result {
        SUCCEEDED = 'succeeded',
        SUCCEEDED_WITH_ISSUES = 'succeededWithIssues',
        FAILED = 'failed',
        CANCELED = 'canceled',
        SKIPPED = 'skipped',
        ABANDONED = 'abandoned',
    }

    export enum state {
        IN_PROGRESS = 'inProgress',
        QUEUED = 'queued',
        COMPLETED = 'completed',
        THROTTLED = 'throttled',
    }


}

