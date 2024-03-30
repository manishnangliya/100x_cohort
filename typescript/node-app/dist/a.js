"use strict";
function greet(firstName) {
    console.log("Hello " + firstName);
}
function sum(num1, num2) {
    return num1 + num2;
}
function isLegal1(age) {
    if (age < 18) {
        return false;
    }
    else
        return true;
}
function printHello() {
    console.log("hello");
}
function printAfterOneSecond(printHello) {
    setInterval(printHello, 1000);
}
printAfterOneSecond(printHello);
