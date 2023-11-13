/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class YamlschemaService {

    /**
     * GET the Yaml schema used for Yaml file validation.
     * @param organization The name of the Azure DevOps organization.
     * @param validateTaskNames Whether the schema should validate that tasks are actually installed (useful for offline tools where you don't want validation).
     * @returns any successful operation
     * @throws ApiError
     */
    public static yamlschemaGet(
        organization: string,
        validateTaskNames?: boolean,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{organization}/_apis/distributedtask/yamlschema',
            path: {
                'organization': organization,
            },
            query: {
                'validateTaskNames': validateTaskNames,
            },
        });
    }

}
