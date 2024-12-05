const Vehicle = require('./vehicle'); // Import the Vehicle class

class Car extends Vehicle {
    #trunkSize; // Additional field for trunk size

    constructor(manufacturer, model, trunkSize) {
        super(manufacturer, model);
        this.#trunkSize = trunkSize; // Initialize the additional field
    }

    // Override the printInfo method
    printInfo() {
        super.printInfo(); // Call the parent method
        console.log(`Trunk Size: ${this.#trunkSize} liters`); // Additional info
    }

    // Method specific to Car
    openTrunk() {
        console.log(`The trunk of the car is open now.`);
    }
}

// Example usage
// const myCar = new Car("Toyota", "Corolla", 450);
// myCar.printInfo();
// myCar.openTrunk();

module.exports = Car;