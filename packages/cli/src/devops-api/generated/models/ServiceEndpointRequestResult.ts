/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JToken } from './JToken';

export type ServiceEndpointRequestResult = {
    errorMessage?: string;
    result?: JToken;
    statusCode?: ServiceEndpointRequestResult.statusCode;
};

export namespace ServiceEndpointRequestResult {

    export enum statusCode {
        CONTINUE = 'continue',
        SWITCHING_PROTOCOLS = 'switchingProtocols',
        OK = 'ok',
        CREATED = 'created',
        ACCEPTED = 'accepted',
        NON_AUTHORITATIVE_INFORMATION = 'nonAuthoritativeInformation',
        NO_CONTENT = 'noContent',
        RESET_CONTENT = 'resetContent',
        PARTIAL_CONTENT = 'partialContent',
        MULTIPLE_CHOICES = 'multipleChoices',
        AMBIGUOUS = 'ambiguous',
        MOVED_PERMANENTLY = 'movedPermanently',
        MOVED = 'moved',
        FOUND = 'found',
        REDIRECT = 'redirect',
        SEE_OTHER = 'seeOther',
        REDIRECT_METHOD = 'redirectMethod',
        NOT_MODIFIED = 'notModified',
        USE_PROXY = 'useProxy',
        UNUSED = 'unused',
        TEMPORARY_REDIRECT = 'temporaryRedirect',
        REDIRECT_KEEP_VERB = 'redirectKeepVerb',
        BAD_REQUEST = 'badRequest',
        UNAUTHORIZED = 'unauthorized',
        PAYMENT_REQUIRED = 'paymentRequired',
        FORBIDDEN = 'forbidden',
        NOT_FOUND = 'notFound',
        METHOD_NOT_ALLOWED = 'methodNotAllowed',
        NOT_ACCEPTABLE = 'notAcceptable',
        PROXY_AUTHENTICATION_REQUIRED = 'proxyAuthenticationRequired',
        REQUEST_TIMEOUT = 'requestTimeout',
        CONFLICT = 'conflict',
        GONE = 'gone',
        LENGTH_REQUIRED = 'lengthRequired',
        PRECONDITION_FAILED = 'preconditionFailed',
        REQUEST_ENTITY_TOO_LARGE = 'requestEntityTooLarge',
        REQUEST_URI_TOO_LONG = 'requestUriTooLong',
        UNSUPPORTED_MEDIA_TYPE = 'unsupportedMediaType',
        REQUESTED_RANGE_NOT_SATISFIABLE = 'requestedRangeNotSatisfiable',
        EXPECTATION_FAILED = 'expectationFailed',
        UPGRADE_REQUIRED = 'upgradeRequired',
        INTERNAL_SERVER_ERROR = 'internalServerError',
        NOT_IMPLEMENTED = 'notImplemented',
        BAD_GATEWAY = 'badGateway',
        SERVICE_UNAVAILABLE = 'serviceUnavailable',
        GATEWAY_TIMEOUT = 'gatewayTimeout',
        HTTP_VERSION_NOT_SUPPORTED = 'httpVersionNotSupported',
    }


}

