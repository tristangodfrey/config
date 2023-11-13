/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskAgentCloudType } from '../models/TaskAgentCloudType';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AgentcloudtypesService {

    /**
     * Get agent cloud types.
     * @param organization The name of the Azure DevOps organization.
     * @returns TaskAgentCloudType successful operation
     * @throws ApiError
     */
    public static agentcloudtypesList(
        organization: string,
    ): CancelablePromise<Array<TaskAgentCloudType>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{organization}/_apis/distributedtask/agentcloudtypes',
            path: {
                'organization': organization,
            },
        });
    }

}
