import * as fs$1 from 'fs';
import * as os$1 from 'os';
import * as path$1 from 'path';
import * as url$2 from 'url';
import * as http$1 from 'http';
import * as https$1 from 'https';
import * as http2$1 from 'http2';
import * as events from 'events';
import * as busboy from '@fastify/busboy';
import * as zlib from 'zlib';
import * as jsonwebtoken from 'jsonwebtoken';
import * as nodeForge from 'node-forge';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

var app = {};

var utils = {};

var credentialInternal = {};

const require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(fs$1);

const require$$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(os$1);

const require$$2$2 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(path$1);

var error = {};

var deepCopy$1 = {};

/*! firebase-admin v12.6.0 */
/*!
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(deepCopy$1, "__esModule", { value: true });
deepCopy$1.deepExtend = deepCopy$1.deepCopy = void 0;
/**
 * Returns a deep copy of an object or array.
 *
 * @param value - The object or array to deep copy.
 * @returns A deep copy of the provided object or array.
 */
function deepCopy(value) {
    return deepExtend(undefined, value);
}
deepCopy$1.deepCopy = deepCopy;
/**
 * Copies properties from source to target (recursively allows extension of objects and arrays).
 * Scalar values in the target are over-written. If target is undefined, an object of the
 * appropriate type will be created (and returned).
 *
 * We recursively copy all child properties of plain objects in the source - so that namespace-like
 * objects are merged.
 *
 * Note that the target can be a function, in which case the properties in the source object are
 * copied onto it as static properties of the function.
 *
 * @param target - The value which is being extended.
 * @param source - The value whose properties are extending the target.
 * @returns The target value.
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date: {
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            const dateValue = source;
            return new Date(dateValue.getTime());
        }
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (const prop in source) {
        if (!Object.prototype.hasOwnProperty.call(source, prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}
deepCopy$1.deepExtend = deepExtend;

/*! firebase-admin v12.6.0 */
/*!
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(error, "__esModule", { value: true });
error.InstanceIdClientErrorCode = error.InstallationsClientErrorCode = error.MessagingClientErrorCode = error.AuthClientErrorCode = error.AppErrorCodes = error.FirebaseProjectManagementError = error.FirebaseMessagingError = error.FirebaseInstallationsError = error.FirebaseInstanceIdError = error.FirebaseFirestoreError = error.FirebaseDatabaseError = error.FirebaseAuthError = error.FirebaseAppError = error.PrefixedFirebaseError = error.FirebaseError = void 0;
const deep_copy_1$1 = deepCopy$1;
/**
 * Firebase error code structure. This extends Error.
 */
class FirebaseError extends Error {
    /**
     * @param errorInfo - The error information (code and message).
     * @constructor
     * @internal
     */
    constructor(errorInfo) {
        super(errorInfo.message);
        this.errorInfo = errorInfo;
        /* tslint:disable:max-line-length */
        // Set the prototype explicitly. See the following link for more details:
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        /* tslint:enable:max-line-length */
        this.__proto__ = FirebaseError.prototype;
    }
    /** @returns The error code. */
    get code() {
        return this.errorInfo?.code;
    }
    /** @returns The error message. */
    get message() {
        return this.errorInfo?.message;
    }
    /** @returns The object representation of the error. */
    toJSON() {
        return {
            code: this.code,
            message: this.message,
        };
    }
}
error.FirebaseError = FirebaseError;
/**
 * A FirebaseError with a prefix in front of the error code.
 */
class PrefixedFirebaseError extends FirebaseError {
    /**
     * @param codePrefix - The prefix to apply to the error code.
     * @param code - The error code.
     * @param message - The error message.
     * @constructor
     * @internal
     */
    constructor(codePrefix, code, message) {
        super({
            code: `${codePrefix}/${code}`,
            message,
        });
        this.codePrefix = codePrefix;
        /* tslint:disable:max-line-length */
        // Set the prototype explicitly. See the following link for more details:
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        /* tslint:enable:max-line-length */
        this.__proto__ = PrefixedFirebaseError.prototype;
    }
    /**
     * Allows the error type to be checked without needing to know implementation details
     * of the code prefixing.
     *
     * @param code - The non-prefixed error code to test against.
     * @returns True if the code matches, false otherwise.
     */
    hasCode(code) {
        return `${this.codePrefix}/${code}` === this.code;
    }
}
error.PrefixedFirebaseError = PrefixedFirebaseError;
/**
 * Firebase App error code structure. This extends PrefixedFirebaseError.
 */
class FirebaseAppError extends PrefixedFirebaseError {
    /**
     * @param code - The error code.
     * @param message - The error message.
     * @constructor
     * @internal
     */
    constructor(code, message) {
        super('app', code, message);
        /* tslint:disable:max-line-length */
        // Set the prototype explicitly. See the following link for more details:
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        /* tslint:enable:max-line-length */
        this.__proto__ = FirebaseAppError.prototype;
    }
}
error.FirebaseAppError = FirebaseAppError;
/**
 * Firebase Auth error code structure. This extends PrefixedFirebaseError.
 */
class FirebaseAuthError extends PrefixedFirebaseError {
    /**
     * Creates the developer-facing error corresponding to the backend error code.
     *
     * @param serverErrorCode - The server error code.
     * @param [message] The error message. The default message is used
     *     if not provided.
     * @param [rawServerResponse] The error's raw server response.
     * @returns The corresponding developer-facing error.
     * @internal
     */
    static fromServerError(serverErrorCode, message, rawServerResponse) {
        // serverErrorCode could contain additional details:
        // ERROR_CODE : Detailed message which can also contain colons
        const colonSeparator = (serverErrorCode || '').indexOf(':');
        let customMessage = null;
        if (colonSeparator !== -1) {
            customMessage = serverErrorCode.substring(colonSeparator + 1).trim();
            serverErrorCode = serverErrorCode.substring(0, colonSeparator).trim();
        }
        // If not found, default to internal error.
        const clientCodeKey = AUTH_SERVER_TO_CLIENT_CODE[serverErrorCode] || 'INTERNAL_ERROR';
        const error = (0, deep_copy_1$1.deepCopy)(AuthClientErrorCode[clientCodeKey]);
        // Server detailed message should have highest priority.
        error.message = customMessage || message || error.message;
        if (clientCodeKey === 'INTERNAL_ERROR' && typeof rawServerResponse !== 'undefined') {
            try {
                error.message += ` Raw server response: "${JSON.stringify(rawServerResponse)}"`;
            }
            catch (e) {
                // Ignore JSON parsing error.
            }
        }
        return new FirebaseAuthError(error);
    }
    /**
     * @param info - The error code info.
     * @param message - The error message. This will override the default message if provided.
     * @constructor
     * @internal
     */
    constructor(info, message) {
        // Override default message if custom message provided.
        super('auth', info.code, message || info.message);
        /* tslint:disable:max-line-length */
        // Set the prototype explicitly. See the following link for more details:
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        /* tslint:enable:max-line-length */
        this.__proto__ = FirebaseAuthError.prototype;
    }
}
error.FirebaseAuthError = FirebaseAuthError;
/**
 * Firebase Database error code structure. This extends FirebaseError.
 */
class FirebaseDatabaseError extends FirebaseError {
    /**
     * @param info - The error code info.
     * @param message - The error message. This will override the default
     *     message if provided.
     * @constructor
     * @internal
     */
    constructor(info, message) {
        // Override default message if custom message provided.
        super({ code: 'database/' + info.code, message: message || info.message });
    }
}
error.FirebaseDatabaseError = FirebaseDatabaseError;
/**
 * Firebase Firestore error code structure. This extends FirebaseError.
 */
class FirebaseFirestoreError extends FirebaseError {
    /**
     * @param info - The error code info.
     * @param message - The error message. This will override the default
     *     message if provided.
     * @constructor
     * @internal
     */
    constructor(info, message) {
        // Override default message if custom message provided.
        super({ code: 'firestore/' + info.code, message: message || info.message });
    }
}
error.FirebaseFirestoreError = FirebaseFirestoreError;
/**
 * Firebase instance ID error code structure. This extends FirebaseError.
 */
class FirebaseInstanceIdError extends FirebaseError {
    /**
     *
     * @param info - The error code info.
     * @param message - The error message. This will override the default
     *     message if provided.
     * @constructor
     * @internal
     */
    constructor(info, message) {
        // Override default message if custom message provided.
        super({ code: 'instance-id/' + info.code, message: message || info.message });
        this.__proto__ = FirebaseInstanceIdError.prototype;
    }
}
error.FirebaseInstanceIdError = FirebaseInstanceIdError;
/**
 * Firebase Installations service error code structure. This extends `FirebaseError`.
 */
class FirebaseInstallationsError extends FirebaseError {
    /**
     *
     * @param info - The error code info.
     * @param message - The error message. This will override the default
     *     message if provided.
     * @constructor
     * @internal
     */
    constructor(info, message) {
        // Override default message if custom message provided.
        super({ code: 'installations/' + info.code, message: message || info.message });
        this.__proto__ = FirebaseInstallationsError.prototype;
    }
}
error.FirebaseInstallationsError = FirebaseInstallationsError;
/**
 * Firebase Messaging error code structure. This extends PrefixedFirebaseError.
 */
class FirebaseMessagingError extends PrefixedFirebaseError {
    /**
     * Creates the developer-facing error corresponding to the backend error code.
     *
     * @param serverErrorCode - The server error code.
     * @param [message] The error message. The default message is used
     *     if not provided.
     * @param [rawServerResponse] The error's raw server response.
     * @returns The corresponding developer-facing error.
     * @internal
     */
    static fromServerError(serverErrorCode, message, rawServerResponse) {
        // If not found, default to unknown error.
        let clientCodeKey = 'UNKNOWN_ERROR';
        if (serverErrorCode && serverErrorCode in MESSAGING_SERVER_TO_CLIENT_CODE) {
            clientCodeKey = MESSAGING_SERVER_TO_CLIENT_CODE[serverErrorCode];
        }
        const error = (0, deep_copy_1$1.deepCopy)(MessagingClientErrorCode[clientCodeKey]);
        error.message = message || error.message;
        if (clientCodeKey === 'UNKNOWN_ERROR' && typeof rawServerResponse !== 'undefined') {
            try {
                error.message += ` Raw server response: "${JSON.stringify(rawServerResponse)}"`;
            }
            catch (e) {
                // Ignore JSON parsing error.
            }
        }
        return new FirebaseMessagingError(error);
    }
    /**
     * @internal
     */
    static fromTopicManagementServerError(serverErrorCode, message, rawServerResponse) {
        // If not found, default to unknown error.
        const clientCodeKey = TOPIC_MGT_SERVER_TO_CLIENT_CODE[serverErrorCode] || 'UNKNOWN_ERROR';
        const error = (0, deep_copy_1$1.deepCopy)(MessagingClientErrorCode[clientCodeKey]);
        error.message = message || error.message;
        if (clientCodeKey === 'UNKNOWN_ERROR' && typeof rawServerResponse !== 'undefined') {
            try {
                error.message += ` Raw server response: "${JSON.stringify(rawServerResponse)}"`;
            }
            catch (e) {
                // Ignore JSON parsing error.
            }
        }
        return new FirebaseMessagingError(error);
    }
    /**
     *
     * @param info - The error code info.
     * @param message - The error message. This will override the default message if provided.
     * @constructor
     * @internal
     */
    constructor(info, message) {
        // Override default message if custom message provided.
        super('messaging', info.code, message || info.message);
        /* tslint:disable:max-line-length */
        // Set the prototype explicitly. See the following link for more details:
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        /* tslint:enable:max-line-length */
        this.__proto__ = FirebaseMessagingError.prototype;
    }
}
error.FirebaseMessagingError = FirebaseMessagingError;
/**
 * Firebase project management error code structure. This extends PrefixedFirebaseError.
 */
class FirebaseProjectManagementError extends PrefixedFirebaseError {
    /**
     * @param code - The error code.
     * @param message - The error message.
     * @constructor
     * @internal
     */
    constructor(code, message) {
        super('project-management', code, message);
        /* tslint:disable:max-line-length */
        // Set the prototype explicitly. See the following link for more details:
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        /* tslint:enable:max-line-length */
        this.__proto__ = FirebaseProjectManagementError.prototype;
    }
}
error.FirebaseProjectManagementError = FirebaseProjectManagementError;
/**
 * App client error codes and their default messages.
 */
class AppErrorCodes {
}
error.AppErrorCodes = AppErrorCodes;
AppErrorCodes.APP_DELETED = 'app-deleted';
AppErrorCodes.DUPLICATE_APP = 'duplicate-app';
AppErrorCodes.INVALID_ARGUMENT = 'invalid-argument';
AppErrorCodes.INTERNAL_ERROR = 'internal-error';
AppErrorCodes.INVALID_APP_NAME = 'invalid-app-name';
AppErrorCodes.INVALID_APP_OPTIONS = 'invalid-app-options';
AppErrorCodes.INVALID_CREDENTIAL = 'invalid-credential';
AppErrorCodes.NETWORK_ERROR = 'network-error';
AppErrorCodes.NETWORK_TIMEOUT = 'network-timeout';
AppErrorCodes.NO_APP = 'no-app';
AppErrorCodes.UNABLE_TO_PARSE_RESPONSE = 'unable-to-parse-response';
/**
 * Auth client error codes and their default messages.
 */
