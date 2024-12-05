const Bus = require('./bus'); // Import the Bus class
const Car = require('./car'); // Import the Car class

// Create an instance of Bus
const myBus = new Bus("Mercedes", "Sprinter", 20);
myBus.printInfo(); // Print information about the bus
myBus.openDoors(); // Open the bus doors

// Create an instance of Car
const myCar = new Car("Toyota", "Corolla", 450);
myCar.printInfo(); // Print information about the car
myCar.openTrunk(); // Open the trunk of the car 