import {z} from 'zod'
interface User {
    id:String,
    name: string,
    age: number,
    email:string,
    password:string
}
//************************************************** Pick ****************************************************//
//I want only name email and password 
//1. either create new userInterface with these 3 fields but it violet DRY Principal
//2 pick some existing properties using generic function

// we are using type becoz it allows to use union , intersection
type updatedUser = Pick<User,'name'| 'email'| 'password'>

//************************************************** Partial ****************************************************//

// now if I need the partial values it doesn't necessary that user give all the values

type updateUserOptional = Partial<updatedUser>

function updateUser(updatedUser:updateUserOptional){

}
updateUser({
    name:"manish"
})

//************************************************** Readonly ****************************************************//

interface newUser{
    readonly id:String;
    name:String;
}
// OR

type newConstUser = Readonly<newUser>


//********************************************************Records*******************************************************//
//this is not cleaner syntax
// type details = {
//     name:string;
//     city:string
// }

// type student = {
//     [key:string]:details
// }

// const student1:student={
//     "id1":{
//         name:"manish",
//         city:"jodhpur"
//     }
// }

//clean syntax
type details = {
    name:string;
    city:string;
}
type student = Record<string,details>
const student1:student={
    "id1":{
        name:"manish",
        city:"jodhpur"
    }
}

//***************************************ZOD*******************************//

const userSchema = z.object({
    name:z.string(),
    email:z.string().email().optional(),
})







type finalUserSchema = z.infer<typeof userSchema>