/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeploymentMachine } from '../models/DeploymentMachine';
import type { DeploymentTargetUpdateParameter } from '../models/DeploymentTargetUpdateParameter';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TargetsService {

    /**
     * Get a list of deployment targets in a deployment group.
     * @param organization The name of the Azure DevOps organization.
     * @param project Project ID or project name
     * @param deploymentGroupId ID of the deployment group.
     * @param tags Get only the deployment targets that contain all these comma separted list of tags.
     * @param name Name pattern of the deployment targets to return.
     * @param partialNameMatch When set to true, treats **name** as pattern. Else treats it as absolute match. Default is **false**.
     * @param expand Include these additional details in the returned objects.
     * @param agentStatus Get only deployment targets that have this status.
     * @param agentJobResult Get only deployment targets that have this last job result.
     * @param continuationToken Get deployment targets with names greater than this continuationToken lexicographically.
     * @param top Maximum number of deployment targets to return. Default is **1000**.
     * @param enabled Get only deployment targets that are enabled or disabled. Default is 'null' which returns all the targets.
     * @param propertyFilters
     * @returns DeploymentMachine successful operation
     * @throws ApiError
     */
    public static targetsList(
        organization: string,
        project: string,
        deploymentGroupId: number,
        tags?: string,
        name?: string,
        partialNameMatch?: boolean,
        expand?: 'none' | 'capabilities' | 'assignedRequest' | 'lastCompletedRequest',
        agentStatus?: 'offline' | 'online' | 'all',
        agentJobResult?: 'failed' | 'passed' | 'neverDeployed' | 'all',
        continuationToken?: string,
        top?: number,
        enabled?: boolean,
        propertyFilters?: string,
    ): CancelablePromise<Array<DeploymentMachine>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{organization}/{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/targets',
            path: {
                'organization': organization,
                'project': project,
                'deploymentGroupId': deploymentGroupId,
            },
            query: {
                'tags': tags,
                'name': name,
                'partialNameMatch': partialNameMatch,
                '$expand': expand,
                'agentStatus': agentStatus,
                'agentJobResult': agentJobResult,
                'continuationToken': continuationToken,
                '$top': top,
                'enabled': enabled,
                'propertyFilters': propertyFilters,
            },
        });
    }

    /**
     * Update tags of a list of deployment targets in a deployment group.
     * @param organization The name of the Azure DevOps organization.
     * @param body Deployment targets with tags to udpdate.
     * @param project Project ID or project name
     * @param deploymentGroupId ID of the deployment group in which deployment targets are updated.
     * @returns DeploymentMachine successful operation
     * @throws ApiError
     */
    public static targetsUpdate(
        organization: string,
        body: Array<DeploymentTargetUpdateParameter>,
        project: string,
        deploymentGroupId: number,
    ): CancelablePromise<Array<DeploymentMachine>> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/targets',
            path: {
                'organization': organization,
                'project': project,
                'deploymentGroupId': deploymentGroupId,
            },
            body: body,
        });
    }

    /**
     * Delete a deployment target in a deployment group. This deletes the agent from associated deployment pool too.
     * @param organization The name of the Azure DevOps organization.
     * @param project Project ID or project name
     * @param deploymentGroupId ID of the deployment group in which deployment target is deleted.
     * @param targetId ID of the deployment target to delete.
     * @returns any successful operation
     * @throws ApiError
     */
    public static targetsDelete(
        organization: string,
        project: string,
        deploymentGroupId: number,
        targetId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/targets/{targetId}',
            path: {
                'organization': organization,
                'project': project,
                'deploymentGroupId': deploymentGroupId,
                'targetId': targetId,
            },
        });
    }

    /**
     * Get a deployment target by its ID in a deployment group
     * @param organization The name of the Azure DevOps organization.
     * @param project Project ID or project name
     * @param deploymentGroupId ID of the deployment group to which deployment target belongs.
     * @param targetId ID of the deployment target to return.
     * @param expand Include these additional details in the returned objects.
     * @returns DeploymentMachine successful operation
     * @throws ApiError
     */
    public static targetsGet(
        organization: string,
        project: string,
        deploymentGroupId: number,
        targetId: number,
        expand?: 'none' | 'capabilities' | 'assignedRequest' | 'lastCompletedRequest',
    ): CancelablePromise<DeploymentMachine> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{organization}/{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/targets/{targetId}',
            path: {
                'organization': organization,
                'project': project,
                'deploymentGroupId': deploymentGroupId,
                'targetId': targetId,
            },
            query: {
                '$expand': expand,
            },
        });
    }

}
