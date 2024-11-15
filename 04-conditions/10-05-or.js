//         //   true   ||  true
// console.log((5 > 0) || (10 > 4))
//         //   true   ||    false
// console.log((5 > 0) || (10 < 4))
//         //   false   ||   true  
// console.log((5 < 0) || (10 > 4))
//         //   false   ||   false  
// console.log((5 < 0) || (10 < 4))

        //   true   ||   true  ||    true  
console.log((5 > 0) || (10 > 4) || (10 == 10))

        //   true   ||   false  ||    false  
console.log((5 > 0) || (10 < 4) || (10 <= 10))

        //   false   ||   false  ||    false  
console.log((5 < 0) || (10 < 4) || (10 < 10))