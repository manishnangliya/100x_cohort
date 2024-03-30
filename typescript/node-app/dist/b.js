"use strict";
function isLegal(user) {
    if (user.age < 18) {
        return false;
    }
    else
        return true;
}
const output = isLegal({
    firstName: "Manish",
    lastName: "Nangliya",
    age: 20
});
function Todo({ title, description }) {
    return title;
}
const task = {
    title: "t1",
    description: "d"
};
console.log(Todo(task));
