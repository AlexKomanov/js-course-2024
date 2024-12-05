class Person {
    #age;

    constructor() {
        this.#age = 18;
    }

    getAge() {
        return this.#age;
    }

    setAge(newAge) {
        if (newAge >= 0 && newAge <= 120) {
            this.#age = newAge;
        }
    }
}

const person = new Person();
console.log(person.getAge()); // 18
person.setAge(25);
console.log(person.getAge()); // 25