import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class DataService {

    private messageSource = new BehaviorSubject("This is default message from Service");

    curretMessage = this.messageSource.asObservable();

    constructor() { }

    chanageMessage(message: string) {

        // next = publish the message
        this.messageSource.next(message);
    }
}