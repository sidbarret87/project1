"use strict";

if (-1) {
    console.log('OK!');
} else {
console.log("Ошибка");
}



// if (num<49){
//     console.log("Ошибка");

// } else if (num>100){
//     console.log("Много");
// }
// else {
//     console.log("Последний вариант!");
// }

// (num===50) ? console.log('OK!') : console.log("Ошибка");

const num=50;
switch(num){
    case 49:
        console.log("Неверно!");
        break;
    case 100:
        console.log("Неверно!");
        break;
    case 51:
        console.log("В точку!");
        break;
    default:
        console.log("Не в этот раз!");
        break;
}