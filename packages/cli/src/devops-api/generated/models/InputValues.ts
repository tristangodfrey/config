/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InputValue } from './InputValue';
import type { InputValuesError } from './InputValuesError';

/**
 * Information about the possible/allowed values for a given subscription input
 */
export type InputValues = {
    /**
     * The default value to use for this input
     */
    defaultValue?: string;
    /**
     * Errors encountered while computing dynamic values.
     */
    error?: InputValuesError;
    /**
     * The id of the input
     */
    inputId?: string;
    /**
     * Should this input be disabled
     */
    isDisabled?: boolean;
    /**
     * Should the value be restricted to one of the values in the PossibleValues (True) or are the values in PossibleValues just a suggestion (False)
     */
    isLimitedToPossibleValues?: boolean;
    /**
     * Should this input be made read-only
     */
    isReadOnly?: boolean;
    /**
     * Possible values that this input can take
     */
    possibleValues?: Array<InputValue>;
};

