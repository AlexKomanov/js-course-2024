class Example {
    // Regular field
    name;
    // Static field
    static count = 0;
    // Private static field
    static #privateCount = 0;

    static BASE_URL = 'wwww.base-address.com';

    constructor(name) {
        this.name = name;
        Example.count++;
        Example.#privateCount++;
    }

    // Regular method
    sayName() {
        return `My name is ${this.name}`;
    }

    // Static method
    static getCount() {
        return Example.count;
    }

    // Static method to access private static field
    static getPrivateCount() {
        return Example.#privateCount;
    }

}

// Usage:
const obj1 = new Example("John");
const obj2 = new Example("Alex");

// Using regular field/method (through instance)
console.log(obj1.name);        // "John"
console.log(obj1.sayName());   // "My name is John"

// Using static field/method (through class)
console.log(Example.count);     // 1
console.log(Example.getCount()); // 1
console.log(Example.getPrivateCount()); // 1

// Uncomment the line below to see the error
// console.log(Example.#privateCount); // This will throw an error

console.log(Example.BASE_URL + "/api/v1/items");
console.log(Example.BASE_URL + "/api/v1/todos");