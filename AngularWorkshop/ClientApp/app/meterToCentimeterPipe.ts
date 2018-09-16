import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'meterToCentimeterPipe'
})

export class meterToCetimeterPipe implements PipeTransform {
    transform(value: number) {

        return value * 100;
    }
}

