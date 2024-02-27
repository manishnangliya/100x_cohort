// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");
fs.readFile("file.txt","utf-8",function(err,data){
    let afterSpace="";
    let space=0;
    for(let i=0;i<data.length;i++){
        if(data[i]!=' '){
            if(space)
                afterSpace+=" ";
            afterSpace+=data[i];
            space=0;
        }
        else{
            space++;
        }
    }
    // console.log(afterSpace);
    fs.writeFile("file.txt",afterSpace,function(err,data){
        console.log("spaces removed");
    })
})
