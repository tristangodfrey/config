/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeploymentGroup } from '../models/DeploymentGroup';
import type { DeploymentGroupCreateParameter } from '../models/DeploymentGroupCreateParameter';
import type { DeploymentGroupUpdateParameter } from '../models/DeploymentGroupUpdateParameter';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DeploymentgroupsService {

    /**
     * Create a deployment group.
     * @param organization The name of the Azure DevOps organization.
     * @param body Deployment group to create.
     * @param project Project ID or project name
     * @returns DeploymentGroup successful operation
     * @throws ApiError
     */
    public static deploymentgroupsAdd(
        organization: string,
        body: DeploymentGroupCreateParameter,
        project: string,
    ): CancelablePromise<DeploymentGroup> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{organization}/{project}/_apis/distributedtask/deploymentgroups',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }

    /**
     * Get a list of deployment groups by name or IDs.
     * @param organization The name of the Azure DevOps organization.
     * @param project Project ID or project name
     * @param name Name of the deployment group.
     * @param actionFilter Get only deployment groups on which this action can be performed.
     * @param expand Include these additional details in the returned objects.
     * @param continuationToken Get deployment groups with names greater than this continuationToken lexicographically.
     * @param top Maximum number of deployment groups to return. Default is **1000**.
     * @param ids Comma separated list of IDs of the deployment groups.
     * @returns DeploymentGroup successful operation
     * @throws ApiError
     */
    public static deploymentgroupsList(
        organization: string,
        project: string,
        name?: string,
        actionFilter?: 'none' | 'manage' | 'use',
        expand?: 'none' | 'machines' | 'tags',
        continuationToken?: string,
        top?: number,
        ids?: string,
    ): CancelablePromise<Array<DeploymentGroup>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{organization}/{project}/_apis/distributedtask/deploymentgroups',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'name': name,
                'actionFilter': actionFilter,
                '$expand': expand,
                'continuationToken': continuationToken,
                '$top': top,
                'ids': ids,
            },
        });
    }

    /**
     * Delete a deployment group.
     * @param organization The name of the Azure DevOps organization.
     * @param project Project ID or project name
     * @param deploymentGroupId ID of the deployment group to be deleted.
     * @returns any successful operation
     * @throws ApiError
     */
    public static deploymentgroupsDelete(
        organization: string,
        project: string,
        deploymentGroupId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}',
            path: {
                'organization': organization,
                'project': project,
                'deploymentGroupId': deploymentGroupId,
            },
        });
    }

    /**
     * Get a deployment group by its ID.
     * @param organization The name of the Azure DevOps organization.
     * @param project Project ID or project name
     * @param deploymentGroupId ID of the deployment group.
     * @param actionFilter Get the deployment group only if this action can be performed on it.
     * @param expand Include these additional details in the returned object.
     * @returns DeploymentGroup successful operation
     * @throws ApiError
     */
    public static deploymentgroupsGet(
        organization: string,
        project: string,
        deploymentGroupId: number,
        actionFilter?: 'none' | 'manage' | 'use',
        expand?: 'none' | 'machines' | 'tags',
    ): CancelablePromise<DeploymentGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{organization}/{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}',
            path: {
                'organization': organization,
                'project': project,
                'deploymentGroupId': deploymentGroupId,
            },
            query: {
                'actionFilter': actionFilter,
                '$expand': expand,
            },
        });
    }

    /**
     * Update a deployment group.
     * @param organization The name of the Azure DevOps organization.
     * @param body Deployment group to update.
     * @param project Project ID or project name
     * @param deploymentGroupId ID of the deployment group.
     * @returns DeploymentGroup successful operation
     * @throws ApiError
     */
    public static deploymentgroupsUpdate(
        organization: string,
        body: DeploymentGroupUpdateParameter,
        project: string,
        deploymentGroupId: number,
    ): CancelablePromise<DeploymentGroup> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}',
            path: {
                'organization': organization,
                'project': project,
                'deploymentGroupId': deploymentGroupId,
            },
            body: body,
        });
    }

}
