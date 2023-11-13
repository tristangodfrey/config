/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataSourceBinding } from './DataSourceBinding';
import type { Demand } from './Demand';
import type { JObject } from './JObject';
import type { TaskExecution } from './TaskExecution';
import type { TaskGroupDefinition } from './TaskGroupDefinition';
import type { TaskInputDefinition } from './TaskInputDefinition';
import type { TaskOutputVariable } from './TaskOutputVariable';
import type { TaskRestrictions } from './TaskRestrictions';
import type { TaskSourceDefinition } from './TaskSourceDefinition';
import type { TaskVersion } from './TaskVersion';

export type TaskDefinition = {
    agentExecution?: TaskExecution;
    author?: string;
    category?: string;
    contentsUploaded?: boolean;
    contributionIdentifier?: string;
    contributionVersion?: string;
    dataSourceBindings?: Array<DataSourceBinding>;
    definitionType?: string;
    demands?: Array<Demand>;
    deprecated?: boolean;
    description?: string;
    disabled?: boolean;
    execution?: Record<string, JObject>;
    friendlyName?: string;
    groups?: Array<TaskGroupDefinition>;
    helpMarkDown?: string;
    helpUrl?: string;
    hostType?: string;
    iconUrl?: string;
    id?: string;
    inputs?: Array<TaskInputDefinition>;
    instanceNameFormat?: string;
    minimumAgentVersion?: string;
    name?: string;
    outputVariables?: Array<TaskOutputVariable>;
    packageLocation?: string;
    packageType?: string;
    postJobExecution?: Record<string, JObject>;
    preJobExecution?: Record<string, JObject>;
    preview?: boolean;
    releaseNotes?: string;
    restrictions?: TaskRestrictions;
    runsOn?: Array<string>;
    satisfies?: Array<string>;
    serverOwned?: boolean;
    showEnvironmentVariables?: boolean;
    sourceDefinitions?: Array<TaskSourceDefinition>;
    sourceLocation?: string;
    version?: TaskVersion;
    visibility?: Array<string>;
};

