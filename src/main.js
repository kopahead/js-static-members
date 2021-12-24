
class Dog {
    static breed = "German Shepherd";
    static speed() {
      return "48 km/h"
    }
}

class Cat1 {
    constructor (breed) {
        this.breed = breed;

        this.breedDictionary = {
            "bengal": {
                "name": "Bengal",
                "speed": "56.3 km/h"
            }
        }
    }

    info() {
        const breed = this.breedDictionary[this.breed];
        return `The ${breed.name}, travels a speed of ${breed.speed}`;
    }
}

class Cat2 {
    constructor (breed) {
        this.breed = breed;

        this.breedDictionary = {
            "bengal": {
                "name": "Bengal",
                "speed": "56.3 km/h"
            }
        }
    }

    static info() {
        const breed = this.breedDictionary[this.breed];
        return `The ${breed.name}, travels a speed of ${breed.speed}`;
    }
}

class Cat3 {
    static info(breedName, breedSpeed) {
        return `The ${breedName}, travels a speed of ${breedSpeed}`;
    }
}

class Cat4 {
    constructor (breed) {
        this.breed = breed;

        this.breedDictionary = {
            "bengal": {
                "name": "Bengal",
                "speed": "56.3 km/h"
            }
        }
    }

    complex() {
        const breed = this.breedDictionary[this.breed];
        return `The ${breed.name}, travels a speed of ${breed.speed}`;
    }

    static info(breed) {
        const cat = new Cat4(breed);
        return cat.complex();
    }
}

module.exports = {
    Dog,
    Cat1,
    Cat2,
    Cat3,
    Cat4
};