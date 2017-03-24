import { AnimalService } from './../../../services/animal.service';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AnimalModel } from "../../../models/animal.model";


@Component({
    selector: 'animal-form-reactive',
    templateUrl: './animal-form-reactive.component.html'
})
export class AnimalFormReactiveComponent implements OnInit {
    @Input()  data: AnimalModel;
    form: FormGroup;
    constructor(private animalService:AnimalService){

    }
    ngOnInit (){
    
    }
    ngOnChanges(changes: SimpleChanges){
        this.form = new FormGroup ({
            name: new FormControl(this.data ? this.data.name : '', [Validators.required, Validators.minLength(4)]),
            type: new FormControl(this.data ? this.data.type : '', Validators.required),
            age: new FormControl(this.data ? this.data.age : '', Validators.required),
            photo: new FormControl(this.data ? this.data.photo : '', Validators.required)

        })   
    }
    save(){
        const animal = AnimalModel.createAnimalByObject(this.form.value);
        if(this.data){
            animal.id = this.data.id;
            animal.creationDate = this.data.creationDate;
            this.animalService.update(this.data.id, animal);
        } else {
            
            this.animalService.create(animal);
        }
        
    }
    
}