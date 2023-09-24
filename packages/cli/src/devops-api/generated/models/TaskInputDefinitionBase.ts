/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskInputValidation } from './TaskInputValidation';

export type TaskInputDefinitionBase = {
    aliases?: Array<string>;
    defaultValue?: string;
    groupName?: string;
    helpMarkDown?: string;
    label?: string;
    name?: string;
    options?: Record<string, string>;
    properties?: Record<string, string>;
    required?: boolean;
    type?: string;
    validation?: TaskInputValidation;
    visibleRule?: string;
};

