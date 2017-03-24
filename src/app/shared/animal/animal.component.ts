import { AnimalModel } from './../../models/animal.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'animal',
    templateUrl: './animal.component.html',
    styleUrls: ['./animal.component.css']
})
export class AnimalComponent {
    format: string = 'MM/dd/yyyy HH:mm';
    @Input('animalContent')animal:AnimalModel;
    @Output() onDelete:EventEmitter<AnimalModel> = new EventEmitter;
    @Output() onEdit: EventEmitter<AnimalModel> = new EventEmitter;
    constructor(){}
    delete(){
        this.onDelete.emit(this.animal);
    }

    edit(){
        this.onEdit.emit(this.animal);
    }
}