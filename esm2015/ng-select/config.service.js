/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
export const NG_SELECT_CONFIG_PAYLOAD = new InjectionToken('NG_SELECT_CONFIG_PAYLOAD');
/** @type {?} */
export const NG_SELECT_CONFIG = new InjectionToken('NG_SELECT_CONFIG');
/**
 * @record
 */
export function NgSelectConfigPayload() { }
/** @type {?|undefined} */
NgSelectConfigPayload.prototype.placeholder;
/** @type {?|undefined} */
NgSelectConfigPayload.prototype.notFoundText;
/** @type {?|undefined} */
NgSelectConfigPayload.prototype.typeToSearchText;
/** @type {?|undefined} */
NgSelectConfigPayload.prototype.addTagText;
/** @type {?|undefined} */
NgSelectConfigPayload.prototype.loadingText;
/** @type {?|undefined} */
NgSelectConfigPayload.prototype.clearAllText;
/** @type {?|undefined} */
NgSelectConfigPayload.prototype.disableVirtualScroll;
/** @type {?|undefined} */
NgSelectConfigPayload.prototype.openOnEnter;
export class NgSelectConfig {
    /**
     * @param {?=} payload
     */
    constructor(payload) {
        this.notFoundText = 'No items found';
        this.typeToSearchText = 'Type to search';
        this.addTagText = 'Add item';
        this.loadingText = 'Loading...';
        this.clearAllText = 'Clear all';
        this.disableVirtualScroll = true;
        this.openOnEnter = true;
        Object.assign(this, payload);
    }
}
if (false) {
    /** @type {?} */
    NgSelectConfig.prototype.placeholder;
    /** @type {?} */
    NgSelectConfig.prototype.notFoundText;
    /** @type {?} */
    NgSelectConfig.prototype.typeToSearchText;
    /** @type {?} */
    NgSelectConfig.prototype.addTagText;
    /** @type {?} */
    NgSelectConfig.prototype.loadingText;
    /** @type {?} */
    NgSelectConfig.prototype.clearAllText;
    /** @type {?} */
    NgSelectConfig.prototype.disableVirtualScroll;
    /** @type {?} */
    NgSelectConfig.prototype.openOnEnter;
}
/**
 * @param {?} providedConfig
 * @param {?} providedPayload
 * @return {?}
 */
export function configFactory(providedConfig, providedPayload) {
    return providedConfig || new NgSelectConfig(providedPayload);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC8iLCJzb3VyY2VzIjpbIm5nLXNlbGVjdC9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFFN0MsYUFBYSx3QkFBd0IsR0FBRyxJQUFJLGNBQWMsQ0FBd0IsMEJBQTBCLENBQUMsQ0FBQzs7QUFDOUcsYUFBYSxnQkFBZ0IsR0FBRyxJQUFJLGNBQWMsQ0FBaUIsa0JBQWtCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYXZGLE1BQU07Ozs7SUFTRixZQUFZLE9BQStCOzRCQVA1QixnQkFBZ0I7Z0NBQ1osZ0JBQWdCOzBCQUN0QixVQUFVOzJCQUNULFlBQVk7NEJBQ1gsV0FBVztvQ0FDSCxJQUFJOzJCQUNiLElBQUk7UUFFZCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNoQztDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxNQUFNLHdCQUF3QixjQUE4QixFQUFFLGVBQXNDO0lBQ2hHLE9BQU8sY0FBYyxJQUFJLElBQUksY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0NBQ2hFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3Rpb25Ub2tlbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBOR19TRUxFQ1RfQ09ORklHX1BBWUxPQUQgPSBuZXcgSW5qZWN0aW9uVG9rZW48TmdTZWxlY3RDb25maWdQYXlsb2FkPignTkdfU0VMRUNUX0NPTkZJR19QQVlMT0FEJyk7XG5leHBvcnQgY29uc3QgTkdfU0VMRUNUX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxOZ1NlbGVjdENvbmZpZz4oJ05HX1NFTEVDVF9DT05GSUcnKTtcblxuZXhwb3J0IGludGVyZmFjZSBOZ1NlbGVjdENvbmZpZ1BheWxvYWQge1xuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICAgIG5vdEZvdW5kVGV4dD86IHN0cmluZztcbiAgICB0eXBlVG9TZWFyY2hUZXh0Pzogc3RyaW5nO1xuICAgIGFkZFRhZ1RleHQ/OiBzdHJpbmc7XG4gICAgbG9hZGluZ1RleHQ/OiBzdHJpbmc7XG4gICAgY2xlYXJBbGxUZXh0Pzogc3RyaW5nO1xuICAgIGRpc2FibGVWaXJ0dWFsU2Nyb2xsPzogYm9vbGVhbjtcbiAgICBvcGVuT25FbnRlcj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBOZ1NlbGVjdENvbmZpZyBpbXBsZW1lbnRzIE5nU2VsZWN0Q29uZmlnUGF5bG9hZCB7XG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICBub3RGb3VuZFRleHQgPSAnTm8gaXRlbXMgZm91bmQnO1xuICAgIHR5cGVUb1NlYXJjaFRleHQgPSAnVHlwZSB0byBzZWFyY2gnO1xuICAgIGFkZFRhZ1RleHQgPSAnQWRkIGl0ZW0nO1xuICAgIGxvYWRpbmdUZXh0ID0gJ0xvYWRpbmcuLi4nO1xuICAgIGNsZWFyQWxsVGV4dCA9ICdDbGVhciBhbGwnO1xuICAgIGRpc2FibGVWaXJ0dWFsU2Nyb2xsID0gdHJ1ZTtcbiAgICBvcGVuT25FbnRlciA9IHRydWU7XG4gICAgY29uc3RydWN0b3IocGF5bG9hZD86IE5nU2VsZWN0Q29uZmlnUGF5bG9hZCkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHBheWxvYWQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0ZhY3RvcnkocHJvdmlkZWRDb25maWc6IE5nU2VsZWN0Q29uZmlnLCBwcm92aWRlZFBheWxvYWQ6IE5nU2VsZWN0Q29uZmlnUGF5bG9hZCkge1xuICAgIHJldHVybiBwcm92aWRlZENvbmZpZyB8fCBuZXcgTmdTZWxlY3RDb25maWcocHJvdmlkZWRQYXlsb2FkKTtcbn1cbiJdfQ==