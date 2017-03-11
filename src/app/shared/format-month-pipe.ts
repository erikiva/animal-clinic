import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'formatMonth'
})
export class FormatMonthPipe implements PipeTransform {
    transform(value: number, args: any[] ){
        return `${Math.floor(value/12)} years ${(value%12) > 0 ? `, ${value%12} months` : ''}`
    };
}