/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskAgentCloud } from '../models/TaskAgentCloud';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AgentcloudsService {

    /**
     * @param organization The name of the Azure DevOps organization.
     * @param body
     * @returns TaskAgentCloud successful operation
     * @throws ApiError
     */
    public static agentcloudsAdd(
        organization: string,
        body: TaskAgentCloud,
    ): CancelablePromise<TaskAgentCloud> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{organization}/_apis/distributedtask/agentclouds',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }

    /**
     * @param organization The name of the Azure DevOps organization.
     * @returns TaskAgentCloud successful operation
     * @throws ApiError
     */
    public static agentcloudsList(
        organization: string,
    ): CancelablePromise<Array<TaskAgentCloud>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{organization}/_apis/distributedtask/agentclouds',
            path: {
                'organization': organization,
            },
        });
    }

    /**
     * @param organization The name of the Azure DevOps organization.
     * @param agentCloudId
     * @returns TaskAgentCloud successful operation
     * @throws ApiError
     */
    public static agentcloudsDelete(
        organization: string,
        agentCloudId: number,
    ): CancelablePromise<TaskAgentCloud> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{organization}/_apis/distributedtask/agentclouds/{agentCloudId}',
            path: {
                'organization': organization,
                'agentCloudId': agentCloudId,
            },
        });
    }

    /**
     * @param organization The name of the Azure DevOps organization.
     * @param agentCloudId
     * @returns TaskAgentCloud successful operation
     * @throws ApiError
     */
    public static agentcloudsGet(
        organization: string,
        agentCloudId: number,
    ): CancelablePromise<TaskAgentCloud> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{organization}/_apis/distributedtask/agentclouds/{agentCloudId}',
            path: {
                'organization': organization,
                'agentCloudId': agentCloudId,
            },
        });
    }

    /**
     * @param organization The name of the Azure DevOps organization.
     * @param body
     * @param agentCloudId
     * @returns TaskAgentCloud successful operation
     * @throws ApiError
     */
    public static agentcloudsUpdate(
        organization: string,
        body: TaskAgentCloud,
        agentCloudId: number,
    ): CancelablePromise<TaskAgentCloud> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/{organization}/_apis/distributedtask/agentclouds/{agentCloudId}',
            path: {
                'organization': organization,
                'agentCloudId': agentCloudId,
            },
            body: body,
        });
    }

}
