/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskGroupUpdatePropertiesBase } from './TaskGroupUpdatePropertiesBase';
import type { TaskVersion } from './TaskVersion';

export type TaskGroupPublishPreviewParameter = (TaskGroupUpdatePropertiesBase & {
    /**
     * This is to disable previous versions of task group upon publish
     */
    disablePriorVersions?: boolean;
    /**
     * Denotes if task group is in preview
     */
    preview?: boolean;
    /**
     * This is the revision of task group that is getting published
     */
    revision?: number;
    /**
     * This is the version of task group that is getting published
     */
    version?: TaskVersion;
});

