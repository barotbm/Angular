import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class DataService {

    // Notes: Difference between BehavirorSubject and Subject
    //        BehaviourSubject will return the initial value or the current value on Subscription
    //        Subject doesnot return the current value on Subscription. It triggers only on .next(value) call and return/output the value
    //        Link: https://stackoverflow.com/questions/43348463/what-is-the-difference-between-subject-and-behaviorsubject/43351340

    private messageSource = new BehaviorSubject("This is default message from Service");

    curretMessage = this.messageSource.asObservable();

    constructor() { }

    chanageMessage(message: string) {

        // next = publish the message
        this.messageSource.next(message);
    }
}