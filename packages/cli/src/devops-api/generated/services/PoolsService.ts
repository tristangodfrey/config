/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskAgentPool } from '../models/TaskAgentPool';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PoolsService {

    /**
     * Create an agent pool.
     * @param organization The name of the Azure DevOps organization.
     * @param body Details about the new agent pool
     * @returns TaskAgentPool successful operation
     * @throws ApiError
     */
    public static poolsAdd(
        organization: string,
        body: TaskAgentPool,
    ): CancelablePromise<TaskAgentPool> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{organization}/_apis/distributedtask/pools',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }

    /**
     * Get a list of agent pools.
     * @param organization The name of the Azure DevOps organization.
     * @param poolIds pool Ids to fetch
     * @param actionFilter Filter by whether the calling user has use or manage permissions
     * @returns TaskAgentPool successful operation
     * @throws ApiError
     */
    public static poolsGetAgentPoolsByIds(
        organization: string,
        poolIds: string,
        actionFilter?: 'none' | 'manage' | 'use',
    ): CancelablePromise<Array<TaskAgentPool>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{organization}/_apis/distributedtask/pools',
            path: {
                'organization': organization,
            },
            query: {
                'poolIds': poolIds,
                'actionFilter': actionFilter,
            },
        });
    }

    /**
     * Delete an agent pool.
     * @param organization The name of the Azure DevOps organization.
     * @param poolId ID of the agent pool to delete
     * @returns any successful operation
     * @throws ApiError
     */
    public static poolsDelete(
        organization: string,
        poolId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{organization}/_apis/distributedtask/pools/{poolId}',
            path: {
                'organization': organization,
                'poolId': poolId,
            },
        });
    }

    /**
     * Get information about an agent pool.
     * @param organization The name of the Azure DevOps organization.
     * @param poolId An agent pool ID
     * @param properties Agent pool properties (comma-separated)
     * @param actionFilter Filter by whether the calling user has use or manage permissions
     * @returns TaskAgentPool successful operation
     * @throws ApiError
     */
    public static poolsGet(
        organization: string,
        poolId: number,
        properties?: string,
        actionFilter?: 'none' | 'manage' | 'use',
    ): CancelablePromise<TaskAgentPool> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{organization}/_apis/distributedtask/pools/{poolId}',
            path: {
                'organization': organization,
                'poolId': poolId,
            },
            query: {
                'properties': properties,
                'actionFilter': actionFilter,
            },
        });
    }

    /**
     * Update properties on an agent pool
     * @param organization The name of the Azure DevOps organization.
     * @param body Updated agent pool details
     * @param poolId The agent pool to update
     * @returns TaskAgentPool successful operation
     * @throws ApiError
     */
    public static poolsUpdate(
        organization: string,
        body: TaskAgentPool,
        poolId: number,
    ): CancelablePromise<TaskAgentPool> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/{organization}/_apis/distributedtask/pools/{poolId}',
            path: {
                'organization': organization,
                'poolId': poolId,
            },
            body: body,
        });
    }

}
