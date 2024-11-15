let age = 50;

// if

// if (age >= 18) {
//     console.log("You're adult");
// }

// if-else
// if (age > 18) {
//     console.log("You're adult");
// }
// else {
//     console.log("You are under 18.");
// }

//if - else-if - else
// if (age > 18) {
//     console.log("You're adult");
// }
// else if(age == 18) {
//     console.log("You're 18 years old");
// }
// else {
//     console.log("You are under 18.");
// }


// And Operator
if (age > 18 && age < 67) {
    console.log("You're adult");
}
else if(age == 18) {
    console.log("You're 18 years old");
}
else if (age >= 67) {
    console.log("You're a pensioner!")
}
else {
    console.log("You are under 18.");
}