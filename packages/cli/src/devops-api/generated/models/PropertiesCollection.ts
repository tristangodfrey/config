/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The class represents a property bag as a collection of key-value pairs. Values of all primitive types (any type with a `TypeCode != TypeCode.Object`) except for `DBNull` are accepted. Values of type Byte[], Int32, Double, DateType and String preserve their type, other primitives are retuned as a String. Byte[] expected as base64 encoded string.
 */
export type PropertiesCollection = {
    /**
     * The count of properties in the collection.
     */
    count?: number;
    item?: any;
    /**
     * The set of keys in the collection.
     */
    keys?: Array<string>;
    /**
     * The set of values in the collection.
     */
    values?: Array<string>;
};

