/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TaskAgentUpdateReason = {
    code?: TaskAgentUpdateReason.code;
};

export namespace TaskAgentUpdateReason {

    export enum code {
        MANUAL = 'manual',
        MIN_AGENT_VERSION_REQUIRED = 'minAgentVersionRequired',
        DOWNGRADE = 'downgrade',
    }


}

