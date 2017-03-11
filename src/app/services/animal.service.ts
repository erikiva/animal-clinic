import { API_CONFIG } from './../config';


import { AnimalModel } from "../models/animal.model";
import { Injectable, Inject } from "@angular/core";

export abstract class IAnimalService {
    abstract create(animal:AnimalModel):AnimalModel; 
}

@Injectable()
export class AnimalService  implements IAnimalService{
    nextId: number = 3;
    animals: AnimalModel[] = [
            new AnimalModel('Cillas', 'Squirrel', 'http://pixel.nymag.com/imgs/fashion/daily/2016/10/04/04-squirrel-nut.w710.h473.2x.jpg', 22, new Date(), 1),
            new AnimalModel('Irish','Cat','https://www.purina.com/media/629502/seo-article-23-list-grid.jpg',36, new Date(),    2)];
     title = 'Animals';

    constructor(@Inject(API_CONFIG) private apiConfig){

    }

    create(animal: AnimalModel) : AnimalModel {
        animal.id = this.nextId++;
        animal.creationDate = new Date();
        this.animals.push(animal)
        return new AnimalModel('', '', '', 22);
    }

    delete(id:number):void {
        this.animals = this.animals.filter(el=>el.id !== id);
    }

    update(id: number, animal: AnimalModel){
        this.animals = this.animals.map( el => {
            if (el.id === id){
                return Object.assign(el, animal);
            }
            return el;
        })
    }

    get(){
        return this.animals;
    }
}