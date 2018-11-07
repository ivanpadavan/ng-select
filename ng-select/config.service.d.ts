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
export declare const defaultConfig: NgSelectConfig;
