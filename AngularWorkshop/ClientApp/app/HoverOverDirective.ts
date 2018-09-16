import { Directive, ElementRef, HostListener, Renderer2, HostBinding } from '@angular/core';

@Directive(
    {
        selector: "[HoverOverDirective]",
    }
)

export class HoverOverDirective {

    constructor(private el: ElementRef, private renderer: Renderer2) {

    }

    @HostBinding('style.color') foreGroundColor: string = 'black';

    @HostListener('mouseover') onMouseOver() {
      //  this.renderer.setStyle(this.el.nativeElement, 'color', 'Red');
            //let part = this.el.nativeElement.querySelector('');

        // Note: using HostBinding instead of manipulating the NativeElement.
        this.foreGroundColor = 'Red';
    }

    @HostListener('mouseout') onMouseOut() {
       // this.renderer.setStyle(this.el.nativeElement, 'color', 'Black');
        //let part = this.el.nativeElement.querySelector('');

        this.foreGroundColor = 'black';
    }
}