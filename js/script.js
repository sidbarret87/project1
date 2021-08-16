"use strict";

let num=20;

function showFirstMessage(text) {

    console.log(text);
    console.log(num);
}
showFirstMessage("Джеки Чан");
console.log(num);

// console.log(calc(800,200));
// console.log(calc(1000,200));
// console.log(calc(200,200));

// function calc(a,b) {
//     return (a+b);

// }


function ret() {
    let num=50;
    return num;
}

const anotherNum=ret();

console.log(anotherNum);


const logger=function() {
    console.log("Hello");
};

logger();

const calc=(a,b)=>a+b;