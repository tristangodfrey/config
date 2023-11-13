/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResourceFilterOptions } from './ResourceFilterOptions';
import type { ResourceFilters } from './ResourceFilters';
import type { ResourceItem } from './ResourceItem';

export type ResourcesHubData = {
    continuationToken?: string;
    hasProjectLevelManagePermission?: boolean;
    resourceFilterOptions?: ResourceFilterOptions;
    resourceFilters?: ResourceFilters;
    resourceItems?: Array<ResourceItem>;
};

