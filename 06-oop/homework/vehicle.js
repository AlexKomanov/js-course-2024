class Vehicle {
    #manufacturer; // Private field for manufacturer
    #model;       // Private field for model

    constructor(manufacturer, model) {
        this.#manufacturer = manufacturer; // Initialization of the private field
        this.#model = model;               // Initialization of the private field
    }

    // Method to print vehicle information
    printInfo() {
        console.log(`Manufacturer: ${this.#manufacturer}, Model: ${this.#model}`);
    }
}

// Example of usage
// const myVehicle = new Vehicle("Toyota", "Corolla");
// myVehicle.printInfo(); // Output: Manufacturer: Toyota, Model: Corolla 


module.exports = Vehicle;