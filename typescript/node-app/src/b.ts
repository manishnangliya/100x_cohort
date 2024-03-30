
//giving the schema or type of an object 
interface User{
    firstName:string,
    lastName:string,
    email?:string,
    age:number
}
// both are almost same but interface can implements to class as OOPS
type User1={
    firstName:string,
    lastName:string,
    email?:string,
    age:number
}

function isLegal(user:User):boolean{
    if(user.age<18){
        return false;
    }
    else    
        return true;
}

const output = isLegal({
    firstName:"Manish",
    lastName:"Nangliya",
    age:20
})
// console.log(output);

interface TodoType{
    title:string,
    description:string,
    done?:boolean
}
function Todo({title,description}:TodoType){
    return title
}
const task:TodoType ={
    title:"t1",
    description:"d"
}
console.log(Todo(task));