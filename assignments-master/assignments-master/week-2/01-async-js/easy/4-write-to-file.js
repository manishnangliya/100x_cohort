// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs")
const path = "4-write-to-file.md";
fs.readFile(path,"utf-8",function(err,data){
    console.log(data);
    data = data.toUpperCase();
    console.log(data);
    fs.writeFile(path,data,function(err,data){
        console.log("file saved");
    });
})