/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a purchase of resource units in a secondary marketplace.
 */
export type MarketplacePurchasedLicense = {
    /**
     * The Marketplace display name.
     */
    marketplaceName?: string;
    /**
     * The name of the identity making the purchase as seen by the marketplace
     */
    purchaserName?: string;
    /**
     * The quantity purchased.
     */
    purchaseUnitCount?: number;
};

