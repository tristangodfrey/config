/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { KubernetesResource } from '../models/KubernetesResource';
import type { KubernetesResourceCreateParameters } from '../models/KubernetesResourceCreateParameters';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class KubernetesService {

    /**
     * @param organization The name of the Azure DevOps organization.
     * @param body
     * @param project Project ID or project name
     * @param environmentId
     * @returns KubernetesResource successful operation
     * @throws ApiError
     */
    public static kubernetesAdd(
        organization: string,
        body: KubernetesResourceCreateParameters,
        project: string,
        environmentId: number,
    ): CancelablePromise<KubernetesResource> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{organization}/{project}/_apis/distributedtask/environments/{environmentId}/providers/kubernetes',
            path: {
                'organization': organization,
                'project': project,
                'environmentId': environmentId,
            },
            body: body,
        });
    }

    /**
     * @param organization The name of the Azure DevOps organization.
     * @param project Project ID or project name
     * @param environmentId
     * @param resourceId
     * @returns any successful operation
     * @throws ApiError
     */
    public static kubernetesDelete(
        organization: string,
        project: string,
        environmentId: number,
        resourceId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/distributedtask/environments/{environmentId}/providers/kubernetes/{resourceId}',
            path: {
                'organization': organization,
                'project': project,
                'environmentId': environmentId,
                'resourceId': resourceId,
            },
        });
    }

    /**
     * @param organization The name of the Azure DevOps organization.
     * @param project Project ID or project name
     * @param environmentId
     * @param resourceId
     * @returns KubernetesResource successful operation
     * @throws ApiError
     */
    public static kubernetesGet(
        organization: string,
        project: string,
        environmentId: number,
        resourceId: number,
    ): CancelablePromise<KubernetesResource> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{organization}/{project}/_apis/distributedtask/environments/{environmentId}/providers/kubernetes/{resourceId}',
            path: {
                'organization': organization,
                'project': project,
                'environmentId': environmentId,
                'resourceId': resourceId,
            },
        });
    }

}
