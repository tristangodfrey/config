/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskAgentPublicKey } from './TaskAgentPublicKey';

/**
 * Provides data necessary for authorizing the agent using OAuth 2.0 authentication flows.
 */
export type TaskAgentAuthorization = {
    /**
     * Endpoint used to obtain access tokens from the configured token service.
     */
    authorizationUrl?: string;
    /**
     * Client identifier for this agent.
     */
    clientId?: string;
    /**
     * Public key used to verify the identity of this agent.
     */
    publicKey?: TaskAgentPublicKey;
};

