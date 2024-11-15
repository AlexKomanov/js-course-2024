let age = 18;
let message;
if (age > 18) {
    message = "You're adult";
}
else {
    message = "You are under 18";
}

console.log(message);

let ternaryMessage = (age >= 18) ? "You're adult" : "You are under 18";

console.log(ternaryMessage);

// More than if-else inside ternary
let message2 = (age > 18) ? "You're adult" 
            : (age == 18) ? "You're 18 years old" 
            : "You are under 18";

console.log(message2);