import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive(
    {
        selector: "[HoverOverDirective]",
    }
)

export class HoverOverDirective {

    constructor(private el: ElementRef, private renderer: Renderer2) {

    }

    @HostListener('mouseover') onMouseOver() {
        this.renderer.setStyle(this.el.nativeElement, 'color', 'Red');
            //let part = this.el.nativeElement.querySelector('');
    }

    @HostListener('mouseout') onMouseOut() {
        this.renderer.setStyle(this.el.nativeElement, 'color', 'Black');
        //let part = this.el.nativeElement.querySelector('');
    }
}