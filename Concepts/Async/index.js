function calSum(n){
    let sum=0;
    for(let i=1;i<n;i++)
        sum+=i;
    return sum;
}
function delay(){
    console.log("function inside delay");
}
const { error } = require("console");
// setTimeout(delay, 1000);
// console.log(calSum(100));

//***************************************** */

const fs = require("fs");
fs.readFile("a.txt","utf-8",(error,data)=>{
    console.log(data);
});
console.log("after reading file");
//****************************************** */
//reading data from file sync
let data = fs.readFileSync("a.txt", "utf-8");
console.log(data);
console.log("after reading file");
//***************************************** */

// simple read data from file asynchrounously
// const fs = require("fs");
// function main(){
//   fs.readFile("a.txt", "utf8", (err, data) => {
//     console.log(data);
//   });
// }    
//***************************************** */

// reading data from a file  using callback function
// const fs = require("fs");
// function readData(cb){
//   fs.readFile("a.txt", "utf8", (err, data) => {
//     cb(data);
//   });
// }
// function cb(data){
//   console.log(data);
// }
// function main(){
//   readData(cb);
// }
//***************************************** */
//reading data from a file using promises
// const fs = require("fs");
// function readData(){
//   return new Promise(function(resolve){
//     fs.readFile("a.txt", "utf8", (err, data) => {
//       resolve(data);
//     });
//   });
// }
// function onFinish(data){
//   console.log(data);
// }
// function main(){
//   readData().then(onFinish);
// }
//*******************************************************8 */
// reading data from a file using async, await
const fs = require("fs");
function readData(){
  return new Promise(function(resolve){
    fs.readFile("a.txt", "utf8", (err, data) => {
      resolve(data);
    })
  });
}

async function main(){
  var data = await readData();
  console.log(data);
}

main();



//***************************************** */
// var d = new Promise(function(resolve){
//   setTimeout(function(){
//   resolve("hello world");
//   },1000)
// });
// function onDone(data){
//   console.log(data);
// }
// console.log(d);
// d.then(onDone);

//***************************************** */

// call a function after 2 second
// function fn(cb){
//   setTimeout(cb,2000);
// }
// function cb(){
//   console.log("hi there")
// }
// fn(cb);
//***************************************** */
function fn(){
  return new Promise(function(resolve){
    setTimeout(resolve,2000);
  });
}
function cb(){
  console.log("hi there");
}
fn().then(cb);

//***************************************** */