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
const ɵ0 = DefaultSelectionModelFactory;
export class NgSelectModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: NgSelectModule,
            providers: [
                { provide: NgSelectConfig, useValue: new NgSelectConfig(config) },
            ]
        };
    }
}
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
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0LyIsInNvdXJjZXMiOlsibmctc2VsZWN0L25nLXNlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBc0IsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRixPQUFPLEVBQ0gseUJBQXlCLEVBQ3pCLHlCQUF5QixFQUN6Qix3QkFBd0IsRUFDeEIsOEJBQThCLEVBQzlCLDZCQUE2QixFQUM3QiwyQkFBMkIsRUFDM0IsMkJBQTJCLEVBQzNCLHlCQUF5QixFQUN6QixzQkFBc0IsRUFDdEIsK0JBQStCLEVBQ2xDLE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakUsT0FBTyxFQUFDLGNBQWMsRUFBd0IsTUFBTSxrQkFBa0IsQ0FBQztXQXNDakIsNEJBQTRCO0FBR2xGLE1BQU07Ozs7O0lBQ0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUE4QjtRQUN6QyxPQUFPO1lBQ0gsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNQLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsSUFBSSxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUU7YUFDcEU7U0FDSixDQUFBO0tBQ0o7OztZQS9DSixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFO29CQUNWLHdCQUF3QjtvQkFDeEIsaUJBQWlCO29CQUNqQixpQkFBaUI7b0JBQ2pCLDBCQUEwQjtvQkFDMUIsMkJBQTJCO29CQUMzQix5QkFBeUI7b0JBQ3pCLHdCQUF3QjtvQkFDeEIsNkJBQTZCO29CQUM3Qix5QkFBeUI7b0JBQ3pCLHlCQUF5QjtvQkFDekIsMkJBQTJCO29CQUMzQiwrQkFBK0I7b0JBQy9CLDhCQUE4QjtvQkFDOUIsc0JBQXNCO2lCQUN6QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsWUFBWTtpQkFDZjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsaUJBQWlCO29CQUNqQixpQkFBaUI7b0JBQ2pCLDBCQUEwQjtvQkFDMUIsMkJBQTJCO29CQUMzQix5QkFBeUI7b0JBQ3pCLHdCQUF3QjtvQkFDeEIsNkJBQTZCO29CQUM3Qix5QkFBeUI7b0JBQ3pCLHlCQUF5QjtvQkFDekIsMkJBQTJCO29CQUMzQiwrQkFBK0I7b0JBQy9CLDhCQUE4QjtvQkFDOUIsc0JBQXNCO2lCQUN6QjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1AsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxJQUE4QixFQUFFO2lCQUMvRTthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdTZWxlY3RDb21wb25lbnQsIFNFTEVDVElPTl9NT0RFTF9GQUNUT1JZIH0gZnJvbSAnLi9uZy1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7XG4gICAgTmdGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ0hlYWRlclRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ0xvYWRpbmdUZXh0VGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdNdWx0aUxhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdOb3RGb3VuZFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nT3B0Z3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ09wdGlvblRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nVGFnVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdUeXBlVG9TZWFyY2hUZW1wbGF0ZURpcmVjdGl2ZVxufSBmcm9tICcuL25nLXRlbXBsYXRlcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL25nLW9wdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdPcHRpb25IaWdobGlnaHREaXJlY3RpdmUgfSBmcm9tICcuL25nLW9wdGlvbi1oaWdobGlnaHQuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nRHJvcGRvd25QYW5lbENvbXBvbmVudCB9IGZyb20gJy4vbmctZHJvcGRvd24tcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IERlZmF1bHRTZWxlY3Rpb25Nb2RlbEZhY3RvcnkgfSBmcm9tICcuL3NlbGVjdGlvbi1tb2RlbCc7XG5pbXBvcnQge05nU2VsZWN0Q29uZmlnLCBOZ1NlbGVjdENvbmZpZ1BheWxvYWR9IGZyb20gJy4vY29uZmlnLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBOZ0Ryb3Bkb3duUGFuZWxDb21wb25lbnQsXG4gICAgICAgIE5nT3B0aW9uQ29tcG9uZW50LFxuICAgICAgICBOZ1NlbGVjdENvbXBvbmVudCxcbiAgICAgICAgTmdPcHRpb25IaWdobGlnaHREaXJlY3RpdmUsXG4gICAgICAgIE5nT3B0Z3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ011bHRpTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdOb3RGb3VuZFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ1R5cGVUb1NlYXJjaFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ0xvYWRpbmdUZXh0VGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nVGFnVGVtcGxhdGVEaXJlY3RpdmVcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIE5nU2VsZWN0Q29tcG9uZW50LFxuICAgICAgICBOZ09wdGlvbkNvbXBvbmVudCxcbiAgICAgICAgTmdPcHRpb25IaWdobGlnaHREaXJlY3RpdmUsXG4gICAgICAgIE5nT3B0Z3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ011bHRpTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdOb3RGb3VuZFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ1R5cGVUb1NlYXJjaFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ0xvYWRpbmdUZXh0VGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nVGFnVGVtcGxhdGVEaXJlY3RpdmVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IFNFTEVDVElPTl9NT0RFTF9GQUNUT1JZLCB1c2VWYWx1ZTogRGVmYXVsdFNlbGVjdGlvbk1vZGVsRmFjdG9yeSB9LFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmdTZWxlY3RNb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IE5nU2VsZWN0Q29uZmlnUGF5bG9hZCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IE5nU2VsZWN0TW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBOZ1NlbGVjdENvbmZpZywgdXNlVmFsdWU6IG5ldyBOZ1NlbGVjdENvbmZpZyhjb25maWcpIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=