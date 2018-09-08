import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../../data.service'

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

    message: string = "";

    ngOnInit() {
        this.data.curretMessage.subscribe(input => this.message = input);
    }
    
    NewMessage() {

    }
}

class Person
{
    //constructor(public _firstName) {

    //}
    firstName: string = "";
    lastName: string = "";
}