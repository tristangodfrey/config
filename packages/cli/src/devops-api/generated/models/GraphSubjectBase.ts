/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReferenceLinks } from './ReferenceLinks';

export type GraphSubjectBase = {
    /**
     * This field contains zero or more interesting links about the graph subject. These links may be invoked to obtain additional relationships or more detailed information about this graph subject.
     */
    _links?: ReferenceLinks;
    /**
     * The descriptor is the primary way to reference the graph subject while the system is running. This field will uniquely identify the same graph subject across both Accounts and Organizations.
     */
    descriptor?: string;
    /**
     * This is the non-unique display name of the graph subject. To change this field, you must alter its value in the source provider.
     */
    displayName?: string;
    /**
     * This url is the full route to the source resource of this graph subject.
     */
    url?: string;
};

