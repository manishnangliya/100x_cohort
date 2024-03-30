//method1: store all keypress in a type
type Direction = "up"|"down" | "right" | "left";
function doSomething(keyPressed:Direction){
    return keyPressed;
}
// console.log(doSomething("right"));

//method 2:
enum enumDirection {
    Up,
    Down,
    Left,
    Right
};
function doSomething1(keyPressed:enumDirection){
    return keyPressed;
}
// console.log(doSomething1(enumDirection.Down));
// console.log(doSomething1(enumDirection.Up));


function identity<T>(arg:T):T{
    return arg;
}
console.log(identity<string>("abc").toUpperCase());
console.log(identity<number>(1));
