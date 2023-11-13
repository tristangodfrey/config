/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TimelineRecord } from './TimelineRecord';
import type { TimelineReference } from './TimelineReference';

export type Timeline = (TimelineReference & {
    lastChangedBy?: string;
    lastChangedOn?: string;
    records?: Array<TimelineRecord>;
});

