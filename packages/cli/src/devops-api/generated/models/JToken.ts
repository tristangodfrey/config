/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents an abstract JSON token.
 */
export type JToken = {
    /**
     * Get the first child token of this token.
     */
    first?: JToken;
    /**
     * Gets a value indicating whether this token has child tokens.
     */
    hasValues?: boolean;
    item?: JToken;
    /**
     * Get the last child token of this token.
     */
    last?: JToken;
    /**
     * Gets the next sibling token of this node.
     */
    next?: JToken;
    /**
     * Gets or sets the parent.
     */
    parent?: string;
    /**
     * Gets the path of the JSON token.
     */
    path?: string;
    /**
     * Gets the previous sibling token of this node.
     */
    previous?: JToken;
    /**
     * Gets the root JToken of this JToken.
     */
    root?: JToken;
    /**
     * Gets the node type for this JToken.
     */
    type?: string;
};

