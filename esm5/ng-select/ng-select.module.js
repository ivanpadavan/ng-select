/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectComponent, SELECTION_MODEL_FACTORY } from './ng-select.component';
import { NgFooterTemplateDirective, NgHeaderTemplateDirective, NgLabelTemplateDirective, NgLoadingTextTemplateDirective, NgMultiLabelTemplateDirective, NgNotFoundTemplateDirective, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgTagTemplateDirective, NgTypeToSearchTemplateDirective } from './ng-templates.directive';
import { NgOptionComponent } from './ng-option.component';
import { NgOptionHighlightDirective } from './ng-option-highlight.directive';
import { NgDropdownPanelComponent } from './ng-dropdown-panel.component';
import { DefaultSelectionModelFactory } from './selection-model';
import { NgSelectConfig } from './config.service';
var ɵ0 = DefaultSelectionModelFactory;
var NgSelectModule = /** @class */ (function () {
    function NgSelectModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgSelectModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: NgSelectModule,
            providers: [
                { provide: NgSelectConfig, useValue: new NgSelectConfig(config) },
            ]
        };
    };
    NgSelectModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        NgDropdownPanelComponent,
                        NgOptionComponent,
                        NgSelectComponent,
                        NgOptionHighlightDirective,
                        NgOptgroupTemplateDirective,
                        NgOptionTemplateDirective,
                        NgLabelTemplateDirective,
                        NgMultiLabelTemplateDirective,
                        NgHeaderTemplateDirective,
                        NgFooterTemplateDirective,
                        NgNotFoundTemplateDirective,
                        NgTypeToSearchTemplateDirective,
                        NgLoadingTextTemplateDirective,
                        NgTagTemplateDirective
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        NgSelectComponent,
                        NgOptionComponent,
                        NgOptionHighlightDirective,
                        NgOptgroupTemplateDirective,
                        NgOptionTemplateDirective,
                        NgLabelTemplateDirective,
                        NgMultiLabelTemplateDirective,
                        NgHeaderTemplateDirective,
                        NgFooterTemplateDirective,
                        NgNotFoundTemplateDirective,
                        NgTypeToSearchTemplateDirective,
                        NgLoadingTextTemplateDirective,
                        NgTagTemplateDirective
                    ],
                    providers: [
                        { provide: SELECTION_MODEL_FACTORY, useValue: ɵ0 },
                    ]
                },] }
    ];
    return NgSelectModule;
}());
export { NgSelectModule };
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0LyIsInNvdXJjZXMiOlsibmctc2VsZWN0L25nLXNlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBc0IsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRixPQUFPLEVBQ0gseUJBQXlCLEVBQ3pCLHlCQUF5QixFQUN6Qix3QkFBd0IsRUFDeEIsOEJBQThCLEVBQzlCLDZCQUE2QixFQUM3QiwyQkFBMkIsRUFDM0IsMkJBQTJCLEVBQzNCLHlCQUF5QixFQUN6QixzQkFBc0IsRUFDdEIsK0JBQStCLEVBQ2xDLE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakUsT0FBTyxFQUFDLGNBQWMsRUFBd0IsTUFBTSxrQkFBa0IsQ0FBQztTQXNDakIsNEJBQTRCOzs7Ozs7OztJQUl2RSxzQkFBTzs7OztJQUFkLFVBQWUsTUFBOEI7UUFDekMsT0FBTztZQUNILFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLElBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2FBQ3BFO1NBQ0osQ0FBQTtLQUNKOztnQkEvQ0osUUFBUSxTQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDVix3QkFBd0I7d0JBQ3hCLGlCQUFpQjt3QkFDakIsaUJBQWlCO3dCQUNqQiwwQkFBMEI7d0JBQzFCLDJCQUEyQjt3QkFDM0IseUJBQXlCO3dCQUN6Qix3QkFBd0I7d0JBQ3hCLDZCQUE2Qjt3QkFDN0IseUJBQXlCO3dCQUN6Qix5QkFBeUI7d0JBQ3pCLDJCQUEyQjt3QkFDM0IsK0JBQStCO3dCQUMvQiw4QkFBOEI7d0JBQzlCLHNCQUFzQjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLGlCQUFpQjt3QkFDakIsaUJBQWlCO3dCQUNqQiwwQkFBMEI7d0JBQzFCLDJCQUEyQjt3QkFDM0IseUJBQXlCO3dCQUN6Qix3QkFBd0I7d0JBQ3hCLDZCQUE2Qjt3QkFDN0IseUJBQXlCO3dCQUN6Qix5QkFBeUI7d0JBQ3pCLDJCQUEyQjt3QkFDM0IsK0JBQStCO3dCQUMvQiw4QkFBOEI7d0JBQzlCLHNCQUFzQjtxQkFDekI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNQLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFFBQVEsSUFBOEIsRUFBRTtxQkFDL0U7aUJBQ0o7O3lCQTNERDs7U0E0RGEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nU2VsZWN0Q29tcG9uZW50LCBTRUxFQ1RJT05fTU9ERUxfRkFDVE9SWSB9IGZyb20gJy4vbmctc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICAgIE5nRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ0xhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdMb2FkaW5nVGV4dFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nTXVsdGlMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nTm90Rm91bmRUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ09wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ1RhZ1RlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nVHlwZVRvU2VhcmNoVGVtcGxhdGVEaXJlY3RpdmVcbn0gZnJvbSAnLi9uZy10ZW1wbGF0ZXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1vcHRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IE5nT3B0aW9uSGlnaGxpZ2h0RGlyZWN0aXZlIH0gZnJvbSAnLi9uZy1vcHRpb24taGlnaGxpZ2h0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ0Ryb3Bkb3duUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL25nLWRyb3Bkb3duLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZWZhdWx0U2VsZWN0aW9uTW9kZWxGYWN0b3J5IH0gZnJvbSAnLi9zZWxlY3Rpb24tbW9kZWwnO1xuaW1wb3J0IHtOZ1NlbGVjdENvbmZpZywgTmdTZWxlY3RDb25maWdQYXlsb2FkfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTmdEcm9wZG93blBhbmVsQ29tcG9uZW50LFxuICAgICAgICBOZ09wdGlvbkNvbXBvbmVudCxcbiAgICAgICAgTmdTZWxlY3RDb21wb25lbnQsXG4gICAgICAgIE5nT3B0aW9uSGlnaGxpZ2h0RGlyZWN0aXZlLFxuICAgICAgICBOZ09wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nT3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdNdWx0aUxhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nTm90Rm91bmRUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdUeXBlVG9TZWFyY2hUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdMb2FkaW5nVGV4dFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ1RhZ1RlbXBsYXRlRGlyZWN0aXZlXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBOZ1NlbGVjdENvbXBvbmVudCxcbiAgICAgICAgTmdPcHRpb25Db21wb25lbnQsXG4gICAgICAgIE5nT3B0aW9uSGlnaGxpZ2h0RGlyZWN0aXZlLFxuICAgICAgICBOZ09wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nT3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdNdWx0aUxhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nTm90Rm91bmRUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdUeXBlVG9TZWFyY2hUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdMb2FkaW5nVGV4dFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ1RhZ1RlbXBsYXRlRGlyZWN0aXZlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBTRUxFQ1RJT05fTU9ERUxfRkFDVE9SWSwgdXNlVmFsdWU6IERlZmF1bHRTZWxlY3Rpb25Nb2RlbEZhY3RvcnkgfSxcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nU2VsZWN0TW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdChjb25maWc/OiBOZ1NlbGVjdENvbmZpZ1BheWxvYWQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBOZ1NlbGVjdE1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogTmdTZWxlY3RDb25maWcsIHVzZVZhbHVlOiBuZXcgTmdTZWxlY3RDb25maWcoY29uZmlnKSB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfVxufVxuIl19