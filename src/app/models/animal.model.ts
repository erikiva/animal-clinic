export class  AnimalModel {

    constructor(public name:string, 
                public type: string, 
                public photo:string, 
                public age:number, 
                public creationDate: Date = new Date(),
                public id?: number){

    }

    static createAnimalByObject(obj:any) {
        return new AnimalModel(obj.name, obj.type, obj.photo, obj.age);
    }
}

// o public registerDate?: Date