class Parent {
    #privateField = "private data";
    publicField = "public data";

    // Public method to access private field
    getPrivateField() {
        return this.#privateField;
    }

    printPrivateField() {
        console.log(this.#privateField); // Private member can be accessed inside a class
    }

}

class Child extends Parent {
    constructor() {
        super();
        // Error - can't access parent's private field
        // console.log(this.#privateField);
    }

    accessWithGetter() {
        // OK - using public method
        console.log(this.getPrivateField());
    }

    tryAccessDirectly() {
        // Error - private field not accessible
        // return this.#privateField;
    }

    accessWithPrint() {
        // OK - using public method
        this.printPrivateField();
    }
}

// Usage examples
const myParent = new Parent();
const myChild = new Child();

// Trying to access private field from outside
// console.log(myParent.#privateField); // Error
// console.log(myChild.#privateField);  // Error

// Accessing public field
// console.log(myParent.publicField);  // "public data"
// console.log(myChild.publicField);   // "public data"

// Accessing private field through public method
console.log(myParent.getPrivateField());
myParent.printPrivateField();

console.log(myChild.getPrivateField());
myChild.printPrivateField();
myChild.accessWithPrint();
myChild.accessWithGetter();