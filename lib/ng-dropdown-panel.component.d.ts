import { ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { NgDropdownPanelService } from './ng-dropdown-panel.service';
import { DropdownPosition } from './ng-select.component';
import { NgOption } from './ng-select.types';
export declare class NgDropdownPanelComponent implements OnInit, OnChanges, OnDestroy {
    private _renderer;
    private _zone;
    private _panelService;
    private _document;
    items: NgOption[];
    markedItem: NgOption;
    position: DropdownPosition;
    appendTo: string;
    bufferAmount: any;
    virtualScroll: boolean;
    headerTemplate: TemplateRef<any>;
    footerTemplate: TemplateRef<any>;
    filterValue: string;
    update: EventEmitter<any[]>;
    scroll: EventEmitter<{
        start: number;
        end: number;
    }>;
    scrollToEnd: EventEmitter<void>;
    outsideClick: EventEmitter<void>;
    contentElementRef: ElementRef;
    scrollElementRef: ElementRef;
    paddingElementRef: ElementRef;
    private readonly _destroy$;
    private readonly _dropdown;
    private readonly _virtualPadding;
    private readonly _scrollablePanel;
    private readonly _contentPanel;
    private readonly _select;
    private _parent;
    private _scrollToEndFired;
    private _updateScrollHeight;
    private _lastScrollPosition;
    constructor(_renderer: Renderer2, _zone: NgZone, _panelService: NgDropdownPanelService, _elementRef: ElementRef, _document: any);
    private _currentPosition;
    readonly currentPosition: DropdownPosition;
    private _itemsLength;
    private itemsLength;
    private readonly _startOffset;
    handleMousedown($event: MouseEvent): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    scrollTo(option: NgOption, startFromOption?: boolean): void;
    scrollToTag(): void;
    adjustPosition(): void;
    private _handleDropdownPosition;
    private _handleScroll;
    private _handleOutsideClick;
    private _checkToClose;
    private _onItemsChange;
    private _updateItems;
    private _updateItemsRange;
    private _onContentScrolled;
    private _updateVirtualHeight;
    private _onItemsLengthChanged;
    private _renderItemsRange;
    private _measureDimensions;
    private _fireScrollToEnd;
    private _calculateCurrentPosition;
    private _appendDropdown;
    private _updatePosition;
    private _setOffset;
}
