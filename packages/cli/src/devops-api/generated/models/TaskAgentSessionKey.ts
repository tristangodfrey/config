/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a symmetric key used for message-level encryption for communication sent to an agent.
 */
export type TaskAgentSessionKey = {
    /**
     * Gets or sets a value indicating whether or not the key value is encrypted. If this value is true, the Value property should be decrypted using the <c>RSA</c> key exchanged with the server during registration.
     */
    encrypted?: boolean;
    /**
     * Gets or sets the symmetric key value.
     */
    value?: Array<string>;
};