class AuthClientErrorCode {
}
error.AuthClientErrorCode = AuthClientErrorCode;
AuthClientErrorCode.AUTH_BLOCKING_TOKEN_EXPIRED = {
    code: 'auth-blocking-token-expired',
    message: 'The provided Firebase Auth Blocking token is expired.',
};
AuthClientErrorCode.BILLING_NOT_ENABLED = {
    code: 'billing-not-enabled',
    message: 'Feature requires billing to be enabled.',
};
AuthClientErrorCode.CLAIMS_TOO_LARGE = {
    code: 'claims-too-large',
    message: 'Developer claims maximum payload size exceeded.',
};
AuthClientErrorCode.CONFIGURATION_EXISTS = {
    code: 'configuration-exists',
    message: 'A configuration already exists with the provided identifier.',
};
AuthClientErrorCode.CONFIGURATION_NOT_FOUND = {
    code: 'configuration-not-found',
    message: 'There is no configuration corresponding to the provided identifier.',
};
AuthClientErrorCode.ID_TOKEN_EXPIRED = {
    code: 'id-token-expired',
    message: 'The provided Firebase ID token is expired.',
};
AuthClientErrorCode.INVALID_ARGUMENT = {
    code: 'argument-error',
    message: 'Invalid argument provided.',
};
AuthClientErrorCode.INVALID_CONFIG = {
    code: 'invalid-config',
    message: 'The provided configuration is invalid.',
};
AuthClientErrorCode.EMAIL_ALREADY_EXISTS = {
    code: 'email-already-exists',
    message: 'The email address is already in use by another account.',
};
AuthClientErrorCode.EMAIL_NOT_FOUND = {
    code: 'email-not-found',
    message: 'There is no user record corresponding to the provided email.',
};
AuthClientErrorCode.FORBIDDEN_CLAIM = {
    code: 'reserved-claim',
    message: 'The specified developer claim is reserved and cannot be specified.',
};
AuthClientErrorCode.INVALID_ID_TOKEN = {
    code: 'invalid-id-token',
    message: 'The provided ID token is not a valid Firebase ID token.',
};
AuthClientErrorCode.ID_TOKEN_REVOKED = {
    code: 'id-token-revoked',
    message: 'The Firebase ID token has been revoked.',
};
AuthClientErrorCode.INTERNAL_ERROR = {
    code: 'internal-error',
    message: 'An internal error has occurred.',
};
AuthClientErrorCode.INVALID_CLAIMS = {
    code: 'invalid-claims',
    message: 'The provided custom claim attributes are invalid.',
};
AuthClientErrorCode.INVALID_CONTINUE_URI = {
    code: 'invalid-continue-uri',
    message: 'The continue URL must be a valid URL string.',
};
AuthClientErrorCode.INVALID_CREATION_TIME = {
    code: 'invalid-creation-time',
    message: 'The creation time must be a valid UTC date string.',
};
AuthClientErrorCode.INVALID_CREDENTIAL = {
    code: 'invalid-credential',
    message: 'Invalid credential object provided.',
};
AuthClientErrorCode.INVALID_DISABLED_FIELD = {
    code: 'invalid-disabled-field',
    message: 'The disabled field must be a boolean.',
};
AuthClientErrorCode.INVALID_DISPLAY_NAME = {
    code: 'invalid-display-name',
    message: 'The displayName field must be a valid string.',
};
AuthClientErrorCode.INVALID_DYNAMIC_LINK_DOMAIN = {
    code: 'invalid-dynamic-link-domain',
    message: 'The provided dynamic link domain is not configured or authorized ' +
        'for the current project.',
};
AuthClientErrorCode.INVALID_EMAIL_VERIFIED = {
    code: 'invalid-email-verified',
    message: 'The emailVerified field must be a boolean.',
};
AuthClientErrorCode.INVALID_EMAIL = {
    code: 'invalid-email',
    message: 'The email address is improperly formatted.',
};
AuthClientErrorCode.INVALID_NEW_EMAIL = {
    code: 'invalid-new-email',
    message: 'The new email address is improperly formatted.',
};
AuthClientErrorCode.INVALID_ENROLLED_FACTORS = {
    code: 'invalid-enrolled-factors',
    message: 'The enrolled factors must be a valid array of MultiFactorInfo objects.',
};
AuthClientErrorCode.INVALID_ENROLLMENT_TIME = {
    code: 'invalid-enrollment-time',
    message: 'The second factor enrollment time must be a valid UTC date string.',
};
AuthClientErrorCode.INVALID_HASH_ALGORITHM = {
    code: 'invalid-hash-algorithm',
    message: 'The hash algorithm must match one of the strings in the list of ' +
        'supported algorithms.',
};
AuthClientErrorCode.INVALID_HASH_BLOCK_SIZE = {
    code: 'invalid-hash-block-size',
    message: 'The hash block size must be a valid number.',
};
AuthClientErrorCode.INVALID_HASH_DERIVED_KEY_LENGTH = {
    code: 'invalid-hash-derived-key-length',
    message: 'The hash derived key length must be a valid number.',
};
AuthClientErrorCode.INVALID_HASH_KEY = {
    code: 'invalid-hash-key',
    message: 'The hash key must a valid byte buffer.',
};
AuthClientErrorCode.INVALID_HASH_MEMORY_COST = {
    code: 'invalid-hash-memory-cost',
    message: 'The hash memory cost must be a valid number.',
};
AuthClientErrorCode.INVALID_HASH_PARALLELIZATION = {
    code: 'invalid-hash-parallelization',
    message: 'The hash parallelization must be a valid number.',
};
AuthClientErrorCode.INVALID_HASH_ROUNDS = {
    code: 'invalid-hash-rounds',
    message: 'The hash rounds must be a valid number.',
};
AuthClientErrorCode.INVALID_HASH_SALT_SEPARATOR = {
    code: 'invalid-hash-salt-separator',
    message: 'The hashing algorithm salt separator field must be a valid byte buffer.',
};
AuthClientErrorCode.INVALID_LAST_SIGN_IN_TIME = {
    code: 'invalid-last-sign-in-time',
    message: 'The last sign-in time must be a valid UTC date string.',
};
AuthClientErrorCode.INVALID_NAME = {
    code: 'invalid-name',
    message: 'The resource name provided is invalid.',
};
AuthClientErrorCode.INVALID_OAUTH_CLIENT_ID = {
    code: 'invalid-oauth-client-id',
    message: 'The provided OAuth client ID is invalid.',
};
AuthClientErrorCode.INVALID_PAGE_TOKEN = {
    code: 'invalid-page-token',
    message: 'The page token must be a valid non-empty string.',
};
AuthClientErrorCode.INVALID_PASSWORD = {
    code: 'invalid-password',
    message: 'The password must be a string with at least 6 characters.',
};
AuthClientErrorCode.INVALID_PASSWORD_HASH = {
    code: 'invalid-password-hash',
    message: 'The password hash must be a valid byte buffer.',
};
AuthClientErrorCode.INVALID_PASSWORD_SALT = {
    code: 'invalid-password-salt',
    message: 'The password salt must be a valid byte buffer.',
};
AuthClientErrorCode.INVALID_PHONE_NUMBER = {
    code: 'invalid-phone-number',
    message: 'The phone number must be a non-empty E.164 standard compliant identifier ' +
        'string.',
};
AuthClientErrorCode.INVALID_PHOTO_URL = {
    code: 'invalid-photo-url',
    message: 'The photoURL field must be a valid URL.',
};
AuthClientErrorCode.INVALID_PROJECT_ID = {
    code: 'invalid-project-id',
    message: 'Invalid parent project. Either parent project doesn\'t exist or didn\'t enable multi-tenancy.',
};
AuthClientErrorCode.INVALID_PROVIDER_DATA = {
    code: 'invalid-provider-data',
    message: 'The providerData must be a valid array of UserInfo objects.',
};
AuthClientErrorCode.INVALID_PROVIDER_ID = {
    code: 'invalid-provider-id',
    message: 'The providerId must be a valid supported provider identifier string.',
};
AuthClientErrorCode.INVALID_PROVIDER_UID = {
    code: 'invalid-provider-uid',
    message: 'The providerUid must be a valid provider uid string.',
};
AuthClientErrorCode.INVALID_OAUTH_RESPONSETYPE = {
    code: 'invalid-oauth-responsetype',
    message: 'Only exactly one OAuth responseType should be set to true.',
};
AuthClientErrorCode.INVALID_SESSION_COOKIE_DURATION = {
    code: 'invalid-session-cookie-duration',
    message: 'The session cookie duration must be a valid number in milliseconds ' +
        'between 5 minutes and 2 weeks.',
};
AuthClientErrorCode.INVALID_TENANT_ID = {
    code: 'invalid-tenant-id',
    message: 'The tenant ID must be a valid non-empty string.',
};
AuthClientErrorCode.INVALID_TENANT_TYPE = {
    code: 'invalid-tenant-type',
    message: 'Tenant type must be either "full_service" or "lightweight".',
};
AuthClientErrorCode.INVALID_TESTING_PHONE_NUMBER = {
    code: 'invalid-testing-phone-number',
    message: 'Invalid testing phone number or invalid test code provided.',
};
AuthClientErrorCode.INVALID_UID = {
    code: 'invalid-uid',
    message: 'The uid must be a non-empty string with at most 128 characters.',
};
AuthClientErrorCode.INVALID_USER_IMPORT = {
    code: 'invalid-user-import',
    message: 'The user record to import is invalid.',
};
AuthClientErrorCode.INVALID_TOKENS_VALID_AFTER_TIME = {
    code: 'invalid-tokens-valid-after-time',
    message: 'The tokensValidAfterTime must be a valid UTC number in seconds.',
};
AuthClientErrorCode.MISMATCHING_TENANT_ID = {
    code: 'mismatching-tenant-id',
    message: 'User tenant ID does not match with the current TenantAwareAuth tenant ID.',
};
AuthClientErrorCode.MISSING_ANDROID_PACKAGE_NAME = {
    code: 'missing-android-pkg-name',
    message: 'An Android Package Name must be provided if the Android App is ' +
        'required to be installed.',
};
AuthClientErrorCode.MISSING_CONFIG = {
    code: 'missing-config',
    message: 'The provided configuration is missing required attributes.',
};
AuthClientErrorCode.MISSING_CONTINUE_URI = {
    code: 'missing-continue-uri',
    message: 'A valid continue URL must be provided in the request.',
};
AuthClientErrorCode.MISSING_DISPLAY_NAME = {
    code: 'missing-display-name',
    message: 'The resource being created or edited is missing a valid display name.',
};
AuthClientErrorCode.MISSING_EMAIL = {
    code: 'missing-email',
    message: 'The email is required for the specified action. For example, a multi-factor user ' +
        'requires a verified email.',
};
AuthClientErrorCode.MISSING_IOS_BUNDLE_ID = {
    code: 'missing-ios-bundle-id',
    message: 'The request is missing an iOS Bundle ID.',
};
AuthClientErrorCode.MISSING_ISSUER = {
    code: 'missing-issuer',
    message: 'The OAuth/OIDC configuration issuer must not be empty.',
};
AuthClientErrorCode.MISSING_HASH_ALGORITHM = {
    code: 'missing-hash-algorithm',
    message: 'Importing users with password hashes requires that the hashing ' +
        'algorithm and its parameters be provided.',
};
AuthClientErrorCode.MISSING_OAUTH_CLIENT_ID = {
    code: 'missing-oauth-client-id',
    message: 'The OAuth/OIDC configuration client ID must not be empty.',
};
AuthClientErrorCode.MISSING_OAUTH_CLIENT_SECRET = {
    code: 'missing-oauth-client-secret',
    message: 'The OAuth configuration client secret is required to enable OIDC code flow.',
};
AuthClientErrorCode.MISSING_PROVIDER_ID = {
    code: 'missing-provider-id',
    message: 'A valid provider ID must be provided in the request.',
};
AuthClientErrorCode.MISSING_SAML_RELYING_PARTY_CONFIG = {
    code: 'missing-saml-relying-party-config',
    message: 'The SAML configuration provided is missing a relying party configuration.',
};
AuthClientErrorCode.MAXIMUM_TEST_PHONE_NUMBER_EXCEEDED = {
    code: 'test-phone-number-limit-exceeded',
    message: 'The maximum allowed number of test phone number / code pairs has been exceeded.',
};
AuthClientErrorCode.MAXIMUM_USER_COUNT_EXCEEDED = {
    code: 'maximum-user-count-exceeded',
    message: 'The maximum allowed number of users to import has been exceeded.',
};
AuthClientErrorCode.MISSING_UID = {
    code: 'missing-uid',
    message: 'A uid identifier is required for the current operation.',
};
AuthClientErrorCode.OPERATION_NOT_ALLOWED = {
    code: 'operation-not-allowed',
    message: 'The given sign-in provider is disabled for this Firebase project. ' +
        'Enable it in the Firebase console, under the sign-in method tab of the ' +
        'Auth section.',
};
AuthClientErrorCode.PHONE_NUMBER_ALREADY_EXISTS = {
    code: 'phone-number-already-exists',
    message: 'The user with the provided phone number already exists.',
};
AuthClientErrorCode.PROJECT_NOT_FOUND = {
    code: 'project-not-found',
    message: 'No Firebase project was found for the provided credential.',
};
AuthClientErrorCode.INSUFFICIENT_PERMISSION = {
    code: 'insufficient-permission',
    message: 'Credential implementation provided to initializeApp() via the "credential" property ' +
        'has insufficient permission to access the requested resource. See ' +
        'https://firebase.google.com/docs/admin/setup for details on how to authenticate this SDK ' +
        'with appropriate permissions.',
};
AuthClientErrorCode.QUOTA_EXCEEDED = {
    code: 'quota-exceeded',
    message: 'The project quota for the specified operation has been exceeded.',
};
AuthClientErrorCode.SECOND_FACTOR_LIMIT_EXCEEDED = {
    code: 'second-factor-limit-exceeded',
    message: 'The maximum number of allowed second factors on a user has been exceeded.',
};
AuthClientErrorCode.SECOND_FACTOR_UID_ALREADY_EXISTS = {
    code: 'second-factor-uid-already-exists',
    message: 'The specified second factor "uid" already exists.',
};
AuthClientErrorCode.SESSION_COOKIE_EXPIRED = {
    code: 'session-cookie-expired',
    message: 'The Firebase session cookie is expired.',
};
AuthClientErrorCode.SESSION_COOKIE_REVOKED = {
    code: 'session-cookie-revoked',
    message: 'The Firebase session cookie has been revoked.',
};
AuthClientErrorCode.TENANT_NOT_FOUND = {
    code: 'tenant-not-found',
    message: 'There is no tenant corresponding to the provided identifier.',
};
AuthClientErrorCode.UID_ALREADY_EXISTS = {
    code: 'uid-already-exists',
    message: 'The user with the provided uid already exists.',
};
AuthClientErrorCode.UNAUTHORIZED_DOMAIN = {
    code: 'unauthorized-continue-uri',
    message: 'The domain of the continue URL is not whitelisted. Whitelist the domain in the ' +
        'Firebase console.',
};
AuthClientErrorCode.UNSUPPORTED_FIRST_FACTOR = {
    code: 'unsupported-first-factor',
    message: 'A multi-factor user requires a supported first factor.',
};
AuthClientErrorCode.UNSUPPORTED_SECOND_FACTOR = {
    code: 'unsupported-second-factor',
    message: 'The request specified an unsupported type of second factor.',
};
AuthClientErrorCode.UNSUPPORTED_TENANT_OPERATION = {
    code: 'unsupported-tenant-operation',
    message: 'This operation is not supported in a multi-tenant context.',
};
AuthClientErrorCode.UNVERIFIED_EMAIL = {
    code: 'unverified-email',
    message: 'A verified email is required for the specified action. For example, a multi-factor user ' +
        'requires a verified email.',
};
AuthClientErrorCode.USER_NOT_FOUND = {
    code: 'user-not-found',
    message: 'There is no user record corresponding to the provided identifier.',
};
AuthClientErrorCode.NOT_FOUND = {
    code: 'not-found',
    message: 'The requested resource was not found.',
};
AuthClientErrorCode.USER_DISABLED = {
    code: 'user-disabled',
    message: 'The user record is disabled.',
};
AuthClientErrorCode.USER_NOT_DISABLED = {
    code: 'user-not-disabled',
    message: 'The user must be disabled in order to bulk delete it (or you must pass force=true).',
};
AuthClientErrorCode.INVALID_RECAPTCHA_ACTION = {
    code: 'invalid-recaptcha-action',
    message: 'reCAPTCHA action must be "BLOCK".'
};
AuthClientErrorCode.INVALID_RECAPTCHA_ENFORCEMENT_STATE = {
    code: 'invalid-recaptcha-enforcement-state',
    message: 'reCAPTCHA enforcement state must be either "OFF", "AUDIT" or "ENFORCE".'
};
AuthClientErrorCode.RECAPTCHA_NOT_ENABLED = {
    code: 'racaptcha-not-enabled',
    message: 'reCAPTCHA enterprise is not enabled.'
};
/**
 * Messaging client error codes and their default messages.
 */
