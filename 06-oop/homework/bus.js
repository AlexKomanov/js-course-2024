const Vehicle = require('./vehicle'); // Import the Vehicle class

class Bus extends Vehicle {
    #capacity; // Additional field for bus capacity

    constructor(manufacturer, model, capacity) {
        super(manufacturer, model);
        this.#capacity = capacity; // Initialize the additional field
    }

    // Override the printInfo method
    printInfo() {
        super.printInfo(); // Call the parent method
        console.log(`Capacity: ${this.#capacity} passengers`); // Additional info
    }

    // Method specific to Bus
    openDoors() {
        console.log(`The doors of the bus are open now.`);
    }
}

// Example usage
// const myBus = new Bus("Mercedes", "Sprinter", 20);
// myBus.printInfo();
// myBus.openDoors();

module.exports = Bus;