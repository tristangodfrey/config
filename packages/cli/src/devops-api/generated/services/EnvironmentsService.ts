/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvironmentCreateParameter } from '../models/EnvironmentCreateParameter';
import type { EnvironmentInstance } from '../models/EnvironmentInstance';
import type { EnvironmentUpdateParameter } from '../models/EnvironmentUpdateParameter';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EnvironmentsService {

    /**
     * Create an environment.
     * @param organization The name of the Azure DevOps organization.
     * @param body Environment to create.
     * @param project Project ID or project name
     * @returns EnvironmentInstance successful operation
     * @throws ApiError
     */
    public static environmentsAdd(
        organization: string,
        body: EnvironmentCreateParameter,
        project: string,
    ): CancelablePromise<EnvironmentInstance> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{organization}/{project}/_apis/distributedtask/environments',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }

    /**
     * Get all environments.
     * @param organization The name of the Azure DevOps organization.
     * @param project Project ID or project name
     * @param name
     * @param continuationToken
     * @param top
     * @returns EnvironmentInstance successful operation
     * @throws ApiError
     */
    public static environmentsList(
        organization: string,
        project: string,
        name?: string,
        continuationToken?: string,
        top?: number,
    ): CancelablePromise<Array<EnvironmentInstance>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{organization}/{project}/_apis/distributedtask/environments',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'name': name,
                'continuationToken': continuationToken,
                '$top': top,
            },
        });
    }

    /**
     * Delete the specified environment.
     * @param organization The name of the Azure DevOps organization.
     * @param project Project ID or project name
     * @param environmentId ID of the environment.
     * @returns any successful operation
     * @throws ApiError
     */
    public static environmentsDelete(
        organization: string,
        project: string,
        environmentId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/distributedtask/environments/{environmentId}',
            path: {
                'organization': organization,
                'project': project,
                'environmentId': environmentId,
            },
        });
    }

    /**
     * Get an environment by its ID.
     * @param organization The name of the Azure DevOps organization.
     * @param project Project ID or project name
     * @param environmentId ID of the environment.
     * @param expands Include these additional details in the returned objects.
     * @returns EnvironmentInstance successful operation
     * @throws ApiError
     */
    public static environmentsGet(
        organization: string,
        project: string,
        environmentId: number,
        expands?: 'none' | 'resourceReferences',
    ): CancelablePromise<EnvironmentInstance> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{organization}/{project}/_apis/distributedtask/environments/{environmentId}',
            path: {
                'organization': organization,
                'project': project,
                'environmentId': environmentId,
            },
            query: {
                'expands': expands,
            },
        });
    }

    /**
     * Update the specified environment.
     * @param organization The name of the Azure DevOps organization.
     * @param body Environment data to update.
     * @param project Project ID or project name
     * @param environmentId ID of the environment.
     * @returns EnvironmentInstance successful operation
     * @throws ApiError
     */
    public static environmentsUpdate(
        organization: string,
        body: EnvironmentUpdateParameter,
        project: string,
        environmentId: number,
    ): CancelablePromise<EnvironmentInstance> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/distributedtask/environments/{environmentId}',
            path: {
                'organization': organization,
                'project': project,
                'environmentId': environmentId,
            },
            body: body,
        });
    }

}
