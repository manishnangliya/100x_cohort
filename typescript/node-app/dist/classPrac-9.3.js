"use strict";
function doSomething(keyPressed) {
    return keyPressed;
}
console.log(doSomething("right"));
//method 2:
var enumDirection;
(function (enumDirection) {
    enumDirection[enumDirection["Up"] = 0] = "Up";
    enumDirection[enumDirection["Down"] = 1] = "Down";
    enumDirection[enumDirection["Left"] = 2] = "Left";
    enumDirection[enumDirection["Right"] = 3] = "Right";
})(enumDirection || (enumDirection = {}));
;
function doSomething1(keyPressed) {
    return keyPressed;
}
// console.log(doSomething1(enumDirection.Down));
// console.log(doSomething1(enumDirection.Up));
function identity(arg) {
    return arg;
}
console.log(identity("abc").toUpperCase());
console.log(identity(1));
