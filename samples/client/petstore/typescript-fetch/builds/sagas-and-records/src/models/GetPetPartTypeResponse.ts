/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    PetPartType,
    PetPartTypeFromJSON,
    PetPartTypeFromJSONTyped,
    PetPartTypeToJSON,
} from './PetPartType';
import {
    ResponseMeta,
    ResponseMetaFromJSON,
    ResponseMetaFromJSONTyped,
    ResponseMetaToJSON,
} from './ResponseMeta';

/**
 * 
 * @export
 * @interface GetPetPartTypeResponse
 */
export interface GetPetPartTypeResponse {
    /**
     * 
     * @type {ResponseMeta}
     * @memberof GetPetPartTypeResponse
     */
    meta: ResponseMeta;
    /**
     * 
     * @type {PetPartType}
     * @memberof GetPetPartTypeResponse
     */
    data?: PetPartType;
}

/**
 * Check if a given object implements the GetPetPartTypeResponse interface.
 */
export function instanceOfGetPetPartTypeResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "meta" in value;

    return isInstance;
}

export function GetPetPartTypeResponseFromJSON(json: any): GetPetPartTypeResponse {
    return GetPetPartTypeResponseFromJSONTyped(json, false);
}

export function GetPetPartTypeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPetPartTypeResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'meta': ResponseMetaFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : PetPartTypeFromJSON(json['data']),
    };
}

export function GetPetPartTypeResponseToJSON(value?: GetPetPartTypeResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'meta': ResponseMetaToJSON(value.meta),
        'data': PetPartTypeToJSON(value.data),
    };
}

