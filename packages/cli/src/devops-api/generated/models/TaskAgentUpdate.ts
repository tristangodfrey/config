/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IdentityRef } from './IdentityRef';
import type { PackageVersion } from './PackageVersion';
import type { TaskAgentUpdateReason } from './TaskAgentUpdateReason';

/**
 * Details about an agent update.
 */
export type TaskAgentUpdate = {
    /**
     * Current state of this agent update.
     */
    currentState?: string;
    /**
     * Reason for this update.
     */
    reason?: TaskAgentUpdateReason;
    /**
     * Identity which requested this update.
     */
    requestedBy?: IdentityRef;
    /**
     * Date on which this update was requested.
     */
    requestTime?: string;
    /**
     * Source agent version of the update.
     */
    sourceVersion?: PackageVersion;
    /**
     * Target agent version of the update.
     */
    targetVersion?: PackageVersion;
};

