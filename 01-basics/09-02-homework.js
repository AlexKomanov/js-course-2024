// Task 1
// const n = 5;  // המספר עד אליו נחשב את הסכום
// let sum = 0;  // משתנה שמחזיק את הסכום

// for (let i = 1; i <= n; i++) {  // לולאה שרצה מאפס עד המספר 
//   sum += i;  // הוספת כל מספר לסכום
// }

// console.log(sum);  // פלט: 15


// Task 2
// length = 8 ; lastIndex = 7
// const namesArray = ['Tom', 'Jerry', 'Spike', 'Butch', 'Tyke', 'Nibbles', 'Toodles', 'Mammy Two Shoes'];

// for (const name of namesArray) {  // לולאת for-of שעוברת על כל איבר במערך
//   console.log(name);  // הדפסת כל שם
// }

// Alternative way by using for loop
// for (let i = 0; i < namesArray.length; i++) {
//     console.log(namesArray[i]);
// }


// Task 3

let i = 0;
while (i <= 20) {  // לולאה שרצה כל עוד i קטן או שווה ל-20
    if (i > 16) {    // עצירה כאשר המספר עולה על 16
        break;         // שימוש ב-break לעצור את הלולאה
    }
    if (i % 2 === 0) {  // בודק אם המספר זוגי
        console.log(i);   // מדפיס את המספר אם הוא זוגי
    }
    i++;  // הגדלת i
}
