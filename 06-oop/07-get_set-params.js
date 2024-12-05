class Person {
    #age;

    get age() {
        return this.#age;
    }
 
    set age(newAge) {
        if (newAge >= 0 && newAge <= 120) {
            this.#age = newAge;
        }
        else {
            throw new Error("The age must be in range of 0 > age < 120");
        }
    }
}

const person = new Person();

person.age = 25;
console.log(person.age); // 25

person.age = 36
console.log(person.age); // 36

// person.age = -4
// console.log(person.age); // 36