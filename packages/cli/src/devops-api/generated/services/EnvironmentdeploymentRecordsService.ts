/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvironmentDeploymentExecutionRecord } from '../models/EnvironmentDeploymentExecutionRecord';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EnvironmentdeploymentRecordsService {

    /**
     * Get environment deployment execution history
     * @param organization The name of the Azure DevOps organization.
     * @param project Project ID or project name
     * @param environmentId
     * @param continuationToken
     * @param top
     * @returns EnvironmentDeploymentExecutionRecord successful operation
     * @throws ApiError
     */
    public static environmentdeploymentRecordsList(
        organization: string,
        project: string,
        environmentId: number,
        continuationToken?: string,
        top?: number,
    ): CancelablePromise<Array<EnvironmentDeploymentExecutionRecord>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{organization}/{project}/_apis/distributedtask/environments/{environmentId}/environmentdeploymentrecords',
            path: {
                'organization': organization,
                'project': project,
                'environmentId': environmentId,
            },
            query: {
                'continuationToken': continuationToken,
                'top': top,
            },
        });
    }

}
