/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ElasticPool } from './ElasticPool';
import type { TaskAgentPool } from './TaskAgentPool';
import type { TaskAgentQueue } from './TaskAgentQueue';

/**
 * Returned result from creating a new elastic pool
 */
export type ElasticPoolCreationResult = {
    /**
     * Created agent pool
     */
    agentPool?: TaskAgentPool;
    /**
     * Created agent queue
     */
    agentQueue?: TaskAgentQueue;
    /**
     * Created elastic pool
     */
    elasticPool?: ElasticPool;
};

