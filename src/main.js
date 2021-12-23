
class Dog {
    static breed = "German Shepherd";
    static speed() {
      return "48 km/h"
    }
}

class Cat {
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

    static staticClassThatThrowsError() {
        const breed = this.breedDictionary[this.breed];
        return `The ${breed.name}, travels a speed of ${breed.speed}`;
    }

    static staticClassThatUsesAClassInstance(breed) {
        const cat = new Cat(breed);
        return cat.info();
    }
}

module.exports = {
    Dog,
    Cat
};