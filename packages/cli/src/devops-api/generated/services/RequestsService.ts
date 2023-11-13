/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskAgentCloudRequest } from '../models/TaskAgentCloudRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RequestsService {

    /**
     * @param organization The name of the Azure DevOps organization.
     * @param agentCloudId
     * @returns TaskAgentCloudRequest successful operation
     * @throws ApiError
     */
    public static requestsList(
        organization: string,
        agentCloudId: number,
    ): CancelablePromise<Array<TaskAgentCloudRequest>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{organization}/_apis/distributedtask/agentclouds/{agentCloudId}/requests',
            path: {
                'organization': organization,
                'agentCloudId': agentCloudId,
            },
        });
    }

}
