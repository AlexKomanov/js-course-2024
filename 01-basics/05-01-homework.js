// Part 01
const person = {
    name: "Alex",
    age: 36
}

// console.log(person)

// const person2 = new Object() // Another option of object creation
// person2.name = "Alexander"
// person2.age = 36

// console.log(person2)

// Part 02

// console.log(person.name)
// console.log(person['age'])

// Part 03

person.city = "Karmiel"

// console.log(person)

// Part 04

person.address = {
    street: "My Streeet",
    zipCode: 20100,
    "apartment number": 10 // Extra property
}

// console.log(person)

// Part 05
// console.log(person['address']['apartment number']) // Brackets notation
// console.log(person['address'].zipCode) // Combination of Brackets and Dot notation
// console.log(person.address['zipCode']) // Combination of Brackets and Dot notation
// console.log(person.address.street) // Dot notation

// Part 06

delete person.age
// console.log(person)

// Part 07

console.log("name" in person)
console.log(person.name)
console.log("age" in person)
console.log(person.age)
