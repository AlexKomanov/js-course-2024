class Car {
    #realPrivate;    // True private field - cannot be accessed from outside
    _fakePrivate;    // Convention only - can still be accessed from outside

    constructor() {
        this.#realPrivate = "can't access from outside";
        this._fakePrivate = "can still access from outside";
    }
}

const car = new Car();
// console.log(car.#realPrivate);     // Error! Cannot access private field
console.log(car._fakePrivate);  // Works but not recommended - breaks encapsulation
car._fakePrivate = "Can be changed outside";
console.log(car._fakePrivate);  // Works but not recommended - breaks encapsulation