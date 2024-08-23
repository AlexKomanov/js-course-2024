let a = 5;
let b = 7;
let c = "5";

// Equal to (==)
console.log("5 == 5:", a == a);  // Output: true
console.log('5 == "5":', a == c);  // Output: true

// Strict equal to (===)
console.log("5 === 5:", a === a);  // Output: true
console.log('5 === "5":', a === c);  // Output: false

// Not equal to (!=)
console.log("5 != 7:", a != b);  // Output: true

// Strict not equal to (!==)
console.log('5 !== "5":', a !== c);  // Output: true

// Greater than (>)
console.log("7 > 5:", b > a);  // Output: true

// Less than (<)
console.log("5 < 7:", a < b);  // Output: true

// Greater than or equal to (>=)
console.log("7 >= 7:", b >= b);  // Output: true

// Less than or equal to (<=)
console.log("5 <= 5:", a <= a);  // Output: true