"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const res = sumOfAge({
    name: "Manish",
    age: 21
}, {
    name: "Rahul",
    age: 32
});
console.log(res);
