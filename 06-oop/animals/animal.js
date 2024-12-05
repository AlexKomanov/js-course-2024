class Animal {

    name;

    constructor(name) {
        this.name = name;
    }

    makeSound() {
        return `${this.name} makes a sound`;
    }
}

module.exports = Animal;