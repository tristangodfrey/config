/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GraphSubjectBase } from './GraphSubjectBase';

export type IdentityRef = (GraphSubjectBase & {
    /**
     * Deprecated - Can be retrieved by querying the Graph user referenced in the "self" entry of the IdentityRef "_links" dictionary
     */
    directoryAlias?: string;
    id?: string;
    /**
     * Deprecated - Available in the "avatar" entry of the IdentityRef "_links" dictionary
     */
    imageUrl?: string;
    /**
     * Deprecated - Can be retrieved by querying the Graph membership state referenced in the "membershipState" entry of the GraphUser "_links" dictionary
     */
    inactive?: boolean;
    /**
     * Deprecated - Can be inferred from the subject type of the descriptor (Descriptor.IsAadUserType/Descriptor.IsAadGroupType)
     */
    isAadIdentity?: boolean;
    /**
     * Deprecated - Can be inferred from the subject type of the descriptor (Descriptor.IsGroupType)
     */
    isContainer?: boolean;
    isDeletedInOrigin?: boolean;
    /**
     * Deprecated - not in use in most preexisting implementations of ToIdentityRef
     */
    profileUrl?: string;
    /**
     * Deprecated - use Domain+PrincipalName instead
     */
    uniqueName?: string;
});

