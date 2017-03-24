import { AnimalService } from './services/animal.service';
import { AnimalModel } from './models/animal.model';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  animals: AnimalModel[];
  animalEdit: AnimalModel;
    constructor(private animalService: AnimalService){
      this.animals = this.animalService.get();
    }
    title = 'Animals';
    onEdit(animal:AnimalModel) {
      this.animalEdit = animal;

    }

    onDelete(animal: AnimalModel){
      this.animalService.delete(animal.id);
      this.animals = this.animalService.get();
    }
    //  modify() {
    //    this.animals[0] = Object.assign({}, this.animals[0], {age:45});
    //  }

     exit(element: ElementRef){
       console.log('Salio', element);
     }

}




// export class AppComponent {
//   user:any = {
//     name: 'John',
//     surname: 'Smith'
//   }
//   title = 'Animals';
//   onDelete(name){
//     alert(`Borrado ${name}`);
//   }
// }