class MessagingClientErrorCode {
}
error.MessagingClientErrorCode = MessagingClientErrorCode;
MessagingClientErrorCode.INVALID_ARGUMENT = {
    code: 'invalid-argument',
    message: 'Invalid argument provided.',
};
MessagingClientErrorCode.INVALID_RECIPIENT = {
    code: 'invalid-recipient',
    message: 'Invalid message recipient provided.',
};
MessagingClientErrorCode.INVALID_PAYLOAD = {
    code: 'invalid-payload',
    message: 'Invalid message payload provided.',
};
MessagingClientErrorCode.INVALID_DATA_PAYLOAD_KEY = {
    code: 'invalid-data-payload-key',
    message: 'The data message payload contains an invalid key. See the reference documentation ' +
        'for the DataMessagePayload type for restricted keys.',
};
MessagingClientErrorCode.PAYLOAD_SIZE_LIMIT_EXCEEDED = {
    code: 'payload-size-limit-exceeded',
    message: 'The provided message payload exceeds the FCM size limits. See the error documentation ' +
        'for more details.',
};
MessagingClientErrorCode.INVALID_OPTIONS = {
    code: 'invalid-options',
    message: 'Invalid message options provided.',
};
MessagingClientErrorCode.INVALID_REGISTRATION_TOKEN = {
    code: 'invalid-registration-token',
    message: 'Invalid registration token provided. Make sure it matches the registration token ' +
        'the client app receives from registering with FCM.',
};
MessagingClientErrorCode.REGISTRATION_TOKEN_NOT_REGISTERED = {
    code: 'registration-token-not-registered',
    message: 'The provided registration token is not registered. A previously valid registration ' +
        'token can be unregistered for a variety of reasons. See the error documentation for more ' +
        'details. Remove this registration token and stop using it to send messages.',
};
MessagingClientErrorCode.MISMATCHED_CREDENTIAL = {
    code: 'mismatched-credential',
    message: 'The credential used to authenticate this SDK does not have permission to send ' +
        'messages to the device corresponding to the provided registration token. Make sure the ' +
        'credential and registration token both belong to the same Firebase project.',
};
MessagingClientErrorCode.INVALID_PACKAGE_NAME = {
    code: 'invalid-package-name',
    message: 'The message was addressed to a registration token whose package name does not match ' +
        'the provided "restrictedPackageName" option.',
};
MessagingClientErrorCode.DEVICE_MESSAGE_RATE_EXCEEDED = {
    code: 'device-message-rate-exceeded',
    message: 'The rate of messages to a particular device is too high. Reduce the number of ' +
        'messages sent to this device and do not immediately retry sending to this device.',
};
MessagingClientErrorCode.TOPICS_MESSAGE_RATE_EXCEEDED = {
    code: 'topics-message-rate-exceeded',
    message: 'The rate of messages to subscribers to a particular topic is too high. Reduce the ' +
        'number of messages sent for this topic, and do not immediately retry sending to this topic.',
};
MessagingClientErrorCode.MESSAGE_RATE_EXCEEDED = {
    code: 'message-rate-exceeded',
    message: 'Sending limit exceeded for the message target.',
};
MessagingClientErrorCode.THIRD_PARTY_AUTH_ERROR = {
    code: 'third-party-auth-error',
    message: 'A message targeted to an iOS device could not be sent because the required APNs ' +
        'SSL certificate was not uploaded or has expired. Check the validity of your development ' +
        'and production certificates.',
};
MessagingClientErrorCode.TOO_MANY_TOPICS = {
    code: 'too-many-topics',
    message: 'The maximum number of topics the provided registration token can be subscribed to ' +
        'has been exceeded.',
};
MessagingClientErrorCode.AUTHENTICATION_ERROR = {
    code: 'authentication-error',
    message: 'An error occurred when trying to authenticate to the FCM servers. Make sure the ' +
        'credential used to authenticate this SDK has the proper permissions. See ' +
        'https://firebase.google.com/docs/admin/setup for setup instructions.',
};
MessagingClientErrorCode.SERVER_UNAVAILABLE = {
    code: 'server-unavailable',
    message: 'The FCM server could not process the request in time. See the error documentation ' +
        'for more details.',
};
MessagingClientErrorCode.INTERNAL_ERROR = {
    code: 'internal-error',
    message: 'An internal error has occurred. Please retry the request.',
};
MessagingClientErrorCode.UNKNOWN_ERROR = {
    code: 'unknown-error',
    message: 'An unknown server error was returned.',
};
class InstallationsClientErrorCode {
}
error.InstallationsClientErrorCode = InstallationsClientErrorCode;
InstallationsClientErrorCode.INVALID_ARGUMENT = {
    code: 'invalid-argument',
    message: 'Invalid argument provided.',
};
InstallationsClientErrorCode.INVALID_PROJECT_ID = {
    code: 'invalid-project-id',
    message: 'Invalid project ID provided.',
};
InstallationsClientErrorCode.INVALID_INSTALLATION_ID = {
    code: 'invalid-installation-id',
    message: 'Invalid installation ID provided.',
};
InstallationsClientErrorCode.API_ERROR = {
    code: 'api-error',
    message: 'Installation ID API call failed.',
};
class InstanceIdClientErrorCode extends InstallationsClientErrorCode {
}
error.InstanceIdClientErrorCode = InstanceIdClientErrorCode;
InstanceIdClientErrorCode.INVALID_INSTANCE_ID = {
    code: 'invalid-instance-id',
    message: 'Invalid instance ID provided.',
};
/** @const {ServerToClientCode} Auth server to client enum error codes. */
const AUTH_SERVER_TO_CLIENT_CODE = {
    // Feature being configured or used requires a billing account.
    BILLING_NOT_ENABLED: 'BILLING_NOT_ENABLED',
    // Claims payload is too large.
    CLAIMS_TOO_LARGE: 'CLAIMS_TOO_LARGE',
    // Configuration being added already exists.
    CONFIGURATION_EXISTS: 'CONFIGURATION_EXISTS',
    // Configuration not found.
    CONFIGURATION_NOT_FOUND: 'CONFIGURATION_NOT_FOUND',
    // Provided credential has insufficient permissions.
    INSUFFICIENT_PERMISSION: 'INSUFFICIENT_PERMISSION',
    // Provided configuration has invalid fields.
    INVALID_CONFIG: 'INVALID_CONFIG',
    // Provided configuration identifier is invalid.
    INVALID_CONFIG_ID: 'INVALID_PROVIDER_ID',
    // ActionCodeSettings missing continue URL.
    INVALID_CONTINUE_URI: 'INVALID_CONTINUE_URI',
    // Dynamic link domain in provided ActionCodeSettings is not authorized.
    INVALID_DYNAMIC_LINK_DOMAIN: 'INVALID_DYNAMIC_LINK_DOMAIN',
    // uploadAccount provides an email that already exists.
    DUPLICATE_EMAIL: 'EMAIL_ALREADY_EXISTS',
    // uploadAccount provides a localId that already exists.
    DUPLICATE_LOCAL_ID: 'UID_ALREADY_EXISTS',
    // Request specified a multi-factor enrollment ID that already exists.
    DUPLICATE_MFA_ENROLLMENT_ID: 'SECOND_FACTOR_UID_ALREADY_EXISTS',
    // setAccountInfo email already exists.
    EMAIL_EXISTS: 'EMAIL_ALREADY_EXISTS',
    // /accounts:sendOobCode for password reset when user is not found.
    EMAIL_NOT_FOUND: 'EMAIL_NOT_FOUND',
    // Reserved claim name.
    FORBIDDEN_CLAIM: 'FORBIDDEN_CLAIM',
    // Invalid claims provided.
    INVALID_CLAIMS: 'INVALID_CLAIMS',
    // Invalid session cookie duration.
    INVALID_DURATION: 'INVALID_SESSION_COOKIE_DURATION',
    // Invalid email provided.
    INVALID_EMAIL: 'INVALID_EMAIL',
    // Invalid new email provided.
    INVALID_NEW_EMAIL: 'INVALID_NEW_EMAIL',
    // Invalid tenant display name. This can be thrown on CreateTenant and UpdateTenant.
    INVALID_DISPLAY_NAME: 'INVALID_DISPLAY_NAME',
    // Invalid ID token provided.
    INVALID_ID_TOKEN: 'INVALID_ID_TOKEN',
    // Invalid tenant/parent resource name.
    INVALID_NAME: 'INVALID_NAME',
    // OIDC configuration has an invalid OAuth client ID.
    INVALID_OAUTH_CLIENT_ID: 'INVALID_OAUTH_CLIENT_ID',
    // Invalid page token.
    INVALID_PAGE_SELECTION: 'INVALID_PAGE_TOKEN',
    // Invalid phone number.
    INVALID_PHONE_NUMBER: 'INVALID_PHONE_NUMBER',
    // Invalid agent project. Either agent project doesn't exist or didn't enable multi-tenancy.
    INVALID_PROJECT_ID: 'INVALID_PROJECT_ID',
    // Invalid provider ID.
    INVALID_PROVIDER_ID: 'INVALID_PROVIDER_ID',
    // Invalid service account.
    INVALID_SERVICE_ACCOUNT: 'INVALID_SERVICE_ACCOUNT',
    // Invalid testing phone number.
    INVALID_TESTING_PHONE_NUMBER: 'INVALID_TESTING_PHONE_NUMBER',
    // Invalid tenant type.
    INVALID_TENANT_TYPE: 'INVALID_TENANT_TYPE',
    // Missing Android package name.
    MISSING_ANDROID_PACKAGE_NAME: 'MISSING_ANDROID_PACKAGE_NAME',
    // Missing configuration.
    MISSING_CONFIG: 'MISSING_CONFIG',
    // Missing configuration identifier.
    MISSING_CONFIG_ID: 'MISSING_PROVIDER_ID',
    // Missing tenant display name: This can be thrown on CreateTenant and UpdateTenant.
    MISSING_DISPLAY_NAME: 'MISSING_DISPLAY_NAME',
    // Email is required for the specified action. For example a multi-factor user requires
    // a verified email.
    MISSING_EMAIL: 'MISSING_EMAIL',
    // Missing iOS bundle ID.
    MISSING_IOS_BUNDLE_ID: 'MISSING_IOS_BUNDLE_ID',
    // Missing OIDC issuer.
    MISSING_ISSUER: 'MISSING_ISSUER',
    // No localId provided (deleteAccount missing localId).
    MISSING_LOCAL_ID: 'MISSING_UID',
    // OIDC configuration is missing an OAuth client ID.
    MISSING_OAUTH_CLIENT_ID: 'MISSING_OAUTH_CLIENT_ID',
    // Missing provider ID.
    MISSING_PROVIDER_ID: 'MISSING_PROVIDER_ID',
    // Missing SAML RP config.
    MISSING_SAML_RELYING_PARTY_CONFIG: 'MISSING_SAML_RELYING_PARTY_CONFIG',
    // Empty user list in uploadAccount.
    MISSING_USER_ACCOUNT: 'MISSING_UID',
    // Password auth disabled in console.
    OPERATION_NOT_ALLOWED: 'OPERATION_NOT_ALLOWED',
    // Provided credential has insufficient permissions.
    PERMISSION_DENIED: 'INSUFFICIENT_PERMISSION',
    // Phone number already exists.
    PHONE_NUMBER_EXISTS: 'PHONE_NUMBER_ALREADY_EXISTS',
    // Project not found.
    PROJECT_NOT_FOUND: 'PROJECT_NOT_FOUND',
    // In multi-tenancy context: project creation quota exceeded.
    QUOTA_EXCEEDED: 'QUOTA_EXCEEDED',
    // Currently only 5 second factors can be set on the same user.
    SECOND_FACTOR_LIMIT_EXCEEDED: 'SECOND_FACTOR_LIMIT_EXCEEDED',
    // Tenant not found.
    TENANT_NOT_FOUND: 'TENANT_NOT_FOUND',
    // Tenant ID mismatch.
    TENANT_ID_MISMATCH: 'MISMATCHING_TENANT_ID',
    // Token expired error.
    TOKEN_EXPIRED: 'ID_TOKEN_EXPIRED',
    // Continue URL provided in ActionCodeSettings has a domain that is not whitelisted.
    UNAUTHORIZED_DOMAIN: 'UNAUTHORIZED_DOMAIN',
    // A multi-factor user requires a supported first factor.
    UNSUPPORTED_FIRST_FACTOR: 'UNSUPPORTED_FIRST_FACTOR',
    // The request specified an unsupported type of second factor.
    UNSUPPORTED_SECOND_FACTOR: 'UNSUPPORTED_SECOND_FACTOR',
    // Operation is not supported in a multi-tenant context.
    UNSUPPORTED_TENANT_OPERATION: 'UNSUPPORTED_TENANT_OPERATION',
    // A verified email is required for the specified action. For example a multi-factor user
    // requires a verified email.
    UNVERIFIED_EMAIL: 'UNVERIFIED_EMAIL',
    // User on which action is to be performed is not found.
    USER_NOT_FOUND: 'USER_NOT_FOUND',
    // User record is disabled.
    USER_DISABLED: 'USER_DISABLED',
    // Password provided is too weak.
    WEAK_PASSWORD: 'INVALID_PASSWORD',
    // Unrecognized reCAPTCHA action.
    INVALID_RECAPTCHA_ACTION: 'INVALID_RECAPTCHA_ACTION',
    // Unrecognized reCAPTCHA enforcement state.
    INVALID_RECAPTCHA_ENFORCEMENT_STATE: 'INVALID_RECAPTCHA_ENFORCEMENT_STATE',
    // reCAPTCHA is not enabled for account defender.
    RECAPTCHA_NOT_ENABLED: 'RECAPTCHA_NOT_ENABLED'
};
/** @const {ServerToClientCode} Messaging server to client enum error codes. */
const MESSAGING_SERVER_TO_CLIENT_CODE = {
    /* GENERIC ERRORS */
    // Generic invalid message parameter provided.
    InvalidParameters: 'INVALID_ARGUMENT',
    // Mismatched sender ID.
    MismatchSenderId: 'MISMATCHED_CREDENTIAL',
    // FCM server unavailable.
    Unavailable: 'SERVER_UNAVAILABLE',
    // FCM server internal error.
    InternalServerError: 'INTERNAL_ERROR',
    /* SEND ERRORS */
    // Invalid registration token format.
    InvalidRegistration: 'INVALID_REGISTRATION_TOKEN',
    // Registration token is not registered.
    NotRegistered: 'REGISTRATION_TOKEN_NOT_REGISTERED',
    // Registration token does not match restricted package name.
    InvalidPackageName: 'INVALID_PACKAGE_NAME',
    // Message payload size limit exceeded.
    MessageTooBig: 'PAYLOAD_SIZE_LIMIT_EXCEEDED',
    // Invalid key in the data message payload.
    InvalidDataKey: 'INVALID_DATA_PAYLOAD_KEY',
    // Invalid time to live option.
    InvalidTtl: 'INVALID_OPTIONS',
    // Device message rate exceeded.
    DeviceMessageRateExceeded: 'DEVICE_MESSAGE_RATE_EXCEEDED',
    // Topics message rate exceeded.
    TopicsMessageRateExceeded: 'TOPICS_MESSAGE_RATE_EXCEEDED',
    // Invalid APNs credentials.
    InvalidApnsCredential: 'THIRD_PARTY_AUTH_ERROR',
    /* FCM v1 canonical error codes */
    NOT_FOUND: 'REGISTRATION_TOKEN_NOT_REGISTERED',
    PERMISSION_DENIED: 'MISMATCHED_CREDENTIAL',
    RESOURCE_EXHAUSTED: 'MESSAGE_RATE_EXCEEDED',
    UNAUTHENTICATED: 'THIRD_PARTY_AUTH_ERROR',
    /* FCM v1 new error codes */
    APNS_AUTH_ERROR: 'THIRD_PARTY_AUTH_ERROR',
    INTERNAL: 'INTERNAL_ERROR',
    INVALID_ARGUMENT: 'INVALID_ARGUMENT',
    QUOTA_EXCEEDED: 'MESSAGE_RATE_EXCEEDED',
    SENDER_ID_MISMATCH: 'MISMATCHED_CREDENTIAL',
    THIRD_PARTY_AUTH_ERROR: 'THIRD_PARTY_AUTH_ERROR',
    UNAVAILABLE: 'SERVER_UNAVAILABLE',
    UNREGISTERED: 'REGISTRATION_TOKEN_NOT_REGISTERED',
    UNSPECIFIED_ERROR: 'UNKNOWN_ERROR',
};
/** @const {ServerToClientCode} Topic management (IID) server to client enum error codes. */
const TOPIC_MGT_SERVER_TO_CLIENT_CODE = {
    /* TOPIC SUBSCRIPTION MANAGEMENT ERRORS */
    NOT_FOUND: 'REGISTRATION_TOKEN_NOT_REGISTERED',
    INVALID_ARGUMENT: 'INVALID_REGISTRATION_TOKEN',
    TOO_MANY_TOPICS: 'TOO_MANY_TOPICS',
    RESOURCE_EXHAUSTED: 'TOO_MANY_TOPICS',
    PERMISSION_DENIED: 'AUTHENTICATION_ERROR',
    DEADLINE_EXCEEDED: 'SERVER_UNAVAILABLE',
    INTERNAL: 'INTERNAL_ERROR',
    UNKNOWN: 'UNKNOWN_ERROR',
};

var apiRequest = {};

var validator$3 = {};

const require$$5 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(url$2);

/*! firebase-admin v12.6.0 */
/*!
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(validator$3, "__esModule", { value: true });
validator$3.isTaskId = validator$3.isTopic = validator$3.isURL = validator$3.isUTCDateString = validator$3.isISODateString = validator$3.isPhoneNumber = validator$3.isEmail = validator$3.isPassword = validator$3.isUid = validator$3.isNonNullObject = validator$3.isObject = validator$3.isNonEmptyString = validator$3.isBase64String = validator$3.isString = validator$3.isNumber = validator$3.isBoolean = validator$3.isNonEmptyArray = validator$3.isArray = validator$3.isBuffer = void 0;
const url$1 = require$$5;
/**
 * Validates that a value is a byte buffer.
 *
 * @param value - The value to validate.
 * @returns Whether the value is byte buffer or not.
 */
function isBuffer(value) {
    return value instanceof Buffer;
}
validator$3.isBuffer = isBuffer;
/**
 * Validates that a value is an array.
 *
 * @param value - The value to validate.
 * @returns Whether the value is an array or not.
 */
function isArray(value) {
    return Array.isArray(value);
}
validator$3.isArray = isArray;
/**
 * Validates that a value is a non-empty array.
 *
 * @param value - The value to validate.
 * @returns Whether the value is a non-empty array or not.
 */
function isNonEmptyArray(value) {
    return isArray(value) && value.length !== 0;
}
validator$3.isNonEmptyArray = isNonEmptyArray;
/**
 * Validates that a value is a boolean.
 *
 * @param value - The value to validate.
 * @returns Whether the value is a boolean or not.
 */
function isBoolean(value) {
    return typeof value === 'boolean';
}
validator$3.isBoolean = isBoolean;
/**
 * Validates that a value is a number.
 *
 * @param value - The value to validate.
 * @returns Whether the value is a number or not.
 */
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}
validator$3.isNumber = isNumber;
/**
 * Validates that a value is a string.
 *
 * @param value - The value to validate.
 * @returns Whether the value is a string or not.
 */
function isString(value) {
    return typeof value === 'string';
}
validator$3.isString = isString;
/**
 * Validates that a value is a base64 string.
 *
 * @param value - The value to validate.
 * @returns Whether the value is a base64 string or not.
 */
function isBase64String(value) {
    if (!isString(value)) {
        return false;
    }
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(value);
}
validator$3.isBase64String = isBase64String;
/**
 * Validates that a value is a non-empty string.
 *
 * @param value - The value to validate.
 * @returns Whether the value is a non-empty string or not.
 */
function isNonEmptyString(value) {
    return isString(value) && value !== '';
}
validator$3.isNonEmptyString = isNonEmptyString;
/**
 * Validates that a value is a nullable object.
 *
 * @param value - The value to validate.
 * @returns Whether the value is an object or not.
 */
function isObject(value) {
    return typeof value === 'object' && !isArray(value);
}
validator$3.isObject = isObject;
/**
 * Validates that a value is a non-null object.
 *
 * @param value - The value to validate.
 * @returns Whether the value is a non-null object or not.
 */
function isNonNullObject(value) {
    return isObject(value) && value !== null;
}
validator$3.isNonNullObject = isNonNullObject;
/**
 * Validates that a string is a valid Firebase Auth uid.
 *
 * @param uid - The string to validate.
 * @returns Whether the string is a valid Firebase Auth uid.
 */
function isUid(uid) {
    return typeof uid === 'string' && uid.length > 0 && uid.length <= 128;
}
validator$3.isUid = isUid;
/**
 * Validates that a string is a valid Firebase Auth password.
 *
 * @param password - The password string to validate.
 * @returns Whether the string is a valid Firebase Auth password.
 */
function isPassword(password) {
    // A password must be a string of at least 6 characters.
    return typeof password === 'string' && password.length >= 6;
}
validator$3.isPassword = isPassword;
/**
 * Validates that a string is a valid email.
 *
 * @param email - The string to validate.
 * @returns Whether the string is valid email or not.
 */
function isEmail(email) {
    if (typeof email !== 'string') {
        return false;
    }
    // There must at least one character before the @ symbol and another after.
    const re = /^[^@]+@[^@]+$/;
    return re.test(email);
}
validator$3.isEmail = isEmail;
/**
 * Validates that a string is a valid phone number.
 *
 * @param phoneNumber - The string to validate.
 * @returns Whether the string is a valid phone number or not.
 */
function isPhoneNumber(phoneNumber) {
    if (typeof phoneNumber !== 'string') {
        return false;
    }
    // Phone number validation is very lax here. Backend will enforce E.164
    // spec compliance and will normalize accordingly.
    // The phone number string must be non-empty and starts with a plus sign.
    const re1 = /^\+/;
    // The phone number string must contain at least one alphanumeric character.
    const re2 = /[\da-zA-Z]+/;
    return re1.test(phoneNumber) && re2.test(phoneNumber);
}
validator$3.isPhoneNumber = isPhoneNumber;
/**
 * Validates that a string is a valid ISO date string.
 *
 * @param dateString - The string to validate.
 * @returns Whether the string is a valid ISO date string.
 */
function isISODateString(dateString) {
    try {
        return isNonEmptyString(dateString) &&
            (new Date(dateString).toISOString() === dateString);
    }
    catch (e) {
        return false;
    }
}
validator$3.isISODateString = isISODateString;
/**
 * Validates that a string is a valid UTC date string.
 *
 * @param dateString - The string to validate.
 * @returns Whether the string is a valid UTC date string.
 */
function isUTCDateString(dateString) {
    try {
        return isNonEmptyString(dateString) &&
            (new Date(dateString).toUTCString() === dateString);
    }
    catch (e) {
        return false;
    }
}
validator$3.isUTCDateString = isUTCDateString;
/**
 * Validates that a string is a valid web URL.
 *
 * @param urlStr - The string to validate.
 * @returns Whether the string is valid web URL or not.
 */
