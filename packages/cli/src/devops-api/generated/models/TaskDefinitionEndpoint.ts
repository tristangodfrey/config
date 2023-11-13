/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TaskDefinitionEndpoint = {
    /**
     * An ID that identifies a service connection to be used for authenticating endpoint requests.
     */
    connectionId?: string;
    /**
     * An Json based keyselector to filter response returned by fetching the endpoint <c>Url</c>.A Json based keyselector must be prefixed with "jsonpath:". KeySelector can be used to specify the filter to get the keys for the values specified with Selector. <example> The following keyselector defines an Json for extracting nodes named 'ServiceName'. <code> endpoint.KeySelector = "jsonpath://ServiceName"; </code></example>
     */
    keySelector?: string;
    /**
     * The scope as understood by Connected Services. Essentially, a project-id for now.
     */
    scope?: string;
    /**
     * An XPath/Json based selector to filter response returned by fetching the endpoint <c>Url</c>. An XPath based selector must be prefixed with the string "xpath:". A Json based selector must be prefixed with "jsonpath:". <example> The following selector defines an XPath for extracting nodes named 'ServiceName'. <code> endpoint.Selector = "xpath://ServiceName"; </code></example>
     */
    selector?: string;
    /**
     * TaskId that this endpoint belongs to.
     */
    taskId?: string;
    /**
     * URL to GET.
     */
    url?: string;
};

