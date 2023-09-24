/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskAgentQueue } from '../models/TaskAgentQueue';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class QueuesService {

    /**
     * Create a new agent queue to connect a project to an agent pool.
     * @param organization The name of the Azure DevOps organization.
     * @param body Details about the queue to create
     * @param project Project ID or project name
     * @param authorizePipelines Automatically authorize this queue when using YAML
     * @returns TaskAgentQueue successful operation
     * @throws ApiError
     */
    public static queuesAdd(
        organization: string,
        body: TaskAgentQueue,
        project: string,
        authorizePipelines?: boolean,
    ): CancelablePromise<TaskAgentQueue> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{organization}/{project}/_apis/distributedtask/queues',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'authorizePipelines': authorizePipelines,
            },
            body: body,
        });
    }

    /**
     * Get a list of agent queues by pool ids
     * @param organization The name of the Azure DevOps organization.
     * @param poolIds A comma-separated list of pool ids to get the corresponding queues for
     * @param project Project ID or project name
     * @param actionFilter Filter by whether the calling user has use or manage permissions
     * @returns TaskAgentQueue successful operation
     * @throws ApiError
     */
    public static queuesGetAgentQueuesForPools(
        organization: string,
        poolIds: string,
        project: string,
        actionFilter?: 'none' | 'manage' | 'use',
    ): CancelablePromise<Array<TaskAgentQueue>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{organization}/{project}/_apis/distributedtask/queues',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'poolIds': poolIds,
                'actionFilter': actionFilter,
            },
        });
    }

    /**
     * Removes an agent queue from a project.
     * @param organization The name of the Azure DevOps organization.
     * @param queueId The agent queue to remove
     * @param project Project ID or project name
     * @returns any successful operation
     * @throws ApiError
     */
    public static queuesDelete(
        organization: string,
        queueId: number,
        project: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/distributedtask/queues/{queueId}',
            path: {
                'organization': organization,
                'queueId': queueId,
                'project': project,
            },
        });
    }

    /**
     * Get information about an agent queue.
     * @param organization The name of the Azure DevOps organization.
     * @param queueId The agent queue to get information about
     * @param project Project ID or project name
     * @param actionFilter Filter by whether the calling user has use or manage permissions
     * @returns TaskAgentQueue successful operation
     * @throws ApiError
     */
    public static queuesGet(
        organization: string,
        queueId: number,
        project: string,
        actionFilter?: 'none' | 'manage' | 'use',
    ): CancelablePromise<TaskAgentQueue> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{organization}/{project}/_apis/distributedtask/queues/{queueId}',
            path: {
                'organization': organization,
                'queueId': queueId,
                'project': project,
            },
            query: {
                'actionFilter': actionFilter,
            },
        });
    }

}