function isURL(urlStr) {
    if (typeof urlStr !== 'string') {
        return false;
    }
    // Lookup illegal characters.
    const re = /[^a-z0-9:/?#[\]@!$&'()*+,;=.\-_~%]/i;
    if (re.test(urlStr)) {
        return false;
    }
    try {
        const uri = url$1.parse(urlStr);
        const scheme = uri.protocol;
        const slashes = uri.slashes;
        const hostname = uri.hostname;
        const pathname = uri.pathname;
        if ((scheme !== 'http:' && scheme !== 'https:') || !slashes) {
            return false;
        }
        // Validate hostname: Can contain letters, numbers, underscore and dashes separated by a dot.
        // Each zone must not start with a hyphen or underscore.
        if (!hostname || !/^[a-zA-Z0-9]+[\w-]*([.]?[a-zA-Z0-9]+[\w-]*)*$/.test(hostname)) {
            return false;
        }
        // Allow for pathnames: (/chars+)*/?
        // Where chars can be a combination of: a-z A-Z 0-9 - _ . ~ ! $ & ' ( ) * + , ; = : @ %
        const pathnameRe = /^(\/[\w\-.~!$'()*+,;=:@%]+)*\/?$/;
        // Validate pathname.
        if (pathname &&
            pathname !== '/' &&
            !pathnameRe.test(pathname)) {
            return false;
        }
        // Allow any query string and hash as long as no invalid character is used.
    }
    catch (e) {
        return false;
    }
    return true;
}
validator$3.isURL = isURL;
/**
 * Validates that the provided topic is a valid FCM topic name.
 *
 * @param topic - The topic to validate.
 * @returns Whether the provided topic is a valid FCM topic name.
 */
function isTopic(topic) {
    if (typeof topic !== 'string') {
        return false;
    }
    const VALID_TOPIC_REGEX = /^(\/topics\/)?(private\/)?[a-zA-Z0-9-_.~%]+$/;
    return VALID_TOPIC_REGEX.test(topic);
}
validator$3.isTopic = isTopic;
/**
 * Validates that the provided string can be used as a task ID
 * for Cloud Tasks.
 *
 * @param taskId - the task ID to validate.
 * @returns Whether the provided task ID is valid.
 */
function isTaskId(taskId) {
    if (typeof taskId !== 'string') {
        return false;
    }
    const VALID_TASK_ID_REGEX = /^[A-Za-z0-9_-]+$/;
    return VALID_TASK_ID_REGEX.test(taskId);
}
validator$3.isTaskId = isTaskId;

const require$$2$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(http$1);

const require$$3 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(https$1);

const require$$4 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(http2$1);

const require$$6$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(events);

const require$$7$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(busboy);

const require$$8 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(zlib);

/*! firebase-admin v12.6.0 */
/*!
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(apiRequest, "__esModule", { value: true });
apiRequest.Http2SessionHandler = apiRequest.ExponentialBackoffPoller = apiRequest.ApiSettings = apiRequest.AuthorizedHttp2Client = apiRequest.AuthorizedHttpClient = apiRequest.parseHttpResponse = apiRequest.Http2Client = apiRequest.HttpClient = apiRequest.RequestClient = apiRequest.defaultRetryConfig = apiRequest.RequestResponseError = void 0;
const error_1$2 = error;
const validator$2 = validator$3;
const http = require$$2$1;
const https = require$$3;
const http2 = require$$4;
const url = require$$5;
const events_1 = require$$6$1;
class DefaultRequestResponse {
    /**
     * Constructs a new `RequestResponse` from the given `LowLevelResponse`.
     */
    constructor(resp) {
        this.status = resp.status;
        this.headers = resp.headers;
        this.text = resp.data;
        try {
            if (!resp.data) {
                throw new error_1$2.FirebaseAppError(error_1$2.AppErrorCodes.INTERNAL_ERROR, 'HTTP response missing data.');
            }
            this.parsedData = JSON.parse(resp.data);
        }
        catch (err) {
            this.parsedData = undefined;
            this.parseError = err;
        }
        this.request = `${resp.config.method} ${resp.config.url}`;
    }
    get data() {
        if (this.isJson()) {
            return this.parsedData;
        }
        throw new error_1$2.FirebaseAppError(error_1$2.AppErrorCodes.UNABLE_TO_PARSE_RESPONSE, `Error while parsing response data: "${this.parseError.toString()}". Raw server ` +
            `response: "${this.text}". Status code: "${this.status}". Outgoing ` +
            `request: "${this.request}."`);
    }
    isJson() {
        return typeof this.parsedData !== 'undefined';
    }
}
/**
 * Represents a multipart HTTP or HTTP/2 response. Parts that constitute the response body can be accessed
 * via the multipart getter. Getters for text and data throw errors.
 */
class MultipartRequestResponse {
    constructor(resp) {
        this.status = resp.status;
        this.headers = resp.headers;
        this.multipart = resp.multipart;
    }
    get text() {
        throw new error_1$2.FirebaseAppError(error_1$2.AppErrorCodes.UNABLE_TO_PARSE_RESPONSE, 'Unable to parse multipart payload as text');
    }
    get data() {
        throw new error_1$2.FirebaseAppError(error_1$2.AppErrorCodes.UNABLE_TO_PARSE_RESPONSE, 'Unable to parse multipart payload as JSON');
    }
    isJson() {
        return false;
    }
}
class RequestResponseError extends Error {
    constructor(response) {
        super(`Server responded with status ${response.status}.`);
        this.response = response;
        // Set the prototype so that instanceof checks will work correctly.
        // See: https://github.com/Microsoft/TypeScript/issues/13965
        Object.setPrototypeOf(this, RequestResponseError.prototype);
    }
}
apiRequest.RequestResponseError = RequestResponseError;
/**
 * Default retry configuration for HTTP and HTTP/2 requests. Retries up to 4 times on connection reset and timeout
 * errors as well as 503 errors. Exposed as a function to ensure that every `RequestClient` gets its own `RetryConfig`
 * instance.
 */
function defaultRetryConfig() {
    return {
        maxRetries: 4,
        statusCodes: [503],
        ioErrorCodes: ['ECONNRESET', 'ETIMEDOUT'],
        backOffFactor: 0.5,
        maxDelayInMillis: 60 * 1000,
    };
}
apiRequest.defaultRetryConfig = defaultRetryConfig;
/**
 * Ensures that the given `RetryConfig` object is valid.
 *
 * @param retry - The configuration to be validated.
 */
function validateRetryConfig(retry) {
    if (!validator$2.isNumber(retry.maxRetries) || retry.maxRetries < 0) {
        throw new error_1$2.FirebaseAppError(error_1$2.AppErrorCodes.INVALID_ARGUMENT, 'maxRetries must be a non-negative integer');
    }
    if (typeof retry.backOffFactor !== 'undefined') {
        if (!validator$2.isNumber(retry.backOffFactor) || retry.backOffFactor < 0) {
            throw new error_1$2.FirebaseAppError(error_1$2.AppErrorCodes.INVALID_ARGUMENT, 'backOffFactor must be a non-negative number');
        }
    }
    if (!validator$2.isNumber(retry.maxDelayInMillis) || retry.maxDelayInMillis < 0) {
        throw new error_1$2.FirebaseAppError(error_1$2.AppErrorCodes.INVALID_ARGUMENT, 'maxDelayInMillis must be a non-negative integer');
    }
    if (typeof retry.statusCodes !== 'undefined' && !validator$2.isArray(retry.statusCodes)) {
        throw new error_1$2.FirebaseAppError(error_1$2.AppErrorCodes.INVALID_ARGUMENT, 'statusCodes must be an array');
    }
    if (typeof retry.ioErrorCodes !== 'undefined' && !validator$2.isArray(retry.ioErrorCodes)) {
        throw new error_1$2.FirebaseAppError(error_1$2.AppErrorCodes.INVALID_ARGUMENT, 'ioErrorCodes must be an array');
    }
}
class RequestClient {
    constructor(retry = defaultRetryConfig()) {
        if (retry) {
            this.retry = retry;
            validateRetryConfig(this.retry);
        }
    }
    createRequestResponse(resp) {
        if (resp.multipart) {
            return new MultipartRequestResponse(resp);
        }
        return new DefaultRequestResponse(resp);
    }
    waitForRetry(delayMillis) {
        if (delayMillis > 0) {
            return new Promise((resolve) => {
                setTimeout(resolve, delayMillis);
            });
        }
        return Promise.resolve();
    }
    /**
     * Checks if a failed request is eligible for a retry, and if so returns the duration to wait before initiating
     * the retry.
     *
     * @param retryAttempts - Number of retries completed up to now.
     * @param err - The last encountered error.
     * @returns A 2-tuple where the 1st element is the duration to wait before another retry, and the
     *     2nd element is a boolean indicating whether the request is eligible for a retry or not.
     */
    getRetryDelayMillis(retryAttempts, err) {
        if (!this.isRetryEligible(retryAttempts, err)) {
            return [0, false];
        }
        const response = err.response;
        if (response && response.headers['retry-after']) {
            const delayMillis = this.parseRetryAfterIntoMillis(response.headers['retry-after']);
            if (delayMillis > 0) {
                return [delayMillis, true];
            }
        }
        return [this.backOffDelayMillis(retryAttempts), true];
    }
    isRetryEligible(retryAttempts, err) {
        if (!this.retry) {
            return false;
        }
        if (retryAttempts >= this.retry.maxRetries) {
            return false;
        }
        if (err.response) {
            const statusCodes = this.retry.statusCodes || [];
            return statusCodes.indexOf(err.response.status) !== -1;
        }
        if (err.code) {
            const retryCodes = this.retry.ioErrorCodes || [];
            return retryCodes.indexOf(err.code) !== -1;
        }
        return false;
    }
    /**???
     * Parses the Retry-After header as a milliseconds value. Return value is negative if the Retry-After header
     * contains an expired timestamp or otherwise malformed.
     */
    parseRetryAfterIntoMillis(retryAfter) {
        const delaySeconds = parseInt(retryAfter, 10);
        if (!isNaN(delaySeconds)) {
            return delaySeconds * 1000;
        }
        const date = new Date(retryAfter);
        if (!isNaN(date.getTime())) {
            return date.getTime() - Date.now();
        }
        return -1;
    }
    backOffDelayMillis(retryAttempts) {
        if (retryAttempts === 0) {
            return 0;
        }
        if (!this.retry) {
            throw new error_1$2.FirebaseAppError(error_1$2.AppErrorCodes.INTERNAL_ERROR, 'Expected this.retry to exist.');
        }
        const backOffFactor = this.retry.backOffFactor || 0;
        const delayInSeconds = (2 ** retryAttempts) * backOffFactor;
        return Math.min(delayInSeconds * 1000, this.retry.maxDelayInMillis);
    }
}
apiRequest.RequestClient = RequestClient;
class HttpClient extends RequestClient {
    constructor(retry) {
        super(retry);
    }
    /**
     * Sends an HTTP request to a remote server. If the server responds with a successful response (2xx), the returned
     * promise resolves with an `RequestResponse`. If the server responds with an error (3xx, 4xx, 5xx), the promise
     * rejects with an `RequestResponseError`. In case of all other errors, the promise rejects with a `FirebaseAppError`.
     * If a request fails due to a low-level network error, the client transparently retries the request once before
     * rejecting the promise.
     *
     * If the request data is specified as an object, it will be serialized into a JSON string. The application/json
     * content-type header will also be automatically set in this case. For all other payload types, the content-type
     * header should be explicitly set by the caller. To send a JSON leaf value (e.g. "foo", 5), parse it into JSON,
     * and pass as a string or a Buffer along with the appropriate content-type header.
     *
     * @param config - HTTP request to be sent.
     * @returns A promise that resolves with the response details.
     */
    send(config) {
        return this.sendWithRetry(config);
    }
    /**
     * Sends an HTTP request. In the event of an error, retries the HTTP request according to the
     * `RetryConfig` set on the `HttpClient`.
     *
     * @param config - HTTP request to be sent.
     * @param retryAttempts - Number of retries performed up to now.
     * @returns A promise that resolves with the response details.
     */
    sendWithRetry(config, retryAttempts = 0) {
        return AsyncHttpCall.invoke(config)
            .then((resp) => {
            return this.createRequestResponse(resp);
        })
            .catch((err) => {
            const [delayMillis, canRetry] = this.getRetryDelayMillis(retryAttempts, err);
            if (canRetry && this.retry && delayMillis <= this.retry.maxDelayInMillis) {
                return this.waitForRetry(delayMillis).then(() => {
                    return this.sendWithRetry(config, retryAttempts + 1);
                });
            }
            if (err.response) {
                throw new RequestResponseError(this.createRequestResponse(err.response));
            }
            if (err.code === 'ETIMEDOUT') {
                throw new error_1$2.FirebaseAppError(error_1$2.AppErrorCodes.NETWORK_TIMEOUT, `Error while making request: ${err.message}.`);
            }
            throw new error_1$2.FirebaseAppError(error_1$2.AppErrorCodes.NETWORK_ERROR, `Error while making request: ${err.message}. Error code: ${err.code}`);
        });
    }
}
apiRequest.HttpClient = HttpClient;
class Http2Client extends RequestClient {
    constructor(retry = defaultRetryConfig()) {
        super(retry);
    }
    /**
     * Sends an HTTP/2 request to a remote server. If the server responds with a successful response (2xx), the returned
     * promise resolves with an `RequestResponse`. If the server responds with an error (3xx, 4xx, 5xx), the promise
     * rejects with an `RequestResponseError`. In case of all other errors, the promise rejects with a `FirebaseAppError`.
     * If a request fails due to a low-level network error, the client transparently retries the request once before
     * rejecting the promise.
     *
     * If the request data is specified as an object, it will be serialized into a JSON string. The application/json
     * content-type header will also be automatically set in this case. For all other payload types, the content-type
     * header should be explicitly set by the caller. To send a JSON leaf value (e.g. "foo", 5), parse it into JSON,
     * and pass as a string or a Buffer along with the appropriate content-type header.
     *
     * @param config - HTTP/2 request to be sent.
     * @returns A promise that resolves with the response details.
     */
    send(config) {
        return this.sendWithRetry(config);
    }
    /**
     * Sends an HTTP/2 request. In the event of an error, retries the HTTP/2 request according to the
     * `RetryConfig` set on the `Http2Client`.
     *
     * @param config - HTTP/2 request to be sent.
     * @param retryAttempts - Number of retries performed up to now.
     * @returns A promise that resolves with the response details.
     */
    sendWithRetry(config, retryAttempts = 0) {
        return AsyncHttp2Call.invoke(config)
            .then((resp) => {
            return this.createRequestResponse(resp);
        })
            .catch((err) => {
            const [delayMillis, canRetry] = this.getRetryDelayMillis(retryAttempts, err);
            if (canRetry && this.retry && delayMillis <= this.retry.maxDelayInMillis) {
                return this.waitForRetry(delayMillis).then(() => {
                    return this.sendWithRetry(config, retryAttempts + 1);
                });
            }
            if (err.response) {
                throw new RequestResponseError(this.createRequestResponse(err.response));
            }
            if (err.code === 'ETIMEDOUT') {
                throw new error_1$2.FirebaseAppError(error_1$2.AppErrorCodes.NETWORK_TIMEOUT, `Error while making request: ${err.message}.`);
            }
            throw new error_1$2.FirebaseAppError(error_1$2.AppErrorCodes.NETWORK_ERROR, `Error while making request: ${err.message}. Error code: ${err.code}`);
        });
    }
}
apiRequest.Http2Client = Http2Client;
/**
 * Parses a full HTTP or HTTP/2 response message containing both a header and a body.
 *
 * @param response - The HTTP or HTTP/2 response to be parsed.
 * @param config - The request configuration that resulted in the HTTP or HTTP/2 response.
 * @returns An object containing the response's parsed status, headers and the body.
 */
function parseHttpResponse(response, config) {
    const responseText = validator$2.isBuffer(response) ?
        response.toString('utf-8') : response;
    const endOfHeaderPos = responseText.indexOf('\r\n\r\n');
    const headerLines = responseText.substring(0, endOfHeaderPos).split('\r\n');
    const statusLine = headerLines[0];
    const status = statusLine.trim().split(/\s/)[1];
    const headers = {};
    headerLines.slice(1).forEach((line) => {
        const colonPos = line.indexOf(':');
        const name = line.substring(0, colonPos).trim().toLowerCase();
        const value = line.substring(colonPos + 1).trim();
        headers[name] = value;
    });
    let data = responseText.substring(endOfHeaderPos + 4);
    if (data.endsWith('\n')) {
        data = data.slice(0, -1);
    }
    if (data.endsWith('\r')) {
        data = data.slice(0, -1);
    }
    const lowLevelResponse = {
        status: parseInt(status, 10),
        headers,
        data,
        config,
        request: null,
    };
    if (!validator$2.isNumber(lowLevelResponse.status)) {
        throw new error_1$2.FirebaseAppError(error_1$2.AppErrorCodes.INTERNAL_ERROR, 'Malformed HTTP status line.');
    }
    return new DefaultRequestResponse(lowLevelResponse);
}
apiRequest.parseHttpResponse = parseHttpResponse;
/**
 * A helper class for common functionality needed to send requests over the wire.
 * It also wraps the callback API of the Node.js standard library in a more flexible Promise API.
 */
class AsyncRequestCall {
    constructor(configImpl) {
        this.configImpl = configImpl;
    }
    /**
     * Extracts multipart boundary from the HTTP header. The content-type header of a multipart
     * response has the form 'multipart/subtype; boundary=string'.
     *
     * If the content-type header does not exist, or does not start with
     * 'multipart/', then null will be returned.
     */
    getMultipartBoundary(headers) {
        const contentType = headers['content-type'];
        if (!contentType || !contentType.startsWith('multipart/')) {
            return null;
        }
        const segments = contentType.split(';');
        const emptyObject = {};
        const headerParams = segments.slice(1)
            .map((segment) => segment.trim().split('='))
            .reduce((curr, params) => {
            // Parse key=value pairs in the content-type header into properties of an object.
            if (params.length === 2) {
                const keyValuePair = {};
                keyValuePair[params[0]] = params[1];
                return Object.assign(curr, keyValuePair);
            }
            return curr;
        }, emptyObject);
        return headerParams.boundary;
    }
    handleMultipartResponse(response, respStream, boundary) {
        const busboy = require$$7$1; // eslint-disable-line @typescript-eslint/no-var-requires
        const multipartParser = new busboy.Dicer({ boundary });
        const responseBuffer = [];
        multipartParser.on('part', (part) => {
            const tempBuffers = [];
            part.on('data', (partData) => {
                tempBuffers.push(partData);
            });
            part.on('end', () => {
                responseBuffer.push(Buffer.concat(tempBuffers));
            });
        });
        multipartParser.on('finish', () => {
            response.data = undefined;
            response.multipart = responseBuffer;
            this.finalizeResponse(response);
        });
        respStream.pipe(multipartParser);
    }
    handleRegularResponse(response, respStream) {
        const responseBuffer = [];
        respStream.on('data', (chunk) => {
            responseBuffer.push(chunk);
        });
        respStream.on('error', (err) => {
            const req = response.request;
            if (req && req.destroyed) {
                return;
            }
            this.enhanceAndReject(err, null, req);
        });
        respStream.on('end', () => {
            response.data = Buffer.concat(responseBuffer).toString();
            this.finalizeResponse(response);
        });
    }
    /**
     * Finalizes the current request call in-flight by either resolving or rejecting the associated
     * promise. In the event of an error, adds additional useful information to the returned error.
     */
    finalizeResponse(response) {
        if (response.status >= 200 && response.status < 300) {
            this.resolve(response);
        }
        else {
            this.rejectWithError('Request failed with status code ' + response.status, null, response.request, response);
        }
    }
    /**
     * Creates a new error from the given message, and enhances it with other information available.
     * Then the promise associated with this request call is rejected with the resulting error.
     */
    rejectWithError(message, code, request, response) {
        const error = new Error(message);
        this.enhanceAndReject(error, code, request, response);
    }
    enhanceAndReject(error, code, request, response) {
        this.reject(this.enhanceError(error, code, request, response));
    }
    /**
     * Enhances the given error by adding more information to it. Specifically, the request config,
     * the underlying request and response will be attached to the error.
     */
    enhanceError(error, code, request, response) {
        error.config = this.configImpl;
        if (code) {
            error.code = code;
        }
        error.request = request;
        error.response = response;
        return error;
    }
}
/**
 * A helper class for sending HTTP requests over the wire. This is a wrapper around the standard
 * http and https packages of Node.js, providing content processing, timeouts and error handling.
 * It also wraps the callback API of the Node.js standard library in a more flexible Promise API.
 */
class AsyncHttpCall extends AsyncRequestCall {
    /**
     * Sends an HTTP request based on the provided configuration.
     */
    static invoke(config) {
        return new AsyncHttpCall(config).promise;
    }
    constructor(config) {
        const httpConfigImpl = new HttpRequestConfigImpl(config);
        super(httpConfigImpl);
        try {
            this.httpConfigImpl = httpConfigImpl;
            this.options = this.httpConfigImpl.buildRequestOptions();
            this.entity = this.httpConfigImpl.buildEntity(this.options.headers);
            this.promise = new Promise((resolve, reject) => {
                this.resolve = resolve;
                this.reject = reject;
                this.execute();
            });
        }
        catch (err) {
            this.promise = Promise.reject(this.enhanceError(err, null));
        }
    }
    execute() {
        const transport = this.options.protocol === 'https:' ? https : http;
        const req = transport.request(this.options, (res) => {
            this.handleResponse(res, req);
        });
        // Handle errors
        req.on('error', (err) => {
            if (req.aborted) {
                return;
            }
            this.enhanceAndReject(err, null, req);
        });
        const timeout = this.httpConfigImpl.timeout;
        const timeoutCallback = () => {
            req.destroy();
            this.rejectWithError(`timeout of ${timeout}ms exceeded`, 'ETIMEDOUT', req);
        };
        if (timeout) {
            // Listen to timeouts and throw an error.
            req.setTimeout(timeout, timeoutCallback);
        }
        // Send the request
        req.end(this.entity);
    }
    handleResponse(res, req) {
        if (req.aborted) {
            return;
        }
        if (!res.statusCode) {
            throw new error_1$2.FirebaseAppError(error_1$2.AppErrorCodes.INTERNAL_ERROR, 'Expected a statusCode on the response from a ClientRequest');
        }
        const response = {
            status: res.statusCode,
            headers: res.headers,
            request: req,
            data: undefined,
            config: this.httpConfigImpl,
        };
        const boundary = this.getMultipartBoundary(res.headers);
        const respStream = this.uncompressResponse(res);
        if (boundary) {
            this.handleMultipartResponse(response, respStream, boundary);
        }
        else {
            this.handleRegularResponse(response, respStream);
        }
    }
    uncompressResponse(res) {
        // Uncompress the response body transparently if required.
        let respStream = res;
        const encodings = ['gzip', 'compress', 'deflate'];
        if (res.headers['content-encoding'] && encodings.indexOf(res.headers['content-encoding']) !== -1) {
            // Add the unzipper to the body stream processing pipeline.
            const zlib = require$$8; // eslint-disable-line @typescript-eslint/no-var-requires
            respStream = respStream.pipe(zlib.createUnzip());
            // Remove the content-encoding in order to not confuse downstream operations.
            delete res.headers['content-encoding'];
        }
        return respStream;
    }
}
class AsyncHttp2Call extends AsyncRequestCall {
    /**
     * Sends an HTTP2 request based on the provided configuration.
     */
    static invoke(config) {
        return new AsyncHttp2Call(config).promise;
    }
    constructor(config) {
        const http2ConfigImpl = new Http2RequestConfigImpl(config);
        super(http2ConfigImpl);
        try {
            this.http2ConfigImpl = http2ConfigImpl;
            this.options = this.http2ConfigImpl.buildRequestOptions();
            this.entity = this.http2ConfigImpl.buildEntity(this.options.headers);
            this.promise = new Promise((resolve, reject) => {
                this.resolve = resolve;
                this.reject = reject;
                this.execute();
            });
        }
        catch (err) {
            this.promise = Promise.reject(this.enhanceError(err, null));
        }
    }
    execute() {
        const req = this.http2ConfigImpl.http2SessionHandler.session.request({
            ':method': this.options.method,
            ':scheme': this.options.protocol,
            ':path': this.options.path,
            ...this.options.headers
        });
        req.on('response', (headers) => {
            this.handleHttp2Response(headers, req);
        });
        // Handle errors
        req.on('error', (err) => {
            if (req.aborted) {
                return;
            }
            this.enhanceAndReject(err, null, req);
        });
        const timeout = this.http2ConfigImpl.timeout;
        const timeoutCallback = () => {
            req.destroy();
            this.rejectWithError(`timeout of ${timeout}ms exceeded`, 'ETIMEDOUT', req);
        };
        if (timeout) {
            // Listen to timeouts and throw an error.
            req.setTimeout(timeout, timeoutCallback);
        }
        req.end(this.entity);
    }
    handleHttp2Response(headers, stream) {
        if (stream.aborted) {
            return;
        }
        if (!headers[':status']) {
            throw new error_1$2.FirebaseAppError(error_1$2.AppErrorCodes.INTERNAL_ERROR, 'Expected a statusCode on the response from a ClientRequest');
        }
        const response = {
            status: headers[':status'],
            headers: headers,
            request: stream,
            data: undefined,
            config: this.http2ConfigImpl,
        };
        const boundary = this.getMultipartBoundary(headers);
        const respStream = this.uncompressResponse(headers, stream);
        if (boundary) {
            this.handleMultipartResponse(response, respStream, boundary);
        }
        else {
            this.handleRegularResponse(response, respStream);
        }
    }
    uncompressResponse(headers, stream) {
        // Uncompress the response body transparently if required.
        let respStream = stream;
        const encodings = ['gzip', 'compress', 'deflate'];
        if (headers['content-encoding'] && encodings.indexOf(headers['content-encoding']) !== -1) {
            // Add the unzipper to the body stream processing pipeline.
            const zlib = require$$8; // eslint-disable-line @typescript-eslint/no-var-requires
            respStream = respStream.pipe(zlib.createUnzip());
            // Remove the content-encoding in order to not confuse downstream operations.
            delete headers['content-encoding'];
        }
        return respStream;
    }
}
/**
 * An adapter class with common functionality needed to extract options and entity data from a `RequestConfig`.
 */
class BaseRequestConfigImpl {
    constructor(config) {
        this.config = config;
        this.config = config;
    }
    get method() {
        return this.config.method;
    }
    get url() {
        return this.config.url;
    }
    get headers() {
        return this.config.headers;
    }
    get data() {
        return this.config.data;
    }
    get timeout() {
        return this.config.timeout;
    }
    buildEntity(headers) {
        let data;
        if (!this.hasEntity() || !this.isEntityEnclosingRequest()) {
            return data;
        }
        if (validator$2.isBuffer(this.data)) {
            data = this.data;
        }
        else if (validator$2.isObject(this.data)) {
            data = Buffer.from(JSON.stringify(this.data), 'utf-8');
            if (typeof headers['content-type'] === 'undefined') {
                headers['content-type'] = 'application/json;charset=utf-8';
            }
        }
        else if (validator$2.isString(this.data)) {
            data = Buffer.from(this.data, 'utf-8');
        }
        else {
            throw new Error('Request data must be a string, a Buffer or a json serializable object');
        }
        // Add Content-Length header if data exists.
        headers['Content-Length'] = data.length.toString();
        return data;
    }
    buildUrl() {
        const fullUrl = this.urlWithProtocol();
        if (!this.hasEntity() || this.isEntityEnclosingRequest()) {
            return url.parse(fullUrl);
        }
        if (!validator$2.isObject(this.data)) {
            throw new Error(`${this.method} requests cannot have a body`);
        }
        // Parse URL and append data to query string.
        const parsedUrl = new url.URL(fullUrl);
        const dataObj = this.data;
        for (const key in dataObj) {
            if (Object.prototype.hasOwnProperty.call(dataObj, key)) {
                parsedUrl.searchParams.append(key, dataObj[key]);
            }
        }
        return url.parse(parsedUrl.toString());
    }
    urlWithProtocol() {
        const fullUrl = this.url;
        if (fullUrl.startsWith('http://') || fullUrl.startsWith('https://')) {
            return fullUrl;
        }
        return `https://${fullUrl}`;
    }
    hasEntity() {
        return !!this.data;
    }
    isEntityEnclosingRequest() {
        // GET and HEAD requests do not support entity (body) in request.
        return this.method !== 'GET' && this.method !== 'HEAD';
    }
}
/**
 * An adapter class for extracting options and entity data from an `HttpRequestConfig`.
 */
class HttpRequestConfigImpl extends BaseRequestConfigImpl {
    constructor(httpConfig) {
        super(httpConfig);
        this.httpConfig = httpConfig;
    }
    get httpAgent() {
        return this.httpConfig.httpAgent;
    }
    buildRequestOptions() {
        const parsed = this.buildUrl();
        const protocol = parsed.protocol;
        let port = parsed.port;
        if (!port) {
            const isHttps = protocol === 'https:';
            port = isHttps ? '443' : '80';
        }
        return {
            protocol,
            hostname: parsed.hostname,
            port,
            path: parsed.path,
            method: this.method,
            agent: this.httpAgent,
            headers: Object.assign({}, this.headers),
        };
    }
}
/**
 * An adapter class for extracting options and entity data from an `Http2RequestConfig`.
 */
class Http2RequestConfigImpl extends BaseRequestConfigImpl {
    constructor(http2Config) {
        super(http2Config);
        this.http2Config = http2Config;
    }
    get http2SessionHandler() {
        return this.http2Config.http2SessionHandler;
    }
    buildRequestOptions() {
        const parsed = this.buildUrl();
        const protocol = parsed.protocol;
        return {
            protocol,
            path: parsed.path,
            method: this.method,
            headers: Object.assign({}, this.headers),
        };
    }
}
class AuthorizedHttpClient extends HttpClient {
    constructor(app) {
        super();
        this.app = app;
    }
    send(request) {
        return this.getToken().then((token) => {
            const requestCopy = Object.assign({}, request);
            requestCopy.headers = Object.assign({}, request.headers);
            const authHeader = 'Authorization';
            requestCopy.headers[authHeader] = `Bearer ${token}`;
            // Fix issue where firebase-admin does not specify quota project that is
            // necessary for use when utilizing human account with ADC (RSDF)
            if (!requestCopy.headers['x-goog-user-project'] && this.app.options.projectId) {
                requestCopy.headers['x-goog-user-project'] = this.app.options.projectId;
            }
            if (!requestCopy.httpAgent && this.app.options.httpAgent) {
                requestCopy.httpAgent = this.app.options.httpAgent;
            }
            return super.send(requestCopy);
        });
    }
    getToken() {
        return this.app.INTERNAL.getToken()
            .then((accessTokenObj) => accessTokenObj.accessToken);
    }
}
apiRequest.AuthorizedHttpClient = AuthorizedHttpClient;
class AuthorizedHttp2Client extends Http2Client {
    constructor(app) {
        super();
        this.app = app;
    }
    send(request) {
        return this.getToken().then((token) => {
            const requestCopy = Object.assign({}, request);
            requestCopy.headers = Object.assign({}, request.headers);
            const authHeader = 'Authorization';
            requestCopy.headers[authHeader] = `Bearer ${token}`;
            return super.send(requestCopy);
        });
    }
    getToken() {
        return this.app.INTERNAL.getToken()
            .then((accessTokenObj) => accessTokenObj.accessToken);
    }
}
apiRequest.AuthorizedHttp2Client = AuthorizedHttp2Client;
/**
 * Class that defines all the settings for the backend API endpoint.
 *
 * @param endpoint - The Firebase Auth backend endpoint.
 * @param httpMethod - The HTTP method for that endpoint.
 * @constructor
 */
class ApiSettings {
    constructor(endpoint, httpMethod = 'POST') {
        this.endpoint = endpoint;
        this.httpMethod = httpMethod;
        this.setRequestValidator(null)
            .setResponseValidator(null);
    }
    /** @returns The backend API endpoint. */
    getEndpoint() {
        return this.endpoint;
    }
    /** @returns The request HTTP method. */
    getHttpMethod() {
        return this.httpMethod;
    }
    /**
     * @param requestValidator - The request validator.
     * @returns The current API settings instance.
     */
    setRequestValidator(requestValidator) {
        const nullFunction = () => undefined;
        this.requestValidator = requestValidator || nullFunction;
        return this;
    }
    /** @returns The request validator. */
    getRequestValidator() {
        return this.requestValidator;
    }
    /**
     * @param responseValidator - The response validator.
     * @returns The current API settings instance.
     */
    setResponseValidator(responseValidator) {
        const nullFunction = () => undefined;
        this.responseValidator = responseValidator || nullFunction;
        return this;
    }
    /** @returns The response validator. */
    getResponseValidator() {
        return this.responseValidator;
    }
}
apiRequest.ApiSettings = ApiSettings;
/**
 * Class used for polling an endpoint with exponential backoff.
 *
 * Example usage:
 * ```
 * const poller = new ExponentialBackoffPoller();
 * poller
 *     .poll(() => {
 *       return myRequestToPoll()
 *           .then((responseData: any) => {
 *             if (!isValid(responseData)) {
 *               // Continue polling.
 *               return null;
 *             }
 *
 *             // Polling complete. Resolve promise with final response data.
 *             return responseData;
 *           });
 *     })
 *     .then((responseData: any) => {
 *       console.log(`Final response: ${responseData}`);
 *     });
 * ```
 */
class ExponentialBackoffPoller extends events_1.EventEmitter {
    constructor(initialPollingDelayMillis = 1000, maxPollingDelayMillis = 10000, masterTimeoutMillis = 60000) {
        super();
        this.initialPollingDelayMillis = initialPollingDelayMillis;
        this.maxPollingDelayMillis = maxPollingDelayMillis;
        this.masterTimeoutMillis = masterTimeoutMillis;
        this.numTries = 0;
        this.completed = false;
    }
    /**
     * Poll the provided callback with exponential backoff.
     *
     * @param callback - The callback to be called for each poll. If the
     *     callback resolves to a falsey value, polling will continue. Otherwise, the truthy
     *     resolution will be used to resolve the promise returned by this method.
     * @returns A Promise which resolves to the truthy value returned by the provided
     *     callback when polling is complete.
     */
    poll(callback) {
        if (this.pollCallback) {
            throw new Error('poll() can only be called once per instance of ExponentialBackoffPoller');
        }
        this.pollCallback = callback;
        this.on('poll', this.repoll);
        this.masterTimer = setTimeout(() => {
            if (this.completed) {
                return;
            }
            this.markCompleted();
            this.reject(new Error('ExponentialBackoffPoller deadline exceeded - Master timeout reached'));
        }, this.masterTimeoutMillis);
        return new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
            this.repoll();
        });
    }
    repoll() {
        this.pollCallback()
            .then((result) => {
            if (this.completed) {
                return;
            }
            if (!result) {
                this.repollTimer =
                    setTimeout(() => this.emit('poll'), this.getPollingDelayMillis());
                this.numTries++;
                return;
            }
            this.markCompleted();
            this.resolve(result);
        })
            .catch((err) => {
            if (this.completed) {
                return;
            }
            this.markCompleted();
            this.reject(err);
        });
    }
    getPollingDelayMillis() {
        const increasedPollingDelay = Math.pow(2, this.numTries) * this.initialPollingDelayMillis;
        return Math.min(increasedPollingDelay, this.maxPollingDelayMillis);
    }
    markCompleted() {
        this.completed = true;
        if (this.masterTimer) {
            clearTimeout(this.masterTimer);
        }
        if (this.repollTimer) {
            clearTimeout(this.repollTimer);
        }
    }
}
apiRequest.ExponentialBackoffPoller = ExponentialBackoffPoller;
class Http2SessionHandler {
    constructor(url) {
        this.http2Session = this.createSession(url);
    }
    createSession(url) {
        if (!this.http2Session || this.isClosed) {
            const opts = {
                // Set local max concurrent stream limit to respect backend limit
                peerMaxConcurrentStreams: 100,
                ALPNProtocols: ['h2']
            };
            const http2Session = http2.connect(url, opts);
            http2Session.on('goaway', (errorCode, _, opaqueData) => {
                throw new error_1$2.FirebaseAppError(error_1$2.AppErrorCodes.NETWORK_ERROR, `Error while making requests: GOAWAY - ${opaqueData.toString()}, Error code: ${errorCode}`);
            });
            http2Session.on('error', (error) => {
                throw new error_1$2.FirebaseAppError(error_1$2.AppErrorCodes.NETWORK_ERROR, `Error while making requests: ${error}`);
            });
            return http2Session;
        }
        return this.http2Session;
    }
    get session() {
        return this.http2Session;
    }
    get isClosed() {
        return this.http2Session.closed;
    }
    close() {
        this.http2Session.close();
    }
}
apiRequest.Http2SessionHandler = Http2SessionHandler;

