/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PropertiesCollection } from './PropertiesCollection';
import type { TaskAgent } from './TaskAgent';

/**
 * Deployment target.
 */
export type DeploymentMachine = {
    /**
     * Deployment agent.
     */
    agent?: TaskAgent;
    /**
     * Deployment target Identifier.
     */
    id?: number;
    /**
     * Properties of the deployment target.
     */
    properties?: PropertiesCollection;
    /**
     * Tags of the deployment target.
     */
    tags?: Array<string>;
};

