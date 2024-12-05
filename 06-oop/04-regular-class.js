class Person {
    // Constructor method
    constructor(name, age) {
        this.name = name; // Set the "name" property
        this.age = age;   // Set the "age" property
    }

    // Method to introduce the person
    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Object creation based on the class
const person1 = new Person("Alice", 30);
console.log(person1.introduce()); 
// [Output]: Hi, my name is Alice and I am 30 years old.
