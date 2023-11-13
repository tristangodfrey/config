/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataSource } from './DataSource';
import type { DependencyData } from './DependencyData';
import type { EndpointUrl } from './EndpointUrl';
import type { HelpLink } from './HelpLink';
import type { InputDescriptor } from './InputDescriptor';
import type { ServiceEndpointAuthenticationScheme } from './ServiceEndpointAuthenticationScheme';

/**
 * Represents type of the service endpoint.
 */
export type ServiceEndpointType = {
    /**
     * Authentication scheme of service endpoint type.
     */
    authenticationSchemes?: Array<ServiceEndpointAuthenticationScheme>;
    /**
     * Data sources of service endpoint type.
     */
    dataSources?: Array<DataSource>;
    /**
     * Dependency data of service endpoint type.
     */
    dependencyData?: Array<DependencyData>;
    /**
     * Gets or sets the description of service endpoint type.
     */
    description?: string;
    /**
     * Gets or sets the display name of service endpoint type.
     */
    displayName?: string;
    /**
     * Gets or sets the endpoint url of service endpoint type.
     */
    endpointUrl?: EndpointUrl;
    /**
     * Gets or sets the help link of service endpoint type.
     */
    helpLink?: HelpLink;
    helpMarkDown?: string;
    /**
     * Gets or sets the icon url of service endpoint type.
     */
    iconUrl?: string;
    /**
     * Input descriptor of service endpoint type.
     */
    inputDescriptors?: Array<InputDescriptor>;
    /**
     * Gets or sets the name of service endpoint type.
     */
    name?: string;
    /**
     * Trusted hosts of a service endpoint type.
     */
    trustedHosts?: Array<string>;
    /**
     * Gets or sets the ui contribution id of service endpoint type.
     */
    uiContributionId?: string;
};

