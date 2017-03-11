import { AnimalService } from './../../../services/animal.service';
import { Component } from '@angular/core'
import { AnimalModel } from "../../../models/animal.model";

@Component({
    selector: 'animal-form',
    templateUrl: './animal-form.component.html'
})
export class AnimalFormComponent {
    animal: any = {}
    constructor(private animalService:AnimalService){
        
    }

    save(obj: AnimalModel){
        const animal = AnimalModel.createAnimalByObject(obj);
        this.animalService.create(animal);
    }
}