const require$$6 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(jsonwebtoken);

const require$$7 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(nodeForge);

/*! firebase-admin v12.6.0 */
/*!
 * @license
 * Copyright 2020 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(credentialInternal, "__esModule", { value: true });
credentialInternal.getApplicationDefault = credentialInternal.isApplicationDefault = credentialInternal.ImpersonatedServiceAccountCredential = credentialInternal.RefreshTokenCredential = credentialInternal.ComputeEngineCredential = credentialInternal.ServiceAccountCredential = void 0;
const fs = require$$0;
const os = require$$1;
const path = require$$2$2;
const error_1$1 = error;
const api_request_1 = apiRequest;
const util = validator$3;
const GOOGLE_TOKEN_AUDIENCE = 'https://accounts.google.com/o/oauth2/token';
const GOOGLE_AUTH_TOKEN_HOST = 'accounts.google.com';
const GOOGLE_AUTH_TOKEN_PATH = '/o/oauth2/token';
// NOTE: the Google Metadata Service uses HTTP over a vlan
const GOOGLE_METADATA_SERVICE_HOST = 'metadata.google.internal';
const GOOGLE_METADATA_SERVICE_TOKEN_PATH = '/computeMetadata/v1/instance/service-accounts/default/token';
const GOOGLE_METADATA_SERVICE_IDENTITY_PATH = '/computeMetadata/v1/instance/service-accounts/default/identity';
const GOOGLE_METADATA_SERVICE_PROJECT_ID_PATH = '/computeMetadata/v1/project/project-id';
const GOOGLE_METADATA_SERVICE_ACCOUNT_ID_PATH = '/computeMetadata/v1/instance/service-accounts/default/email';
const configDir = (() => {
    // Windows has a dedicated low-rights location for apps at ~/Application Data
    const sys = os.platform();
    if (sys && sys.length >= 3 && sys.substring(0, 3).toLowerCase() === 'win') {
        return process.env.APPDATA;
    }
    // On *nix the gcloud cli creates a . dir.
    return process.env.HOME && path.resolve(process.env.HOME, '.config');
})();
const GCLOUD_CREDENTIAL_SUFFIX = 'gcloud/application_default_credentials.json';
const GCLOUD_CREDENTIAL_PATH = configDir && path.resolve(configDir, GCLOUD_CREDENTIAL_SUFFIX);
const REFRESH_TOKEN_HOST = 'www.googleapis.com';
const REFRESH_TOKEN_PATH = '/oauth2/v4/token';
const ONE_HOUR_IN_SECONDS = 60 * 60;
const JWT_ALGORITHM = 'RS256';
/**
 * Implementation of Credential that uses a service account.
 */
