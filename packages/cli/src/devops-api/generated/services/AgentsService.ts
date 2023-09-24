/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskAgent } from '../models/TaskAgent';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AgentsService {

    /**
     * Adds an agent to a pool.  You probably don't want to call this endpoint directly. Instead, [configure an agent](https://docs.microsoft.com/azure/devops/pipelines/agents/agents) using the agent download package.
     * @param organization The name of the Azure DevOps organization.
     * @param body Details about the agent being added
     * @param poolId The agent pool in which to add the agent
     * @returns TaskAgent successful operation
     * @throws ApiError
     */
    public static agentsAdd(
        organization: string,
        body: TaskAgent,
        poolId: number,
    ): CancelablePromise<TaskAgent> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{organization}/_apis/distributedtask/pools/{poolId}/agents',
            path: {
                'organization': organization,
                'poolId': poolId,
            },
            body: body,
        });
    }

    /**
     * Get a list of agents.
     * @param organization The name of the Azure DevOps organization.
     * @param poolId The agent pool containing the agents
     * @param agentName Filter on agent name
     * @param includeCapabilities Whether to include the agents' capabilities in the response
     * @param includeAssignedRequest Whether to include details about the agents' current work
     * @param includeLastCompletedRequest Whether to include details about the agents' most recent completed work
     * @param propertyFilters Filter which custom properties will be returned
     * @param demands Filter by demands the agents can satisfy
     * @returns TaskAgent successful operation
     * @throws ApiError
     */
    public static agentsList(
        organization: string,
        poolId: number,
        agentName?: string,
        includeCapabilities?: boolean,
        includeAssignedRequest?: boolean,
        includeLastCompletedRequest?: boolean,
        propertyFilters?: string,
        demands?: string,
    ): CancelablePromise<Array<TaskAgent>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{organization}/_apis/distributedtask/pools/{poolId}/agents',
            path: {
                'organization': organization,
                'poolId': poolId,
            },
            query: {
                'agentName': agentName,
                'includeCapabilities': includeCapabilities,
                'includeAssignedRequest': includeAssignedRequest,
                'includeLastCompletedRequest': includeLastCompletedRequest,
                'propertyFilters': propertyFilters,
                'demands': demands,
            },
        });
    }

    /**
     * Delete an agent.  You probably don't want to call this endpoint directly. Instead, [use the agent configuration script](https://docs.microsoft.com/azure/devops/pipelines/agents/agents) to remove an agent from your organization.
     * @param organization The name of the Azure DevOps organization.
     * @param poolId The pool ID to remove the agent from
     * @param agentId The agent ID to remove
     * @returns any successful operation
     * @throws ApiError
     */
    public static agentsDelete(
        organization: string,
        poolId: number,
        agentId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{organization}/_apis/distributedtask/pools/{poolId}/agents/{agentId}',
            path: {
                'organization': organization,
                'poolId': poolId,
                'agentId': agentId,
            },
        });
    }

    /**
     * Get information about an agent.
     * @param organization The name of the Azure DevOps organization.
     * @param poolId The agent pool containing the agent
     * @param agentId The agent ID to get information about
     * @param includeCapabilities Whether to include the agent's capabilities in the response
     * @param includeAssignedRequest Whether to include details about the agent's current work
     * @param includeLastCompletedRequest Whether to include details about the agents' most recent completed work
     * @param propertyFilters Filter which custom properties will be returned
     * @returns TaskAgent successful operation
     * @throws ApiError
     */
    public static agentsGet(
        organization: string,
        poolId: number,
        agentId: number,
        includeCapabilities?: boolean,
        includeAssignedRequest?: boolean,
        includeLastCompletedRequest?: boolean,
        propertyFilters?: string,
    ): CancelablePromise<TaskAgent> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{organization}/_apis/distributedtask/pools/{poolId}/agents/{agentId}',
            path: {
                'organization': organization,
                'poolId': poolId,
                'agentId': agentId,
            },
            query: {
                'includeCapabilities': includeCapabilities,
                'includeAssignedRequest': includeAssignedRequest,
                'includeLastCompletedRequest': includeLastCompletedRequest,
                'propertyFilters': propertyFilters,
            },
        });
    }

    /**
     * Replace an agent.  You probably don't want to call this endpoint directly. Instead, [use the agent configuration script](https://docs.microsoft.com/azure/devops/pipelines/agents/agents) to remove and reconfigure an agent from your organization.
     * @param organization The name of the Azure DevOps organization.
     * @param body Updated details about the replacing agent
     * @param poolId The agent pool to use
     * @param agentId The agent to replace
     * @returns TaskAgent successful operation
     * @throws ApiError
     */
    public static agentsReplaceAgent(
        organization: string,
        body: TaskAgent,
        poolId: number,
        agentId: number,
    ): CancelablePromise<TaskAgent> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/{organization}/_apis/distributedtask/pools/{poolId}/agents/{agentId}',
            path: {
                'organization': organization,
                'poolId': poolId,
                'agentId': agentId,
            },
            body: body,
        });
    }

    /**
     * Update agent details.
     * @param organization The name of the Azure DevOps organization.
     * @param body Updated details about the agent
     * @param poolId The agent pool to use
     * @param agentId The agent to update
     * @returns TaskAgent successful operation
     * @throws ApiError
     */
    public static agentsUpdate(
        organization: string,
        body: TaskAgent,
        poolId: number,
        agentId: number,
    ): CancelablePromise<TaskAgent> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/{organization}/_apis/distributedtask/pools/{poolId}/agents/{agentId}',
            path: {
                'organization': organization,
                'poolId': poolId,
                'agentId': agentId,
            },
            body: body,
        });
    }

}
