let day = 7;

switch (day) {
    case 1:
        console.log("It is a Sunday");
        break;
    case 2:
        console.log("It is a Monday");
        break;
    case 3:
        console.log("It is a Tuesday");
        break;
    case 4:
        console.log("It is a Wednesday");
        break;
    case 5:
        console.log("It is a Thursday");
        break;
    case 6:
    case 7:
        console.log("It is a Weekend!!!");
        break;
    default:
        console.log("A wrong number of a day was chosen!");
        break;
}


// if(day == 1) {
//     console.log("It is a Sunday")
// }
// else if(day == 2) {
//     console.log("It is a Monday")
// }
// else if(day == 2) {
//     console.log("It is a Tuesday")
// }
// else {
//     console.log("It is a Shabbath!")
// }