class Car {
    speed;
    
    constructor() {
        this.speed = 0;
    }

    accelerate() {
        this.speed += 10;
    }
}

const myCar = new Car();
console.log(myCar.speed); // 0
myCar.accelerate();
console.log(myCar.speed); // 10
myCar.speed = -100; 
console.log(myCar.speed); // -100