import { element } from 'protractor';
import { Directive, ElementRef, HostListener, Input, EventEmitter, Output } from '@angular/core';

@Directive ({
    selector: '[addBorder]'
})

export class AddBorderDirective {

    @Input() color: string = 'red';
    @Output() mouseLeave: EventEmitter<ElementRef> = new EventEmitter();
    constructor(private element: ElementRef){

    }

    @HostListener('mouseenter')
    onMouseEnter(){
        this.element.nativeElement.style=`border: 2px solid ${this.color}`
        console.log('OnMouseEnter');
    }
    @HostListener('mouseleave')
    onMouseLeave(){
        this.element.nativeElement.style='border: none';
        this.mouseLeave.emit(this.element);
        console.log('OnMouseLeave');
    }
}