class ServiceAccountCredential {
    /**
     * Creates a new ServiceAccountCredential from the given parameters.
     *
     * @param serviceAccountPathOrObject - Service account json object or path to a service account json file.
     * @param httpAgent - Optional http.Agent to use when calling the remote token server.
     * @param implicit - An optinal boolean indicating whether this credential was implicitly discovered from the
     *   environment, as opposed to being explicitly specified by the developer.
     *
     * @constructor
     */
    constructor(serviceAccountPathOrObject, httpAgent, implicit = false) {
        this.httpAgent = httpAgent;
        this.implicit = implicit;
        const serviceAccount = (typeof serviceAccountPathOrObject === 'string') ?
            ServiceAccount.fromPath(serviceAccountPathOrObject)
            : new ServiceAccount(serviceAccountPathOrObject);
        this.projectId = serviceAccount.projectId;
        this.privateKey = serviceAccount.privateKey;
        this.clientEmail = serviceAccount.clientEmail;
        this.httpClient = new api_request_1.HttpClient();
    }
    getAccessToken() {
        const token = this.createAuthJwt_();
        const postData = 'grant_type=urn%3Aietf%3Aparams%3Aoauth%3A' +
            'grant-type%3Ajwt-bearer&assertion=' + token;
        const request = {
            method: 'POST',
            url: `https://${GOOGLE_AUTH_TOKEN_HOST}${GOOGLE_AUTH_TOKEN_PATH}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: postData,
            httpAgent: this.httpAgent,
        };
        return requestAccessToken(this.httpClient, request);
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    createAuthJwt_() {
        const claims = {
            scope: [
                'https://www.googleapis.com/auth/cloud-platform',
                'https://www.googleapis.com/auth/firebase.database',
                'https://www.googleapis.com/auth/firebase.messaging',
                'https://www.googleapis.com/auth/identitytoolkit',
                'https://www.googleapis.com/auth/userinfo.email',
            ].join(' '),
        };
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const jwt = require$$6;
        // This method is actually synchronous so we can capture and return the buffer.
        return jwt.sign(claims, this.privateKey, {
            audience: GOOGLE_TOKEN_AUDIENCE,
            expiresIn: ONE_HOUR_IN_SECONDS,
            issuer: this.clientEmail,
            algorithm: JWT_ALGORITHM,
        });
    }
}
credentialInternal.ServiceAccountCredential = ServiceAccountCredential;
/**
 * A struct containing the properties necessary to use service account JSON credentials.
 */
class ServiceAccount {
    static fromPath(filePath) {
        try {
            return new ServiceAccount(JSON.parse(fs.readFileSync(filePath, 'utf8')));
        }
        catch (error) {
            // Throw a nicely formed error message if the file contents cannot be parsed
            throw new error_1$1.FirebaseAppError(error_1$1.AppErrorCodes.INVALID_CREDENTIAL, 'Failed to parse service account json file: ' + error);
        }
    }
    constructor(json) {
        if (!util.isNonNullObject(json)) {
            throw new error_1$1.FirebaseAppError(error_1$1.AppErrorCodes.INVALID_CREDENTIAL, 'Service account must be an object.');
        }
        copyAttr(this, json, 'projectId', 'project_id');
        copyAttr(this, json, 'privateKey', 'private_key');
        copyAttr(this, json, 'clientEmail', 'client_email');
        let errorMessage;
        if (!util.isNonEmptyString(this.projectId)) {
            errorMessage = 'Service account object must contain a string "project_id" property.';
        }
        else if (!util.isNonEmptyString(this.privateKey)) {
            errorMessage = 'Service account object must contain a string "private_key" property.';
        }
        else if (!util.isNonEmptyString(this.clientEmail)) {
            errorMessage = 'Service account object must contain a string "client_email" property.';
        }
        if (typeof errorMessage !== 'undefined') {
            throw new error_1$1.FirebaseAppError(error_1$1.AppErrorCodes.INVALID_CREDENTIAL, errorMessage);
        }
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const forge = require$$7;
        try {
            forge.pki.privateKeyFromPem(this.privateKey);
        }
        catch (error) {
            throw new error_1$1.FirebaseAppError(error_1$1.AppErrorCodes.INVALID_CREDENTIAL, 'Failed to parse private key: ' + error);
        }
    }
}
/**
 * Implementation of Credential that gets access tokens from the metadata service available
 * in the Google Cloud Platform. This authenticates the process as the default service account
 * of an App Engine instance or Google Compute Engine machine.
 */
class ComputeEngineCredential {
    constructor(httpAgent) {
        this.httpClient = new api_request_1.HttpClient();
        this.httpAgent = httpAgent;
    }
    getAccessToken() {
        const request = this.buildRequest(GOOGLE_METADATA_SERVICE_TOKEN_PATH);
        return requestAccessToken(this.httpClient, request);
    }
    /**
     * getIDToken returns a OIDC token from the compute metadata service
     * that can be used to make authenticated calls to audience
     * @param audience the URL the returned ID token will be used to call.
    */
    getIDToken(audience) {
        const request = this.buildRequest(`${GOOGLE_METADATA_SERVICE_IDENTITY_PATH}?audience=${audience}`);
        return requestIDToken(this.httpClient, request);
    }
    getProjectId() {
        if (this.projectId) {
            return Promise.resolve(this.projectId);
        }
        const request = this.buildRequest(GOOGLE_METADATA_SERVICE_PROJECT_ID_PATH);
        return this.httpClient.send(request)
            .then((resp) => {
            this.projectId = resp.text;
            return this.projectId;
        })
            .catch((err) => {
            const detail = (err instanceof api_request_1.RequestResponseError) ? getDetailFromResponse(err.response) : err.message;
            throw new error_1$1.FirebaseAppError(error_1$1.AppErrorCodes.INVALID_CREDENTIAL, `Failed to determine project ID: ${detail}`);
        });
    }
    getServiceAccountEmail() {
        if (this.accountId) {
            return Promise.resolve(this.accountId);
        }
        const request = this.buildRequest(GOOGLE_METADATA_SERVICE_ACCOUNT_ID_PATH);
        return this.httpClient.send(request)
            .then((resp) => {
            this.accountId = resp.text;
            return this.accountId;
        })
            .catch((err) => {
            const detail = (err instanceof api_request_1.RequestResponseError) ? getDetailFromResponse(err.response) : err.message;
            throw new error_1$1.FirebaseAppError(error_1$1.AppErrorCodes.INVALID_CREDENTIAL, `Failed to determine service account email: ${detail}`);
        });
    }
    buildRequest(urlPath) {
        return {
            method: 'GET',
            url: `http://${GOOGLE_METADATA_SERVICE_HOST}${urlPath}`,
            headers: {
                'Metadata-Flavor': 'Google',
            },
            httpAgent: this.httpAgent,
        };
    }
}
credentialInternal.ComputeEngineCredential = ComputeEngineCredential;
/**
 * Implementation of Credential that gets access tokens from refresh tokens.
 */
class RefreshTokenCredential {
    /**
     * Creates a new RefreshTokenCredential from the given parameters.
     *
     * @param refreshTokenPathOrObject - Refresh token json object or path to a refresh token
     *   (user credentials) json file.
     * @param httpAgent - Optional http.Agent to use when calling the remote token server.
     * @param implicit - An optinal boolean indicating whether this credential was implicitly
     *   discovered from the environment, as opposed to being explicitly specified by the developer.
     *
     * @constructor
     */
    constructor(refreshTokenPathOrObject, httpAgent, implicit = false) {
        this.httpAgent = httpAgent;
        this.implicit = implicit;
        this.refreshToken = (typeof refreshTokenPathOrObject === 'string') ?
            RefreshToken.fromPath(refreshTokenPathOrObject)
            : new RefreshToken(refreshTokenPathOrObject);
        this.httpClient = new api_request_1.HttpClient();
    }
    getAccessToken() {
        const postData = 'client_id=' + this.refreshToken.clientId + '&' +
            'client_secret=' + this.refreshToken.clientSecret + '&' +
            'refresh_token=' + this.refreshToken.refreshToken + '&' +
            'grant_type=refresh_token';
        const request = {
            method: 'POST',
            url: `https://${REFRESH_TOKEN_HOST}${REFRESH_TOKEN_PATH}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: postData,
            httpAgent: this.httpAgent,
        };
        return requestAccessToken(this.httpClient, request);
    }
}
credentialInternal.RefreshTokenCredential = RefreshTokenCredential;
class RefreshToken {
    /*
     * Tries to load a RefreshToken from a path. Throws if the path doesn't exist or the
     * data at the path is invalid.
     */
    static fromPath(filePath) {
        try {
            return new RefreshToken(JSON.parse(fs.readFileSync(filePath, 'utf8')));
        }
        catch (error) {
            // Throw a nicely formed error message if the file contents cannot be parsed
            throw new error_1$1.FirebaseAppError(error_1$1.AppErrorCodes.INVALID_CREDENTIAL, 'Failed to parse refresh token file: ' + error);
        }
    }
    constructor(json) {
        copyAttr(this, json, 'clientId', 'client_id');
        copyAttr(this, json, 'clientSecret', 'client_secret');
        copyAttr(this, json, 'refreshToken', 'refresh_token');
        copyAttr(this, json, 'type', 'type');
        let errorMessage;
        if (!util.isNonEmptyString(this.clientId)) {
            errorMessage = 'Refresh token must contain a "client_id" property.';
        }
        else if (!util.isNonEmptyString(this.clientSecret)) {
            errorMessage = 'Refresh token must contain a "client_secret" property.';
        }
        else if (!util.isNonEmptyString(this.refreshToken)) {
            errorMessage = 'Refresh token must contain a "refresh_token" property.';
        }
        else if (!util.isNonEmptyString(this.type)) {
            errorMessage = 'Refresh token must contain a "type" property.';
        }
        if (typeof errorMessage !== 'undefined') {
            throw new error_1$1.FirebaseAppError(error_1$1.AppErrorCodes.INVALID_CREDENTIAL, errorMessage);
        }
    }
}
/**
 * Implementation of Credential that uses impersonated service account.
 */
class ImpersonatedServiceAccountCredential {
    /**
     * Creates a new ImpersonatedServiceAccountCredential from the given parameters.
     *
     * @param impersonatedServiceAccountPathOrObject - Impersonated Service account json object or
     * path to a service account json file.
     * @param httpAgent - Optional http.Agent to use when calling the remote token server.
     * @param implicit - An optional boolean indicating whether this credential was implicitly
     *   discovered from the environment, as opposed to being explicitly specified by the developer.
     *
     * @constructor
     */
    constructor(impersonatedServiceAccountPathOrObject, httpAgent, implicit = false) {
        this.httpAgent = httpAgent;
        this.implicit = implicit;
        this.impersonatedServiceAccount = (typeof impersonatedServiceAccountPathOrObject === 'string') ?
            ImpersonatedServiceAccount.fromPath(impersonatedServiceAccountPathOrObject)
            : new ImpersonatedServiceAccount(impersonatedServiceAccountPathOrObject);
        this.httpClient = new api_request_1.HttpClient();
    }
    getAccessToken() {
        const postData = 'client_id=' + this.impersonatedServiceAccount.clientId + '&' +
            'client_secret=' + this.impersonatedServiceAccount.clientSecret + '&' +
            'refresh_token=' + this.impersonatedServiceAccount.refreshToken + '&' +
            'grant_type=refresh_token';
        const request = {
            method: 'POST',
            url: `https://${REFRESH_TOKEN_HOST}${REFRESH_TOKEN_PATH}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: postData,
            httpAgent: this.httpAgent,
        };
        return requestAccessToken(this.httpClient, request);
    }
}
credentialInternal.ImpersonatedServiceAccountCredential = ImpersonatedServiceAccountCredential;
/**
 * A struct containing the properties necessary to use impersonated service account JSON credentials.
 */
class ImpersonatedServiceAccount {
    /*
     * Tries to load a ImpersonatedServiceAccount from a path. Throws if the path doesn't exist or the
     * data at the path is invalid.
     */
    static fromPath(filePath) {
        try {
            return new ImpersonatedServiceAccount(JSON.parse(fs.readFileSync(filePath, 'utf8')));
        }
        catch (error) {
            // Throw a nicely formed error message if the file contents cannot be parsed
            throw new error_1$1.FirebaseAppError(error_1$1.AppErrorCodes.INVALID_CREDENTIAL, 'Failed to parse impersonated service account file: ' + error);
        }
    }
    constructor(json) {
        const sourceCredentials = json['source_credentials'];
        if (sourceCredentials) {
            copyAttr(this, sourceCredentials, 'clientId', 'client_id');
            copyAttr(this, sourceCredentials, 'clientSecret', 'client_secret');
            copyAttr(this, sourceCredentials, 'refreshToken', 'refresh_token');
            copyAttr(this, sourceCredentials, 'type', 'type');
        }
        let errorMessage;
        if (!util.isNonEmptyString(this.clientId)) {
            errorMessage = 'Impersonated Service Account must contain a "source_credentials.client_id" property.';
        }
        else if (!util.isNonEmptyString(this.clientSecret)) {
            errorMessage = 'Impersonated Service Account must contain a "source_credentials.client_secret" property.';
        }
        else if (!util.isNonEmptyString(this.refreshToken)) {
            errorMessage = 'Impersonated Service Account must contain a "source_credentials.refresh_token" property.';
        }
        else if (!util.isNonEmptyString(this.type)) {
            errorMessage = 'Impersonated Service Account must contain a "source_credentials.type" property.';
        }
        if (typeof errorMessage !== 'undefined') {
            throw new error_1$1.FirebaseAppError(error_1$1.AppErrorCodes.INVALID_CREDENTIAL, errorMessage);
        }
    }
}
/**
 * Checks if the given credential was loaded via the application default credentials mechanism. This
 * includes all ComputeEngineCredential instances, and the ServiceAccountCredential and RefreshTokenCredential
 * instances that were loaded from well-known files or environment variables, rather than being explicitly
 * instantiated.
 *
 * @param credential - The credential instance to check.
 */
function isApplicationDefault(credential) {
    return credential instanceof ComputeEngineCredential ||
        (credential instanceof ServiceAccountCredential && credential.implicit) ||
        (credential instanceof RefreshTokenCredential && credential.implicit) ||
        (credential instanceof ImpersonatedServiceAccountCredential && credential.implicit);
}
credentialInternal.isApplicationDefault = isApplicationDefault;
function getApplicationDefault(httpAgent) {
    if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
        return credentialFromFile(process.env.GOOGLE_APPLICATION_CREDENTIALS, httpAgent, false);
    }
    // It is OK to not have this file. If it is present, it must be valid.
    if (GCLOUD_CREDENTIAL_PATH) {
        const credential = credentialFromFile(GCLOUD_CREDENTIAL_PATH, httpAgent, true);
        if (credential)
            return credential;
    }
    return new ComputeEngineCredential(httpAgent);
}
credentialInternal.getApplicationDefault = getApplicationDefault;
/**
 * Copies the specified property from one object to another.
 *
 * If no property exists by the given "key", looks for a property identified by "alt", and copies it instead.
 * This can be used to implement behaviors such as "copy property myKey or my_key".
 *
 * @param to - Target object to copy the property into.
 * @param from - Source object to copy the property from.
 * @param key - Name of the property to copy.
 * @param alt - Alternative name of the property to copy.
 */
function copyAttr(to, from, key, alt) {
    const tmp = from[key] || from[alt];
    if (typeof tmp !== 'undefined') {
        to[key] = tmp;
    }
}
/**
 * Obtain a new OAuth2 token by making a remote service call.
 */
function requestAccessToken(client, request) {
    return client.send(request).then((resp) => {
        const json = resp.data;
        if (!json.access_token || !json.expires_in) {
            throw new error_1$1.FirebaseAppError(error_1$1.AppErrorCodes.INVALID_CREDENTIAL, `Unexpected response while fetching access token: ${JSON.stringify(json)}`);
        }
        return json;
    }).catch((err) => {
        throw new error_1$1.FirebaseAppError(error_1$1.AppErrorCodes.INVALID_CREDENTIAL, getErrorMessage(err));
    });
}
/**
 * Obtain a new OIDC token by making a remote service call.
 */
function requestIDToken(client, request) {
    return client.send(request).then((resp) => {
        if (!resp.text) {
            throw new error_1$1.FirebaseAppError(error_1$1.AppErrorCodes.INVALID_CREDENTIAL, 'Unexpected response while fetching id token: response.text is undefined');
        }
        return resp.text;
    }).catch((err) => {
        throw new error_1$1.FirebaseAppError(error_1$1.AppErrorCodes.INVALID_CREDENTIAL, getErrorMessage(err));
    });
}
/**
 * Constructs a human-readable error message from the given Error.
 */
function getErrorMessage(err) {
    const detail = (err instanceof api_request_1.RequestResponseError) ? getDetailFromResponse(err.response) : err.message;
    return `Error fetching access token: ${detail}`;
}
/**
 * Extracts details from the given HTTP error response, and returns a human-readable description. If
 * the response is JSON-formatted, looks up the error and error_description fields sent by the
 * Google Auth servers. Otherwise returns the entire response payload as the error detail.
 */
function getDetailFromResponse(response) {
    if (response.isJson() && response.data.error) {
        const json = response.data;
        let detail = json.error;
        if (json.error_description) {
            detail += ' (' + json.error_description + ')';
        }
        return detail;
    }
    return response.text || 'Missing error payload';
}
function credentialFromFile(filePath, httpAgent, ignoreMissing) {
    const credentialsFile = readCredentialFile(filePath, ignoreMissing);
    if (typeof credentialsFile !== 'object' || credentialsFile === null) {
        if (ignoreMissing) {
            return null;
        }
        throw new error_1$1.FirebaseAppError(error_1$1.AppErrorCodes.INVALID_CREDENTIAL, 'Failed to parse contents of the credentials file as an object');
    }
    if (credentialsFile.type === 'service_account') {
        return new ServiceAccountCredential(credentialsFile, httpAgent, true);
    }
    if (credentialsFile.type === 'authorized_user') {
        return new RefreshTokenCredential(credentialsFile, httpAgent, true);
    }
    if (credentialsFile.type === 'impersonated_service_account') {
        return new ImpersonatedServiceAccountCredential(credentialsFile, httpAgent, true);
    }
    throw new error_1$1.FirebaseAppError(error_1$1.AppErrorCodes.INVALID_CREDENTIAL, 'Invalid contents in the credentials file');
}
function readCredentialFile(filePath, ignoreMissing) {
    let fileText;
    try {
        fileText = fs.readFileSync(filePath, 'utf8');
    }
    catch (error) {
        if (ignoreMissing) {
            return null;
        }
        throw new error_1$1.FirebaseAppError(error_1$1.AppErrorCodes.INVALID_CREDENTIAL, `Failed to read credentials from file ${filePath}: ` + error);
    }
    try {
        return JSON.parse(fileText);
    }
    catch (error) {
        throw new error_1$1.FirebaseAppError(error_1$1.AppErrorCodes.INVALID_CREDENTIAL, 'Failed to parse contents of the credentials file as an object: ' + error);
    }
}

