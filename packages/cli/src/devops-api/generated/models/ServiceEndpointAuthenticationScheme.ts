/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthorizationHeader } from './AuthorizationHeader';
import type { ClientCertificate } from './ClientCertificate';
import type { InputDescriptor } from './InputDescriptor';

export type ServiceEndpointAuthenticationScheme = {
    /**
     * Gets or sets the authorization headers of service endpoint authentication scheme.
     */
    authorizationHeaders?: Array<AuthorizationHeader>;
    /**
     * Gets or sets the certificates of service endpoint authentication scheme.
     */
    clientCertificates?: Array<ClientCertificate>;
    /**
     * Gets or sets the display name for the service endpoint authentication scheme.
     */
    displayName?: string;
    /**
     * Gets or sets the input descriptors for the service endpoint authentication scheme.
     */
    inputDescriptors?: Array<InputDescriptor>;
    /**
     * Gets or sets the scheme for service endpoint authentication.
     */
    scheme?: string;
};

