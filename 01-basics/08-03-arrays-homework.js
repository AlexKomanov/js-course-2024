// Task 1

// const numbers = [5, 10, 15];
// numbers.push(20, 25);
// console.log(numbers);
// const sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
// console.log("Sum of numbers:", sum); // Sum of numbers: 75


// Task 2

// const strings = new Array("JavaScript", "is", "awesome");
// console.log(strings);

// strings.unshift("Learning");
// console.log("Array length:", strings.length); // Array length: 4
// console.log(strings); // [ 'Learning', 'JavaScript', 'is', 'awesome' ]

// const sentence = strings.join('--');
// console.log("Joined string:", sentence); // Joined string: Learning--JavaScript--is--awesome

// strings[1] = "TS";
// console.log(strings); // [ 'Learning', 'TS', 'is', 'awesome' ]


// Task 3

const mixedArray = [42, "hello", true];

const lastItem = mixedArray.pop();

console.log("Removed item:", lastItem); // Removed item: true
console.log("Array after pop:", mixedArray); // [42, "hello"]
console.log("Array length after pop:", mixedArray.length); // Array length after pop: 2

mixedArray.push({ key: "value" }, false);
console.log("Array after push:", mixedArray); // Array after push: [ 42, 'hello', { key: 'value' }, false ]

const slicedArray = mixedArray.slice(0, 2);
console.log("Sliced array:", slicedArray); // [42, "hello"]

