/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
export var NG_SELECT_CONFIG_PAYLOAD = new InjectionToken('NG_SELECT_CONFIG_PAYLOAD');
/** @type {?} */
export var NG_SELECT_CONFIG = new InjectionToken('NG_SELECT_CONFIG');
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
var NgSelectConfig = /** @class */ (function () {
    function NgSelectConfig(payload) {
        this.notFoundText = 'No items found';
        this.typeToSearchText = 'Type to search';
        this.addTagText = 'Add item';
        this.loadingText = 'Loading...';
        this.clearAllText = 'Clear all';
        this.disableVirtualScroll = true;
        this.openOnEnter = true;
        Object.assign(this, payload);
    }
    return NgSelectConfig;
}());
export { NgSelectConfig };
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
    console.log(providedConfig, providedPayload);
    return providedConfig || new NgSelectConfig(providedPayload);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC8iLCJzb3VyY2VzIjpbIm5nLXNlbGVjdC9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFFN0MsV0FBYSx3QkFBd0IsR0FBRyxJQUFJLGNBQWMsQ0FBd0IsMEJBQTBCLENBQUMsQ0FBQzs7QUFDOUcsV0FBYSxnQkFBZ0IsR0FBRyxJQUFJLGNBQWMsQ0FBaUIsa0JBQWtCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYXZGLElBQUE7SUFTSSx3QkFBWSxPQUErQjs0QkFQNUIsZ0JBQWdCO2dDQUNaLGdCQUFnQjswQkFDdEIsVUFBVTsyQkFDVCxZQUFZOzRCQUNYLFdBQVc7b0NBQ0gsSUFBSTsyQkFDYixJQUFJO1FBRWQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDaEM7eUJBM0JMO0lBNEJDLENBQUE7QUFaRCwwQkFZQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsTUFBTSx3QkFBd0IsY0FBOEIsRUFBRSxlQUFzQztJQUNoRyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUM3QyxPQUFPLGNBQWMsSUFBSSxJQUFJLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztDQUNoRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0aW9uVG9rZW59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgTkdfU0VMRUNUX0NPTkZJR19QQVlMT0FEID0gbmV3IEluamVjdGlvblRva2VuPE5nU2VsZWN0Q29uZmlnUGF5bG9hZD4oJ05HX1NFTEVDVF9DT05GSUdfUEFZTE9BRCcpO1xuZXhwb3J0IGNvbnN0IE5HX1NFTEVDVF9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48TmdTZWxlY3RDb25maWc+KCdOR19TRUxFQ1RfQ09ORklHJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmdTZWxlY3RDb25maWdQYXlsb2FkIHtcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgICBub3RGb3VuZFRleHQ/OiBzdHJpbmc7XG4gICAgdHlwZVRvU2VhcmNoVGV4dD86IHN0cmluZztcbiAgICBhZGRUYWdUZXh0Pzogc3RyaW5nO1xuICAgIGxvYWRpbmdUZXh0Pzogc3RyaW5nO1xuICAgIGNsZWFyQWxsVGV4dD86IHN0cmluZztcbiAgICBkaXNhYmxlVmlydHVhbFNjcm9sbD86IGJvb2xlYW47XG4gICAgb3Blbk9uRW50ZXI/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgTmdTZWxlY3RDb25maWcgaW1wbGVtZW50cyBOZ1NlbGVjdENvbmZpZ1BheWxvYWQge1xuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgbm90Rm91bmRUZXh0ID0gJ05vIGl0ZW1zIGZvdW5kJztcbiAgICB0eXBlVG9TZWFyY2hUZXh0ID0gJ1R5cGUgdG8gc2VhcmNoJztcbiAgICBhZGRUYWdUZXh0ID0gJ0FkZCBpdGVtJztcbiAgICBsb2FkaW5nVGV4dCA9ICdMb2FkaW5nLi4uJztcbiAgICBjbGVhckFsbFRleHQgPSAnQ2xlYXIgYWxsJztcbiAgICBkaXNhYmxlVmlydHVhbFNjcm9sbCA9IHRydWU7XG4gICAgb3Blbk9uRW50ZXIgPSB0cnVlO1xuICAgIGNvbnN0cnVjdG9yKHBheWxvYWQ/OiBOZ1NlbGVjdENvbmZpZ1BheWxvYWQpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwYXlsb2FkKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWdGYWN0b3J5KHByb3ZpZGVkQ29uZmlnOiBOZ1NlbGVjdENvbmZpZywgcHJvdmlkZWRQYXlsb2FkOiBOZ1NlbGVjdENvbmZpZ1BheWxvYWQpIHtcbiAgICBjb25zb2xlLmxvZyhwcm92aWRlZENvbmZpZywgcHJvdmlkZWRQYXlsb2FkKTtcbiAgICByZXR1cm4gcHJvdmlkZWRDb25maWcgfHwgbmV3IE5nU2VsZWN0Q29uZmlnKHByb3ZpZGVkUGF5bG9hZCk7XG59XG4iXX0=