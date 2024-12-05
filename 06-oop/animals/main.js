const Dog = require('./dog');
const Animal = require('./animal')


const myDog = new Dog('Buddy');
console.log(myDog.makeSound());
// Output: 'Buddy barks'

const myAnimal = new Animal("general name");
console.log(myAnimal.makeSound());