var name = "firebase-admin";
var version = "12.6.0";
var description = "Firebase admin SDK for Node.js";
var author = "Firebase <firebase-support@google.com> (https://firebase.google.com/)";
var license = "Apache-2.0";
var homepage = "https://firebase.google.com/";
var engines = {
	node: ">=14"
};
var scripts = {
	build: "gulp build",
	"build:tests": "gulp compile_test",
	prepare: "npm run build && npm run esm-wrap",
	lint: "run-p lint:src lint:test",
	test: "run-s lint test:unit",
	integration: "run-s build test:integration",
	"test:unit": "mocha test/unit/*.spec.ts --require ts-node/register",
	"test:integration": "mocha test/integration/*.ts --slow 5000 --timeout 20000 --require ts-node/register",
	"test:coverage": "nyc npm run test:unit",
	"lint:src": "eslint src/ --ext .ts",
	"lint:test": "eslint test/ --ext .ts",
	apidocs: "run-s api-extractor:local api-documenter",
	"api-extractor": "node generate-reports.js",
	"api-extractor:local": "npm run build && node generate-reports.js --local",
	"esm-wrap": "node generate-esm-wrapper.js",
	"api-documenter": "run-s api-documenter:markdown api-documenter:toc api-documenter:post",
	"api-documenter:markdown": "api-documenter-fire markdown --input temp --output docgen/markdown -s --project admin",
	"api-documenter:toc": "api-documenter-fire toc --input temp --output docgen/markdown -p /docs/reference/admin/node -s",
	"api-documenter:post": "node docgen/post-process.js"
};
var nyc = {
	extension: [
		".ts"
	],
	include: [
		"src"
	],
	exclude: [
		"**/*.d.ts"
	],
	all: true
};
var keywords = [
	"admin",
	"database",
	"Firebase",
	"realtime",
	"authentication"
];
var repository = {
	type: "git",
	url: "https://github.com/firebase/firebase-admin-node"
};
var main = "lib/index.js";
var files = [
	"lib/",
	"LICENSE",
	"README.md",
	"package.json"
];
var types = "./lib/index.d.ts";
var typesVersions = {
	"*": {
		app: [
			"lib/app"
		],
		"app-check": [
			"lib/app-check"
		],
		auth: [
			"lib/auth"
		],
		eventarc: [
			"lib/eventarc"
		],
		extensions: [
			"lib/extensions"
		],
		database: [
			"lib/database"
		],
		"data-connect": [
			"lib/data-connect"
		],
		firestore: [
			"lib/firestore"
		],
		functions: [
			"lib/functions"
		],
		installations: [
			"lib/installations"
		],
		"instance-id": [
			"lib/instance-id"
		],
		"machine-learning": [
			"lib/machine-learning"
		],
		messaging: [
			"lib/messaging"
		],
		"project-management": [
			"lib/project-management"
		],
		"remote-config": [
			"lib/remote-config"
		],
		"security-rules": [
			"lib/security-rules"
		],
		storage: [
			"lib/storage"
		]
	}
};
var exports = {
	".": "./lib/index.js",
	"./app": {
		types: "./lib/app/index.d.ts",
		require: "./lib/app/index.js",
		"import": "./lib/esm/app/index.js"
	},
	"./app-check": {
		types: "./lib/app-check/index.d.ts",
		require: "./lib/app-check/index.js",
		"import": "./lib/esm/app-check/index.js"
	},
	"./auth": {
		types: "./lib/auth/index.d.ts",
		require: "./lib/auth/index.js",
		"import": "./lib/esm/auth/index.js"
	},
	"./database": {
		types: "./lib/database/index.d.ts",
		require: "./lib/database/index.js",
		"import": "./lib/esm/database/index.js"
	},
	"./data-connect": {
		types: "./lib/data-connect/index.d.ts",
		require: "./lib/data-connect/index.js",
		"import": "./lib/esm/data-connect/index.js"
	},
	"./eventarc": {
		types: "./lib/eventarc/index.d.ts",
		require: "./lib/eventarc/index.js",
		"import": "./lib/esm/eventarc/index.js"
	},
	"./extensions": {
		types: "./lib/extensions/index.d.ts",
		require: "./lib/extensions/index.js",
		"import": "./lib/esm/extensions/index.js"
	},
	"./firestore": {
		types: "./lib/firestore/index.d.ts",
		require: "./lib/firestore/index.js",
		"import": "./lib/esm/firestore/index.js"
	},
	"./functions": {
		types: "./lib/functions/index.d.ts",
		require: "./lib/functions/index.js",
		"import": "./lib/esm/functions/index.js"
	},
	"./installations": {
		types: "./lib/installations/index.d.ts",
		require: "./lib/installations/index.js",
		"import": "./lib/esm/installations/index.js"
	},
	"./instance-id": {
		types: "./lib/instance-id/index.d.ts",
		require: "./lib/instance-id/index.js",
		"import": "./lib/esm/instance-id/index.js"
	},
	"./machine-learning": {
		types: "./lib/machine-learning/index.d.ts",
		require: "./lib/machine-learning/index.js",
		"import": "./lib/esm/machine-learning/index.js"
	},
	"./messaging": {
		types: "./lib/messaging/index.d.ts",
		require: "./lib/messaging/index.js",
		"import": "./lib/esm/messaging/index.js"
	},
	"./project-management": {
		types: "./lib/project-management/index.d.ts",
		require: "./lib/project-management/index.js",
		"import": "./lib/esm/project-management/index.js"
	},
	"./remote-config": {
		types: "./lib/remote-config/index.d.ts",
		require: "./lib/remote-config/index.js",
		"import": "./lib/esm/remote-config/index.js"
	},
	"./security-rules": {
		types: "./lib/security-rules/index.d.ts",
		require: "./lib/security-rules/index.js",
		"import": "./lib/esm/security-rules/index.js"
	},
	"./storage": {
		types: "./lib/storage/index.d.ts",
		require: "./lib/storage/index.js",
		"import": "./lib/esm/storage/index.js"
	}
};
var dependencies = {
	"@fastify/busboy": "^3.0.0",
	"@firebase/database-compat": "^1.0.2",
	"@firebase/database-types": "^1.0.0",
	"@types/node": "^22.0.1",
	"farmhash-modern": "^1.1.0",
	jsonwebtoken: "^9.0.0",
	"jwks-rsa": "^3.1.0",
	"node-forge": "^1.3.1",
	uuid: "^10.0.0"
};
var optionalDependencies = {
	"@google-cloud/firestore": "^7.7.0",
	"@google-cloud/storage": "^7.7.0"
};
var devDependencies = {
	"@firebase/api-documenter": "^0.4.0",
	"@firebase/app-compat": "^0.2.1",
	"@firebase/auth-compat": "^0.4.1",
	"@firebase/auth-types": "^0.12.0",
	"@microsoft/api-extractor": "^7.11.2",
	"@types/bcrypt": "^5.0.0",
	"@types/chai": "^4.0.0",
	"@types/chai-as-promised": "^7.1.0",
	"@types/firebase-token-generator": "^2.0.28",
	"@types/jsonwebtoken": "8.5.1",
	"@types/lodash": "^4.14.104",
	"@types/minimist": "^1.2.2",
	"@types/mocha": "^10.0.0",
	"@types/nock": "^11.1.0",
	"@types/request": "^2.47.0",
	"@types/request-promise": "^4.1.41",
	"@types/sinon": "^17.0.2",
	"@types/sinon-chai": "^3.0.0",
	"@types/uuid": "^10.0.0",
	"@typescript-eslint/eslint-plugin": "^5.62.0",
	"@typescript-eslint/parser": "^5.62.0",
	bcrypt: "^5.0.0",
	chai: "^4.2.0",
	"chai-as-promised": "^7.0.0",
	"chai-exclude": "^2.1.0",
	chalk: "^4.1.1",
	"child-process-promise": "^2.2.1",
	del: "^6.0.0",
	eslint: "^8.12.0",
	"firebase-token-generator": "^2.0.0",
	gulp: "^5.0.0",
	"gulp-filter": "^7.0.0",
	"gulp-header": "^2.0.9",
	"gulp-typescript": "^5.0.1",
	"http-message-parser": "^0.0.34",
	lodash: "^4.17.15",
	minimist: "^1.2.6",
	mocha: "^10.0.0",
	mz: "^2.7.0",
	nock: "^13.0.0",
	"npm-run-all": "^4.1.5",
	nyc: "^17.0.0",
	request: "^2.75.0",
	"request-promise": "^4.1.1",
	"run-sequence": "^2.2.1",
	sinon: "^18.0.0",
	"sinon-chai": "^3.0.0",
	"ts-node": "^10.2.0",
	typescript: "5.1.6",
	yargs: "^17.0.1"
};
const require$$2 = {
	name: name,
	version: version,
	description: description,
	author: author,
	license: license,
	homepage: homepage,
	engines: engines,
	scripts: scripts,
	nyc: nyc,
	keywords: keywords,
	repository: repository,
	main: main,
	files: files,
	types: types,
	typesVersions: typesVersions,
	exports: exports,
	dependencies: dependencies,
	optionalDependencies: optionalDependencies,
	devDependencies: devDependencies
};

/*! firebase-admin v12.6.0 */
/*!
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(utils, "__esModule", { value: true });
utils.parseResourceName = utils.transformMillisecondsToSecondsString = utils.generateUpdateMask = utils.formatString = utils.toWebSafeBase64 = utils.findServiceAccountEmail = utils.getExplicitServiceAccountEmail = utils.findProjectId = utils.getExplicitProjectId = utils.addReadonlyGetter = utils.renameProperties = utils.getSdkVersion = void 0;
const credential_internal_1$2 = credentialInternal;
const validator$1 = validator$3;
let sdkVersion;
// TODO: Move to firebase-admin/app as an internal member.
function getSdkVersion() {
    if (!sdkVersion) {
        const { version } = require$$2; // eslint-disable-line @typescript-eslint/no-var-requires
        sdkVersion = version;
    }
    return sdkVersion;
}
utils.getSdkVersion = getSdkVersion;
/**
 * Renames properties on an object given a mapping from old to new property names.
 *
 * For example, this can be used to map underscore_cased properties to camelCase.
 *
 * @param obj - The object whose properties to rename.
 * @param keyMap - The mapping from old to new property names.
 */
function renameProperties(obj, keyMap) {
    Object.keys(keyMap).forEach((oldKey) => {
        if (oldKey in obj) {
            const newKey = keyMap[oldKey];
            // The old key's value takes precedence over the new key's value.
            obj[newKey] = obj[oldKey];
            delete obj[oldKey];
        }
    });
}
utils.renameProperties = renameProperties;
/**
 * Defines a new read-only property directly on an object and returns the object.
 *
 * @param obj - The object on which to define the property.
 * @param prop - The name of the property to be defined or modified.
 * @param value - The value associated with the property.
 */
function addReadonlyGetter(obj, prop, value) {
    Object.defineProperty(obj, prop, {
        value,
        // Make this property read-only.
        writable: false,
        // Include this property during enumeration of obj's properties.
        enumerable: true,
    });
}
utils.addReadonlyGetter = addReadonlyGetter;
/**
 * Returns the Google Cloud project ID associated with a Firebase app, if it's explicitly
 * specified in either the Firebase app options, credentials or the local environment.
 * Otherwise returns null.
 *
 * @param app - A Firebase app to get the project ID from.
 *
 * @returns A project ID string or null.
 */
function getExplicitProjectId(app) {
    const options = app.options;
    if (validator$1.isNonEmptyString(options.projectId)) {
        return options.projectId;
    }
    const credential = app.options.credential;
    if (credential instanceof credential_internal_1$2.ServiceAccountCredential) {
        return credential.projectId;
    }
    const projectId = process.env.GOOGLE_CLOUD_PROJECT || process.env.GCLOUD_PROJECT;
    if (validator$1.isNonEmptyString(projectId)) {
        return projectId;
    }
    return null;
}
utils.getExplicitProjectId = getExplicitProjectId;
/**
 * Determines the Google Cloud project ID associated with a Firebase app. This method
 * first checks if a project ID is explicitly specified in either the Firebase app options,
 * credentials or the local environment in that order. If no explicit project ID is
 * configured, but the SDK has been initialized with ComputeEngineCredentials, this
 * method attempts to discover the project ID from the local metadata service.
 *
 * @param app - A Firebase app to get the project ID from.
 *
 * @returns A project ID string or null.
 */
function findProjectId(app) {
    const projectId = getExplicitProjectId(app);
    if (projectId) {
        return Promise.resolve(projectId);
    }
    const credential = app.options.credential;
    if (credential instanceof credential_internal_1$2.ComputeEngineCredential) {
        return credential.getProjectId();
    }
    return Promise.resolve(null);
}
utils.findProjectId = findProjectId;
/**
 * Returns the service account email associated with a Firebase app, if it's explicitly
 * specified in either the Firebase app options, credentials or the local environment.
 * Otherwise returns null.
 *
 * @param app - A Firebase app to get the service account email from.
 *
 * @returns A service account email string or null.
 */
function getExplicitServiceAccountEmail(app) {
    const options = app.options;
    if (validator$1.isNonEmptyString(options.serviceAccountId)) {
        return options.serviceAccountId;
    }
    const credential = app.options.credential;
    if (credential instanceof credential_internal_1$2.ServiceAccountCredential) {
        return credential.clientEmail;
    }
    return null;
}
utils.getExplicitServiceAccountEmail = getExplicitServiceAccountEmail;
/**
 * Determines the service account email associated with a Firebase app. This method first
 * checks if a service account email is explicitly specified in either the Firebase app options,
 * credentials or the local environment in that order. If no explicit service account email is
 * configured, but the SDK has been initialized with ComputeEngineCredentials, this
 * method attempts to discover the service account email from the local metadata service.
 *
 * @param app - A Firebase app to get the service account email from.
 *
 * @returns A service account email ID string or null.
 */
function findServiceAccountEmail(app) {
    const accountId = getExplicitServiceAccountEmail(app);
    if (accountId) {
        return Promise.resolve(accountId);
    }
    const credential = app.options.credential;
    if (credential instanceof credential_internal_1$2.ComputeEngineCredential) {
        return credential.getServiceAccountEmail();
    }
    return Promise.resolve(null);
}
utils.findServiceAccountEmail = findServiceAccountEmail;
/**
 * Encodes data using web-safe-base64.
 *
 * @param data - The raw data byte input.
 * @returns The base64-encoded result.
 */
