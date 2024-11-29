// Given code with regular loop:
const numbers = [2, 6, 8, 3, 11, 4, 7];
let sum = 0;

for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Regular loop result:", sum);

const sumWithReduce = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Reduce method result:", sumWithReduce);

