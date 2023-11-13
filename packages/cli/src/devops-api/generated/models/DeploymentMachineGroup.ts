/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeploymentMachine } from './DeploymentMachine';
import type { DeploymentMachineGroupReference } from './DeploymentMachineGroupReference';

export type DeploymentMachineGroup = (DeploymentMachineGroupReference & {
    machines?: Array<DeploymentMachine>;
    size?: number;
});

