import { Component } from '@angular/core';

@Component({
    selector: 'animal',
    templateUrl: './animal.component.html',
    styleUrls: ['./animal.component.css']
})
export class AnimalComponent {
    animal:any = {
        name: 'Irish',
        type: 'Cat',
        age: '36',
        photo: 'https://www.purina.com/media/629502/seo-article-23-list-grid.jpg'
    }

}