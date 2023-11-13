/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskGroup } from '../models/TaskGroup';
import type { TaskGroupCreateParameter } from '../models/TaskGroupCreateParameter';
import type { TaskGroupUpdateParameter } from '../models/TaskGroupUpdateParameter';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TaskgroupsService {

    /**
     * Create a task group.
     * @param organization The name of the Azure DevOps organization.
     * @param body Task group object to create.
     * @param project Project ID or project name
     * @returns TaskGroup successful operation
     * @throws ApiError
     */
    public static taskgroupsAdd(
        organization: string,
        body: TaskGroupCreateParameter,
        project: string,
    ): CancelablePromise<TaskGroup> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{organization}/{project}/_apis/distributedtask/taskgroups',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }

    /**
     * Delete a task group.
     * @param organization The name of the Azure DevOps organization.
     * @param project Project ID or project name
     * @param taskGroupId Id of the task group to be deleted.
     * @param comment Comments to delete.
     * @returns any successful operation
     * @throws ApiError
     */
    public static taskgroupsDelete(
        organization: string,
        project: string,
        taskGroupId: string,
        comment?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/distributedtask/taskgroups/{taskGroupId}',
            path: {
                'organization': organization,
                'project': project,
                'taskGroupId': taskGroupId,
            },
            query: {
                'comment': comment,
            },
        });
    }

    /**
     * List task groups.
     * @param organization The name of the Azure DevOps organization.
     * @param project Project ID or project name
     * @param taskGroupId Id of the task group.
     * @param expanded 'true' to recursively expand task groups. Default is 'false'.
     * @param taskIdFilter Guid of the taskId to filter.
     * @param deleted 'true'to include deleted task groups. Default is 'false'.
     * @param top Number of task groups to get.
     * @param continuationToken Gets the task groups after the continuation token provided.
     * @param queryOrder Gets the results in the defined order. Default is 'CreatedOnDescending'.
     * @returns TaskGroup successful operation
     * @throws ApiError
     */
    public static taskgroupsList(
        organization: string,
        project: string,
        taskGroupId: string,
        expanded?: boolean,
        taskIdFilter?: string,
        deleted?: boolean,
        top?: number,
        continuationToken?: string,
        queryOrder?: 'createdOnAscending' | 'createdOnDescending',
    ): CancelablePromise<Array<TaskGroup>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{organization}/{project}/_apis/distributedtask/taskgroups/{taskGroupId}',
            path: {
                'organization': organization,
                'project': project,
                'taskGroupId': taskGroupId,
            },
            query: {
                'expanded': expanded,
                'taskIdFilter': taskIdFilter,
                'deleted': deleted,
                '$top': top,
                'continuationToken': continuationToken,
                'queryOrder': queryOrder,
            },
        });
    }

    /**
     * Update a task group.
     * @param organization The name of the Azure DevOps organization.
     * @param body Task group to update.
     * @param project Project ID or project name
     * @param taskGroupId Id of the task group to update.
     * @returns TaskGroup successful operation
     * @throws ApiError
     */
    public static taskgroupsUpdate(
        organization: string,
        body: TaskGroupUpdateParameter,
        project: string,
        taskGroupId: string,
    ): CancelablePromise<TaskGroup> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/{organization}/{project}/_apis/distributedtask/taskgroups/{taskGroupId}',
            path: {
                'organization': organization,
                'project': project,
                'taskGroupId': taskGroupId,
            },
            body: body,
        });
    }

}
