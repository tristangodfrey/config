/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TaskAgentPoolMaintenanceSchedule = {
    /**
     * Days for a build (flags enum for days of the week)
     */
    daysToBuild?: TaskAgentPoolMaintenanceSchedule.daysToBuild;
    /**
     * The Job Id of the Scheduled job that will queue the pool maintenance job.
     */
    scheduleJobId?: string;
    /**
     * Local timezone hour to start
     */
    startHours?: number;
    /**
     * Local timezone minute to start
     */
    startMinutes?: number;
    /**
     * Time zone of the build schedule (string representation of the time zone id)
     */
    timeZoneId?: string;
};

export namespace TaskAgentPoolMaintenanceSchedule {

    /**
     * Days for a build (flags enum for days of the week)
     */
    export enum daysToBuild {
        NONE = 'none',
        MONDAY = 'monday',
        TUESDAY = 'tuesday',
        WEDNESDAY = 'wednesday',
        THURSDAY = 'thursday',
        FRIDAY = 'friday',
        SATURDAY = 'saturday',
        SUNDAY = 'sunday',
        ALL = 'all',
    }


}

