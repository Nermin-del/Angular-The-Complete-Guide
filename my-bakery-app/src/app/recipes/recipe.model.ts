export class Recipe { // This is a class
    public name: string; // This is a property
    public description: string; 
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}