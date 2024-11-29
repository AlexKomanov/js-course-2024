// Given code with regular loop:
const numbers = [1, 2, 3, 4, 5];
const resultArray = [];

for(let i = 0; i < numbers.length; i++) {
    resultArray.push(numbers[i] * 3 + 2);
}
console.log("Regular loop result:", resultArray);

const resultArrayMap = numbers.map(num => num * 3 + 2);
console.log("Map method result:", resultArrayMap);