function toWebSafeBase64(data) {
    return data.toString('base64').replace(/\//g, '_').replace(/\+/g, '-');
}
utils.toWebSafeBase64 = toWebSafeBase64;
/**
 * Formats a string of form 'project/{projectId}/{api}' and replaces
 * with corresponding arguments {projectId: '1234', api: 'resource'}
 * and returns output: 'project/1234/resource'.
 *
 * @param str - The original string where the param need to be
 *     replaced.
 * @param params - The optional parameters to replace in the
 *     string.
 * @returns The resulting formatted string.
 */
function formatString(str, params) {
    let formatted = str;
    Object.keys(params || {}).forEach((key) => {
        formatted = formatted.replace(new RegExp('{' + key + '}', 'g'), params[key]);
    });
    return formatted;
}
utils.formatString = formatString;
/**
 * Generates the update mask for the provided object.
 * Note this will ignore the last key with value undefined.
 *
 * @param obj - The object to generate the update mask for.
 * @param terminalPaths - The optional map of keys for maximum paths to traverse.
 *      Nested objects beyond that path will be ignored. This is useful for
 *      keys with variable object values.
 * @param root - The path so far.
 * @returns The computed update mask list.
 */
function generateUpdateMask(obj, terminalPaths = [], root = '') {
    const updateMask = [];
    if (!validator$1.isNonNullObject(obj)) {
        return updateMask;
    }
    for (const key in obj) {
        if (typeof obj[key] !== 'undefined') {
            const nextPath = root ? `${root}.${key}` : key;
            // We hit maximum path.
            // Consider switching to Set<string> if the list grows too large.
            if (terminalPaths.indexOf(nextPath) !== -1) {
                // Add key and stop traversing this branch.
                updateMask.push(key);
            }
            else {
                const maskList = generateUpdateMask(obj[key], terminalPaths, nextPath);
                if (maskList.length > 0) {
                    maskList.forEach((mask) => {
                        updateMask.push(`${key}.${mask}`);
                    });
                }
                else {
                    updateMask.push(key);
                }
            }
        }
    }
    return updateMask;
}
utils.generateUpdateMask = generateUpdateMask;
/**
 * Transforms milliseconds to a protobuf Duration type string.
 * Returns the duration in seconds with up to nine fractional
 * digits, terminated by 's'. Example: "3 seconds 0 nano seconds as 3s,
 * 3 seconds 1 nano seconds as 3.000000001s".
 *
 * @param milliseconds - The duration in milliseconds.
 * @returns The resulting formatted string in seconds with up to nine fractional
 * digits, terminated by 's'.
 */
function transformMillisecondsToSecondsString(milliseconds) {
    let duration;
    const seconds = Math.floor(milliseconds / 1000);
    const nanos = Math.floor((milliseconds - seconds * 1000) * 1000000);
    if (nanos > 0) {
        let nanoString = nanos.toString();
        while (nanoString.length < 9) {
            nanoString = '0' + nanoString;
        }
        duration = `${seconds}.${nanoString}s`;
    }
    else {
        duration = `${seconds}s`;
    }
    return duration;
}
utils.transformMillisecondsToSecondsString = transformMillisecondsToSecondsString;
/**
 * Parses the top level resources of a given resource name.
 * Supports both full and partial resources names, example:
 * `locations/{location}/functions/{functionName}`,
 * `projects/{project}/locations/{location}/functions/{functionName}`, or {functionName}
 * Does not support deeply nested resource names.
 *
 * @param resourceName - The resource name string.
 * @param resourceIdKey - The key of the resource name to be parsed.
 * @returns A parsed resource name object.
 */
function parseResourceName(resourceName, resourceIdKey) {
    if (!resourceName.includes('/')) {
        return { resourceId: resourceName };
    }
    const CHANNEL_NAME_REGEX = new RegExp(`^(projects/([^/]+)/)?locations/([^/]+)/${resourceIdKey}/([^/]+)$`);
    const match = CHANNEL_NAME_REGEX.exec(resourceName);
    if (match === null) {
        throw new Error('Invalid resource name format.');
    }
    const projectId = match[2];
    const locationId = match[3];
    const resourceId = match[4];
    return { projectId, locationId, resourceId };
}
utils.parseResourceName = parseResourceName;

var lifecycle = {};

var firebaseApp = {};

/*! firebase-admin v12.6.0 */
/*!
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(firebaseApp, "__esModule", { value: true });
firebaseApp.FirebaseApp = firebaseApp.FirebaseAppInternals = void 0;
const credential_internal_1$1 = credentialInternal;
const validator = validator$3;
const deep_copy_1 = deepCopy$1;
const error_1 = error;
const TOKEN_EXPIRY_THRESHOLD_MILLIS = 5 * 60 * 1000;
/**
 * Internals of a FirebaseApp instance.
 */
class FirebaseAppInternals {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    constructor(credential_) {
        this.credential_ = credential_;
        this.tokenListeners_ = [];
        this.isRefreshing = false;
    }
    getToken(forceRefresh = false) {
        if (forceRefresh || this.shouldRefresh()) {
            this.promiseToCachedToken_ = this.refreshToken();
        }
        return this.promiseToCachedToken_;
    }
    getCachedToken() {
        return this.cachedToken_ || null;
    }
    refreshToken() {
        this.isRefreshing = true;
        return Promise.resolve(this.credential_.getAccessToken())
            .then((result) => {
            // Since the developer can provide the credential implementation, we want to weakly verify
            // the return type until the type is properly exported.
            if (!validator.isNonNullObject(result) ||
                typeof result.expires_in !== 'number' ||
                typeof result.access_token !== 'string') {
                throw new error_1.FirebaseAppError(error_1.AppErrorCodes.INVALID_CREDENTIAL, `Invalid access token generated: "${JSON.stringify(result)}". Valid access ` +
                    'tokens must be an object with the "expires_in" (number) and "access_token" ' +
                    '(string) properties.');
            }
            const token = {
                accessToken: result.access_token,
                expirationTime: Date.now() + (result.expires_in * 1000),
            };
            if (!this.cachedToken_
                || this.cachedToken_.accessToken !== token.accessToken
                || this.cachedToken_.expirationTime !== token.expirationTime) {
                // Update the cache before firing listeners. Listeners may directly query the
                // cached token state.
                this.cachedToken_ = token;
                this.tokenListeners_.forEach((listener) => {
                    listener(token.accessToken);
                });
            }
            return token;
        })
            .catch((error) => {
            let errorMessage = (typeof error === 'string') ? error : error.message;
            errorMessage = 'Credential implementation provided to initializeApp() via the ' +
                '"credential" property failed to fetch a valid Google OAuth2 access token with the ' +
                `following error: "${errorMessage}".`;
            if (errorMessage.indexOf('invalid_grant') !== -1) {
                errorMessage += ' There are two likely causes: (1) your server time is not properly ' +
                    'synced or (2) your certificate key file has been revoked. To solve (1), re-sync the ' +
                    'time on your server. To solve (2), make sure the key ID for your key file is still ' +
                    'present at https://console.firebase.google.com/iam-admin/serviceaccounts/project. If ' +
                    'not, generate a new key file at ' +
                    'https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk.';
            }
            throw new error_1.FirebaseAppError(error_1.AppErrorCodes.INVALID_CREDENTIAL, errorMessage);
        })
            .finally(() => {
            this.isRefreshing = false;
        });
    }
    shouldRefresh() {
        return (!this.cachedToken_ || (this.cachedToken_.expirationTime - Date.now()) <= TOKEN_EXPIRY_THRESHOLD_MILLIS)
            && !this.isRefreshing;
    }
    /**
     * Adds a listener that is called each time a token changes.
     *
     * @param listener - The listener that will be called with each new token.
     */
    addAuthTokenListener(listener) {
        this.tokenListeners_.push(listener);
        if (this.cachedToken_) {
            listener(this.cachedToken_.accessToken);
        }
    }
    /**
     * Removes a token listener.
     *
     * @param listener - The listener to remove.
     */
    removeAuthTokenListener(listener) {
        this.tokenListeners_ = this.tokenListeners_.filter((other) => other !== listener);
    }
}
firebaseApp.FirebaseAppInternals = FirebaseAppInternals;
/**
 * Global context object for a collection of services using a shared authentication state.
 *
 * @internal
 */
class FirebaseApp {
    constructor(options, name, appStore) {
        this.appStore = appStore;
        this.services_ = {};
        this.isDeleted_ = false;
        this.name_ = name;
        this.options_ = (0, deep_copy_1.deepCopy)(options);
        if (!validator.isNonNullObject(this.options_)) {
            throw new error_1.FirebaseAppError(error_1.AppErrorCodes.INVALID_APP_OPTIONS, 'Invalid Firebase app options passed as the first argument to initializeApp() for the ' +
                `app named "${this.name_}". Options must be a non-null object.`);
        }
        const hasCredential = ('credential' in this.options_);
        if (!hasCredential) {
            this.options_.credential = (0, credential_internal_1$1.getApplicationDefault)(this.options_.httpAgent);
        }
        const credential = this.options_.credential;
        if (typeof credential !== 'object' || credential === null || typeof credential.getAccessToken !== 'function') {
            throw new error_1.FirebaseAppError(error_1.AppErrorCodes.INVALID_APP_OPTIONS, 'Invalid Firebase app options passed as the first argument to initializeApp() for the ' +
                `app named "${this.name_}". The "credential" property must be an object which implements ` +
                'the Credential interface.');
        }
        this.INTERNAL = new FirebaseAppInternals(credential);
    }
    /**
     * Returns the name of the FirebaseApp instance.
     *
     * @returns The name of the FirebaseApp instance.
     */
    get name() {
        this.checkDestroyed_();
        return this.name_;
    }
    /**
     * Returns the options for the FirebaseApp instance.
     *
     * @returns The options for the FirebaseApp instance.
     */
    get options() {
        this.checkDestroyed_();
        return (0, deep_copy_1.deepCopy)(this.options_);
    }
    /**
     * @internal
     */
    getOrInitService(name, init) {
        return this.ensureService_(name, () => init(this));
    }
    /**
     * Deletes the FirebaseApp instance.
     *
     * @returns An empty Promise fulfilled once the FirebaseApp instance is deleted.
     */
    delete() {
        this.checkDestroyed_();
        // Also remove the instance from the AppStore. This is needed to support the existing
        // app.delete() use case. In the future we can remove this API, and deleteApp() will
        // become the only way to tear down an App.
        this.appStore?.removeApp(this.name);
        return Promise.all(Object.keys(this.services_).map((serviceName) => {
            const service = this.services_[serviceName];
            if (isStateful(service)) {
                return service.delete();
            }
            return Promise.resolve();
        })).then(() => {
            this.services_ = {};
            this.isDeleted_ = true;
        });
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    ensureService_(serviceName, initializer) {
        this.checkDestroyed_();
        if (!(serviceName in this.services_)) {
            this.services_[serviceName] = initializer();
        }
        return this.services_[serviceName];
    }
    /**
     * Throws an Error if the FirebaseApp instance has already been deleted.
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    checkDestroyed_() {
        if (this.isDeleted_) {
            throw new error_1.FirebaseAppError(error_1.AppErrorCodes.APP_DELETED, `Firebase app named "${this.name_}" has already been deleted.`);
        }
    }
}
firebaseApp.FirebaseApp = FirebaseApp;
function isStateful(service) {
    return typeof service.delete === 'function';
}

/*! firebase-admin v12.6.0 */

(function (exports) {
	/*!
	 * @license
	 * Copyright 2021 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.FIREBASE_CONFIG_VAR = exports.deleteApp = exports.getApps = exports.getApp = exports.initializeApp = exports.defaultAppStore = exports.AppStore = void 0;
	const fs = require$$0;
	const validator = validator$3;
	const error_1 = error;
	const credential_internal_1 = credentialInternal;
	const firebase_app_1 = firebaseApp;
	const DEFAULT_APP_NAME = '[DEFAULT]';
	class AppStore {
	    constructor() {
	        this.appStore = new Map();
	    }
	    initializeApp(options, appName = DEFAULT_APP_NAME) {
	        if (typeof options === 'undefined') {
	            options = loadOptionsFromEnvVar();
	            options.credential = (0, credential_internal_1.getApplicationDefault)();
	        }
	        if (typeof appName !== 'string' || appName === '') {
	            throw new error_1.FirebaseAppError(error_1.AppErrorCodes.INVALID_APP_NAME, `Invalid Firebase app name "${appName}" provided. App name must be a non-empty string.`);
	        }
	        else if (this.appStore.has(appName)) {
	            if (appName === DEFAULT_APP_NAME) {
	                throw new error_1.FirebaseAppError(error_1.AppErrorCodes.DUPLICATE_APP, 'The default Firebase app already exists. This means you called initializeApp() ' +
	                    'more than once without providing an app name as the second argument. In most cases ' +
	                    'you only need to call initializeApp() once. But if you do want to initialize ' +
	                    'multiple apps, pass a second argument to initializeApp() to give each app a unique ' +
	                    'name.');
	            }
	            else {
	                throw new error_1.FirebaseAppError(error_1.AppErrorCodes.DUPLICATE_APP, `Firebase app named "${appName}" already exists. This means you called initializeApp() ` +
	                    'more than once with the same app name as the second argument. Make sure you provide a ' +
	                    'unique name every time you call initializeApp().');
	            }
	        }
	        const app = new firebase_app_1.FirebaseApp(options, appName, this);
	        this.appStore.set(app.name, app);
	        return app;
	    }
	    getApp(appName = DEFAULT_APP_NAME) {
	        if (typeof appName !== 'string' || appName === '') {
	            throw new error_1.FirebaseAppError(error_1.AppErrorCodes.INVALID_APP_NAME, `Invalid Firebase app name "${appName}" provided. App name must be a non-empty string.`);
	        }
	        else if (!this.appStore.has(appName)) {
	            let errorMessage = (appName === DEFAULT_APP_NAME)
	                ? 'The default Firebase app does not exist. ' : `Firebase app named "${appName}" does not exist. `;
	            errorMessage += 'Make sure you call initializeApp() before using any of the Firebase services.';
	            throw new error_1.FirebaseAppError(error_1.AppErrorCodes.NO_APP, errorMessage);
	        }
	        return this.appStore.get(appName);
	    }
	    getApps() {
	        // Return a copy so the caller cannot mutate the array
	        return Array.from(this.appStore.values());
	    }
	    deleteApp(app) {
	        if (typeof app !== 'object' || app === null || !('options' in app)) {
	            throw new error_1.FirebaseAppError(error_1.AppErrorCodes.INVALID_ARGUMENT, 'Invalid app argument.');
	        }
	        // Make sure the given app already exists.
	        const existingApp = getApp(app.name);
	        // Delegate delete operation to the App instance itself. That will also remove the App
	        // instance from the AppStore.
	        return existingApp.delete();
	    }
	    clearAllApps() {
	        const promises = [];
	        this.getApps().forEach((app) => {
	            promises.push(this.deleteApp(app));
	        });
	        return Promise.all(promises).then();
	    }
	    /**
	     * Removes the specified App instance from the store. This is currently called by the
	     * {@link FirebaseApp.delete} method. Can be removed once the app deletion is handled
	     * entirely by the {@link deleteApp} top-level function.
	     */
	    removeApp(appName) {
	        this.appStore.delete(appName);
	    }
	}
	exports.AppStore = AppStore;
	exports.defaultAppStore = new AppStore();
	function initializeApp(options, appName = DEFAULT_APP_NAME) {
	    return exports.defaultAppStore.initializeApp(options, appName);
	}
	exports.initializeApp = initializeApp;
	function getApp(appName = DEFAULT_APP_NAME) {
	    return exports.defaultAppStore.getApp(appName);
	}
	exports.getApp = getApp;
	function getApps() {
	    return exports.defaultAppStore.getApps();
	}
	exports.getApps = getApps;
	/**
	 * Renders this given `App` unusable and frees the resources of
	 * all associated services (though it does *not* clean up any backend
	 * resources). When running the SDK locally, this method
	 * must be called to ensure graceful termination of the process.
	 *
	 * @example
	 * ```javascript
	 * deleteApp(app)
	 *   .then(function() {
	 *     console.log("App deleted successfully");
	 *   })
	 *   .catch(function(error) {
	 *     console.log("Error deleting app:", error);
	 *   });
	 * ```
	 */
	function deleteApp(app) {
	    return exports.defaultAppStore.deleteApp(app);
	}
	exports.deleteApp = deleteApp;
	/**
	 * Constant holding the environment variable name with the default config.
	 * If the environment variable contains a string that starts with '{' it will be parsed as JSON,
	 * otherwise it will be assumed to be pointing to a file.
	 */
	exports.FIREBASE_CONFIG_VAR = 'FIREBASE_CONFIG';
	/**
	 * Parse the file pointed to by the FIREBASE_CONFIG_VAR, if it exists.
	 * Or if the FIREBASE_CONFIG_ENV contains a valid JSON object, parse it directly.
	 * If the environment variable contains a string that starts with '{' it will be parsed as JSON,
	 * otherwise it will be assumed to be pointing to a file.
	 */
	function loadOptionsFromEnvVar() {
	    const config = process.env[exports.FIREBASE_CONFIG_VAR];
	    if (!validator.isNonEmptyString(config)) {
	        return {};
	    }
	    try {
	        const contents = config.startsWith('{') ? config : fs.readFileSync(config, 'utf8');
	        return JSON.parse(contents);
	    }
	    catch (error) {
	        // Throw a nicely formed error message if the file contents cannot be parsed
	        throw new error_1.FirebaseAppError(error_1.AppErrorCodes.INVALID_APP_OPTIONS, 'Failed to parse app options file: ' + error);
	    }
	} 
} (lifecycle));

var credentialFactory = {};

/*! firebase-admin v12.6.0 */
/*!
 * @license
 * Copyright 2021 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(credentialFactory, "__esModule", { value: true });
credentialFactory.clearGlobalAppDefaultCred = credentialFactory.refreshToken = credentialFactory.cert = credentialFactory.applicationDefault = void 0;
const credential_internal_1 = credentialInternal;
let globalAppDefaultCred;
const globalCertCreds = {};
const globalRefreshTokenCreds = {};
/**
 * Returns a credential created from the
 * {@link https://developers.google.com/identity/protocols/application-default-credentials |
 * Google Application Default Credentials}
 * that grants admin access to Firebase services. This credential can be used
 * in the call to {@link firebase-admin.app#initializeApp}.
 *
 * Google Application Default Credentials are available on any Google
 * infrastructure, such as Google App Engine and Google Compute Engine.
 *
 * See
 * {@link https://firebase.google.com/docs/admin/setup#initialize_the_sdk | Initialize the SDK}
 * for more details.
 *
 * @example
 * ```javascript
 * initializeApp({
 *   credential: applicationDefault(),
 *   databaseURL: "https://<DATABASE_NAME>.firebaseio.com"
 * });
 * ```
 *
 * @param httpAgent - Optional {@link https://nodejs.org/api/http.html#http_class_http_agent | HTTP Agent}
 *   to be used when retrieving access tokens from Google token servers.
 *
 * @returns A credential authenticated via Google
 *   Application Default Credentials that can be used to initialize an app.
 */
function applicationDefault(httpAgent) {
    if (typeof globalAppDefaultCred === 'undefined') {
        globalAppDefaultCred = (0, credential_internal_1.getApplicationDefault)(httpAgent);
    }
    return globalAppDefaultCred;
}
credentialFactory.applicationDefault = applicationDefault;
/**
 * Returns a credential created from the provided service account that grants
 * admin access to Firebase services. This credential can be used in the call
 * to {@link firebase-admin.app#initializeApp}.
 *
 * See
 * {@link https://firebase.google.com/docs/admin/setup#initialize_the_sdk | Initialize the SDK}
 * for more details.
 *
 * @example
 * ```javascript
 * // Providing a path to a service account key JSON file
 * const serviceAccount = require("path/to/serviceAccountKey.json");
 * initializeApp({
 *   credential: cert(serviceAccount),
 *   databaseURL: "https://<DATABASE_NAME>.firebaseio.com"
 * });
 * ```
 *
 * @example
 * ```javascript
 * // Providing a service account object inline
 * initializeApp({
 *   credential: cert({
 *     projectId: "<PROJECT_ID>",
 *     clientEmail: "foo@<PROJECT_ID>.iam.gserviceaccount.com",
 *     privateKey: "-----BEGIN PRIVATE KEY-----<KEY>-----END PRIVATE KEY-----\n"
 *   }),
 *   databaseURL: "https://<DATABASE_NAME>.firebaseio.com"
 * });
 * ```
 *
 * @param serviceAccountPathOrObject - The path to a service
 *   account key JSON file or an object representing a service account key.
 * @param httpAgent - Optional {@link https://nodejs.org/api/http.html#http_class_http_agent | HTTP Agent}
 *   to be used when retrieving access tokens from Google token servers.
 *
 * @returns A credential authenticated via the
 *   provided service account that can be used to initialize an app.
 */
function cert$1(serviceAccountPathOrObject, httpAgent) {
    const stringifiedServiceAccount = JSON.stringify(serviceAccountPathOrObject);
    if (!(stringifiedServiceAccount in globalCertCreds)) {
        globalCertCreds[stringifiedServiceAccount] = new credential_internal_1.ServiceAccountCredential(serviceAccountPathOrObject, httpAgent);
    }
    return globalCertCreds[stringifiedServiceAccount];
}
credentialFactory.cert = cert$1;
/**
 * Returns a credential created from the provided refresh token that grants
 * admin access to Firebase services. This credential can be used in the call
 * to {@link firebase-admin.app#initializeApp}.
 *
 * See
 * {@link https://firebase.google.com/docs/admin/setup#initialize_the_sdk | Initialize the SDK}
 * for more details.
 *
 * @example
 * ```javascript
 * // Providing a path to a refresh token JSON file
 * const refreshToken = require("path/to/refreshToken.json");
 * initializeApp({
 *   credential: refreshToken(refreshToken),
 *   databaseURL: "https://<DATABASE_NAME>.firebaseio.com"
 * });
 * ```
 *
 * @param refreshTokenPathOrObject - The path to a Google
 *   OAuth2 refresh token JSON file or an object representing a Google OAuth2
 *   refresh token.
 * @param httpAgent - Optional {@link https://nodejs.org/api/http.html#http_class_http_agent | HTTP Agent}
 *   to be used when retrieving access tokens from Google token servers.
 *
 * @returns A credential authenticated via the
 *   provided service account that can be used to initialize an app.
 */
function refreshToken(refreshTokenPathOrObject, httpAgent) {
    const stringifiedRefreshToken = JSON.stringify(refreshTokenPathOrObject);
    if (!(stringifiedRefreshToken in globalRefreshTokenCreds)) {
        globalRefreshTokenCreds[stringifiedRefreshToken] = new credential_internal_1.RefreshTokenCredential(refreshTokenPathOrObject, httpAgent);
    }
    return globalRefreshTokenCreds[stringifiedRefreshToken];
}
credentialFactory.refreshToken = refreshToken;
/**
 * Clears the global ADC cache. Exported for testing.
 */
function clearGlobalAppDefaultCred() {
    globalAppDefaultCred = undefined;
}
credentialFactory.clearGlobalAppDefaultCred = clearGlobalAppDefaultCred;

/*! firebase-admin v12.6.0 */

(function (exports) {
	/*!
	 * @license
	 * Copyright 2021 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SDK_VERSION = exports.AppErrorCodes = exports.FirebaseAppError = exports.refreshToken = exports.cert = exports.applicationDefault = exports.deleteApp = exports.getApps = exports.getApp = exports.initializeApp = void 0;
	const utils_1 = utils;
	var lifecycle_1 = lifecycle;
	Object.defineProperty(exports, "initializeApp", { enumerable: true, get: function () { return lifecycle_1.initializeApp; } });
	Object.defineProperty(exports, "getApp", { enumerable: true, get: function () { return lifecycle_1.getApp; } });
	Object.defineProperty(exports, "getApps", { enumerable: true, get: function () { return lifecycle_1.getApps; } });
	Object.defineProperty(exports, "deleteApp", { enumerable: true, get: function () { return lifecycle_1.deleteApp; } });
	var credential_factory_1 = credentialFactory;
	Object.defineProperty(exports, "applicationDefault", { enumerable: true, get: function () { return credential_factory_1.applicationDefault; } });
	Object.defineProperty(exports, "cert", { enumerable: true, get: function () { return credential_factory_1.cert; } });
	Object.defineProperty(exports, "refreshToken", { enumerable: true, get: function () { return credential_factory_1.refreshToken; } });
	var error_1 = error;
	Object.defineProperty(exports, "FirebaseAppError", { enumerable: true, get: function () { return error_1.FirebaseAppError; } });
	Object.defineProperty(exports, "AppErrorCodes", { enumerable: true, get: function () { return error_1.AppErrorCodes; } });
	exports.SDK_VERSION = (0, utils_1.getSdkVersion)(); 
} (app));

const mod = /*@__PURE__*/getDefaultExportFromCjs(app);

mod.AppErrorCodes;
mod.FirebaseAppError;
mod.SDK_VERSION;
mod.applicationDefault;
const cert = mod.cert;
mod.deleteApp;
mod.getApp;
const getApps = mod.getApps;
const initializeApp = mod.initializeApp;
mod.refreshToken;

export { cert as c, getApps as g, initializeApp as i };
//# sourceMappingURL=index.mjs.map
