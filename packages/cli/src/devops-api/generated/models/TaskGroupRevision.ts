/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IdentityRef } from './IdentityRef';

export type TaskGroupRevision = {
    changedBy?: IdentityRef;
    changedDate?: string;
    changeType?: TaskGroupRevision.changeType;
    comment?: string;
    fileId?: number;
    majorVersion?: number;
    revision?: number;
    taskGroupId?: string;
};

export namespace TaskGroupRevision {

    export enum changeType {
        ADD = 'add',
        UPDATE = 'update',
        DELETE = 'delete',
        UNDELETE = 'undelete',
    }


}

