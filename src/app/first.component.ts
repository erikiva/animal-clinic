import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css']
    //inputs: ['name', 'surname']
})
export class FirstComponent {

    @Input()  name: string;
    //@Input('nombre')  surname: string;
    // En el html se usaria {{nombre}} en vez de name, es un alias
    @Input()  surname: string;

    @Output() deleteUser:EventEmitter<string> = new EventEmitter<string>();

    //name: string = 'Pepe'
    //surname: string;
    getNameUppercase(){
        return  `${this.name.toUpperCase()} ${this.surname.toUpperCase()}` ;
    }

    onClick(){
        // deleteUser es el canal al que se lanza el evento
        this.deleteUser.emit(this.name);
    }
}