/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TaskHubLicenseDetails = {
    enterpriseUsersCount?: number;
    failedToReachAllProviders?: boolean;
    freeHostedLicenseCount?: number;
    freeLicenseCount?: number;
    hasLicenseCountEverUpdated?: boolean;
    hostedAgentMinutesFreeCount?: number;
    hostedAgentMinutesUsedCount?: number;
    hostedLicensesArePremium?: boolean;
    msdnUsersCount?: number;
    /**
     * Microsoft-hosted licenses purchased from VSTS directly.
     */
    purchasedHostedLicenseCount?: number;
    /**
     * Self-hosted licenses purchased from VSTS directly.
     */
    purchasedLicenseCount?: number;
    totalHostedLicenseCount?: number;
    totalLicenseCount?: number;
    totalPrivateLicenseCount?: number;
};

