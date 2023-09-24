/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeploymentGroupReference } from './DeploymentGroupReference';
import type { DeploymentMachineChangedData } from './DeploymentMachineChangedData';

export type DeploymentMachinesChangeEvent = {
    machineGroupReference?: DeploymentGroupReference;
    machines?: Array<DeploymentMachineChangedData>;
};

