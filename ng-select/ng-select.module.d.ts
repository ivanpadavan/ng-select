import { ModuleWithProviders, Provider } from '@angular/core';
import { NgSelectConfigPayload } from './config.service';
export declare const providers: Provider[];
export declare class NgSelectModule {
    static forRoot(config?: NgSelectConfigPayload): ModuleWithProviders;
}
