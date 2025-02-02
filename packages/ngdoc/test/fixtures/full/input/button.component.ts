import { Component, Directive, OnInit, Input, Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';

export type ButtonSize = 'lg' | 'md' | 'sm';

/**
 * General Button Component description.
 * @export
 * @class ButtonComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'thy-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    exportAs: 'thyButton'
})
export class ButtonComponent implements OnInit {

    private type = '';
    private loading = false;

    /**
     * Button Type
     * @description Button Type for Description
     */
    @Input('thyTypeAlias') thyType: 'primary' | 'info' | 'success' = 'primary';

     /**
     * Button Size
     * @deprecated
     * @default md
     */
    @Input() thySize: LoadingComponent;

    @Input() set thyLoading(loading: boolean){
        this.loading = loading;
    }

    /**
     * Loading Event
     */
    @Output() thyLoadingEvent = new EventEmitter<boolean>();

    /**
     * Template
     */
    @ContentChild('template') templateRef: TemplateRef<any>;

    constructor() { }

    ngOnInit(): void { }
}



/**
 * General Button Icon Directive description.
 * @export
 * @class ButtonIconComponent
 * @implements {OnInit}
 */
 @Directive({
    selector: '[thyButtonIcon]',
})
export class ButtonIconComponent implements OnInit {}
