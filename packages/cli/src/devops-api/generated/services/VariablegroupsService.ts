/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VariableGroup } from '../models/VariableGroup';
import type { VariableGroupParameters } from '../models/VariableGroupParameters';
import type { VariableGroupProjectReference } from '../models/VariableGroupProjectReference';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VariablegroupsService {

    /**
     * Add a variable group.
     * @param organization The name of the Azure DevOps organization.
     * @param body
     * @returns VariableGroup successful operation
     * @throws ApiError
     */
    public static variablegroupsAdd(
        organization: string,
        body: VariableGroupParameters,
    ): CancelablePromise<VariableGroup> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{organization}/_apis/distributedtask/variablegroups',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }

    /**
     * Add a variable group.
     * @param organization The name of the Azure DevOps organization.
     * @param body
     * @param variableGroupId
     * @returns any successful operation
     * @throws ApiError
     */
    public static variablegroupsShareVariableGroup(
        organization: string,
        body: Array<VariableGroupProjectReference>,
        variableGroupId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/{organization}/_apis/distributedtask/variablegroups',
            path: {
                'organization': organization,
            },
            query: {
                'variableGroupId': variableGroupId,
            },
            body: body,
        });
    }

    /**
     * Delete a variable group
     * @param organization The name of the Azure DevOps organization.
     * @param groupId Id of the variable group.
     * @param projectIds
     * @returns any successful operation
     * @throws ApiError
     */
    public static variablegroupsDelete(
        organization: string,
        groupId: number,
        projectIds: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{organization}/_apis/distributedtask/variablegroups/{groupId}',
            path: {
                'organization': organization,
                'groupId': groupId,
            },
            query: {
                'projectIds': projectIds,
            },
        });
    }

    /**
     * Update a variable group.
     * @param organization The name of the Azure DevOps organization.
     * @param body
     * @param groupId Id of the variable group to update.
     * @returns VariableGroup successful operation
     * @throws ApiError
     */
    public static variablegroupsUpdate(
        organization: string,
        body: VariableGroupParameters,
        groupId: number,
    ): CancelablePromise<VariableGroup> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/{organization}/_apis/distributedtask/variablegroups/{groupId}',
            path: {
                'organization': organization,
                'groupId': groupId,
            },
            body: body,
        });
    }

    /**
     * Get variable groups by ids.
     * @param organization The name of the Azure DevOps organization.
     * @param project Project ID or project name
     * @param groupIds Comma separated list of Ids of variable groups.
     * @returns VariableGroup successful operation
     * @throws ApiError
     */
    public static variablegroupsGetVariableGroupsById(
        organization: string,
        project: string,
        groupIds: string,
    ): CancelablePromise<Array<VariableGroup>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{organization}/{project}/_apis/distributedtask/variablegroups',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'groupIds': groupIds,
            },
        });
    }

    /**
     * Get a variable group.
     * @param organization The name of the Azure DevOps organization.
     * @param project Project ID or project name
     * @param groupId Id of the variable group.
     * @returns VariableGroup successful operation
     * @throws ApiError
     */
    public static variablegroupsGet(
        organization: string,
        project: string,
        groupId: number,
    ): CancelablePromise<VariableGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{organization}/{project}/_apis/distributedtask/variablegroups/{groupId}',
            path: {
                'organization': organization,
                'project': project,
                'groupId': groupId,
            },
        });
    }

}
