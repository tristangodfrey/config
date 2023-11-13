/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PackageVersion } from './PackageVersion';

/**
 * Represents a downloadable package.
 */
export type PackageMetadata = {
    /**
     * The date the package was created
     */
    createdOn?: string;
    /**
     * A direct link to download the package.
     */
    downloadUrl?: string;
    /**
     * The UI uses this to display instructions, i.e. "unzip MyAgent.zip"
     */
    filename?: string;
    /**
     * MD5 hash as a base64 string
     */
    hashValue?: string;
    /**
     * A link to documentation
     */
    infoUrl?: string;
    /**
     * The platform (win7, linux, etc.)
     */
    platform?: string;
    /**
     * The type of package (e.g. "agent")
     */
    type?: string;
    /**
     * The package version.
     */
    version?: PackageVersion;
};

