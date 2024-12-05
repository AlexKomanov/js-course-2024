const Animal = require('./animal')

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        if (!this.name) {
            throw new Error('Name is not defined');
        }
        return `${this.name} barks`
    }
}

module.exports = Dog;