
function greet(firstName:string){
    console.log("Hello "+firstName);
}
function sum(num1:number,num2:number):number{
    return num1+num2;
}

function isLegal1(age:number):boolean{
    if(age<18){
        return false;
    }
    else    
        return true;
}

function printHello(){
    console.log("hello");
}

function printAfterOneSecond(printHello:()=>void){
    setInterval(printHello,1000)
}
printAfterOneSecond(printHello);