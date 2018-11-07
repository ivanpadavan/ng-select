import { InjectionToken } from '@angular/core';
export declare const NG_SELECT_CONFIG_PAYLOAD: InjectionToken<NgSelectConfigPayload>;
export declare const NG_SELECT_CONFIG: InjectionToken<NgSelectConfig>;
export interface NgSelectConfigPayload {
    placeholder?: string;
    notFoundText?: string;
    typeToSearchText?: string;
    addTagText?: string;
    loadingText?: string;
    clearAllText?: string;
    disableVirtualScroll?: boolean;
    openOnEnter?: boolean;
}
export declare class NgSelectConfig implements NgSelectConfigPayload {
    placeholder: string;
    notFoundText: string;
    typeToSearchText: string;
    addTagText: string;
    loadingText: string;
    clearAllText: string;
    disableVirtualScroll: boolean;
    openOnEnter: boolean;
    constructor(payload?: NgSelectConfigPayload);
}
export declare function configFactory(providedConfig: NgSelectConfig, providedPayload: NgSelectConfigPayload): NgSelectConfig;
