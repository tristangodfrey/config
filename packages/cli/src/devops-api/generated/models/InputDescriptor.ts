/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InputValidation } from './InputValidation';
import type { InputValues } from './InputValues';

/**
 * Describes an input for subscriptions.
 */
export type InputDescriptor = {
    /**
     * The ids of all inputs that the value of this input is dependent on.
     */
    dependencyInputIds?: Array<string>;
    /**
     * Description of what this input is used for
     */
    description?: string;
    /**
     * The group localized name to which this input belongs and can be shown as a header for the container that will include all the inputs in the group.
     */
    groupName?: string;
    /**
     * If true, the value information for this input is dynamic and should be fetched when the value of dependency inputs change.
     */
    hasDynamicValueInformation?: boolean;
    /**
     * Identifier for the subscription input
     */
    id?: string;
    /**
     * Mode in which the value of this input should be entered
     */
    inputMode?: InputDescriptor.inputMode;
    /**
     * Gets whether this input is confidential, such as for a password or application key
     */
    isConfidential?: boolean;
    /**
     * Localized name which can be shown as a label for the subscription input
     */
    name?: string;
    /**
     * Custom properties for the input which can be used by the service provider
     */
    properties?: Record<string, any>;
    /**
     * Underlying data type for the input value. When this value is specified, InputMode, Validation and Values are optional.
     */
    type?: string;
    /**
     * Gets whether this input is included in the default generated action description.
     */
    useInDefaultDescription?: boolean;
    /**
     * Information to use to validate this input's value
     */
    validation?: InputValidation;
    /**
     * A hint for input value. It can be used in the UI as the input placeholder.
     */
    valueHint?: string;
    /**
     * Information about possible values for this input
     */
    values?: InputValues;
};

export namespace InputDescriptor {

    /**
     * Mode in which the value of this input should be entered
     */
    export enum inputMode {
        NONE = 'none',
        TEXT_BOX = 'textBox',
        PASSWORD_BOX = 'passwordBox',
        COMBO = 'combo',
        RADIO_BUTTONS = 'radioButtons',
        CHECK_BOX = 'checkBox',
        TEXT_AREA = 'textArea',
    }


}

