import { Component, Input } from '@angular/core';

@Component({
    selector: 'uploader-child',
    templateUrl: './uploader-child.component.html'
})
/** uploaderChild component*/
export class UploaderChildComponent {

    @Input() childMessage: string = "";

    /** uploaderChild ctor */
    constructor() {

    }
}