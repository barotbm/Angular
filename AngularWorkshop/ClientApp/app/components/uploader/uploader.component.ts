import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../data.service'
import { HoverOverDirective } from '../../HoverOverDirective';

@Component({
    selector: 'uploader',
    templateUrl: './uploader.component.html'
})

/** uploader component*/
export class UploaderComponent implements OnInit {
    public persons: Person[] = [];
    address: string = "";
    ///** uploader ctor */
    constructor(private data: DataService) {
        
      //  persons.Push(new Person());
    }

    // Properties
    message: string = "";
    showMessage: boolean = false;

    ngOnInit() {
        this.data.curretMessage.subscribe(input => this.message = input);
    }
    
    NewMessage() {
        this.showMessage = !this.showMessage;
    }
}

class Person
{
    //constructor(public _firstName) {

    //}
    firstName: string = "";
    lastName: string = "";
}