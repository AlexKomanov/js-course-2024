class Car {
    #speed;
    
    constructor() {
        this.#speed = 0;
    }

    accelerate() {
        this.#speed += 10;
    }

    getSpeed() {
        return this.#speed;
    }

}

const myCar = new Car();
myCar.accelerate();
console.log(myCar.getSpeed());
// myCar.#speed = 100; // Error - can't access private field
// console.log(myCar.#speed); 
