/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthenticationSchemeReference } from './AuthenticationSchemeReference';
import type { AuthorizationHeader } from './AuthorizationHeader';

export type DataSource = {
    authenticationScheme?: AuthenticationSchemeReference;
    endpointUrl?: string;
    headers?: Array<AuthorizationHeader>;
    name?: string;
    resourceUrl?: string;
    resultSelector?: string;
};

