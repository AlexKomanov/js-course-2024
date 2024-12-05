// Parent class (Base class)
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    makeSound() {
        return "Some sound";
    }
}

// const myAnimal = new Animal('name');

// Child class (Derived class)
class Dog extends Animal {
    constructor(name, color) {
        super(name); // Must call parent constructor
        this.color = color;
    }
    
    makeSound() {
        return "Woof!"; // Overrides parent method
    }
    
    fetch() {
        return `${this.name} is fetching the ball`; // New method
    }

    printInfo() {
        console.log(`Name: ${this.name}, Color: ${this.color}`);
    }
}

// Usage
const myDog = new Dog("Rex");
console.log(myDog.name);        // "Rex" - inherited property
console.log(myDog.makeSound()); // "Woof!" - overridden method
console.log(myDog.fetch());     // "Rex is fetching the ball" - new method
myDog.printInfo(); // Output: Name: Rex, Color: undefined