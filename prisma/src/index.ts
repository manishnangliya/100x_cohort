import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function insertUser(username:string,password:string,firstName:string,lastName:string){
    const res = await prisma.user.create({
        data:{
            email:username,
            password,
            firstName,
            lastName
        }
    })
    console.log(res);
}
// insertUser("new@gmail.com","12345","Manish","Nangliya");
// insertUser("manunangliya@gmail.com","12345","Manish","Nangliya");

interface UpdateParms{
    firstName:string;
    lastName:string;
}
async function updateUser(username:string,{firstName,lastName}:UpdateParms){
    const res = await prisma.user.update({
        where:{
            email:username
        },
        data:{
            firstName,
            lastName
        }
    })
    console.log(res);
}
// updateUser("manunangliya@gmail.com",{firstName:"updated fName",lastName:"updated lName"});

async function getData(){
    const res = await prisma.user.findMany();
    console.log(res);
}
// getData();

async function deleteUser(username:string){
    const res = await prisma.user.delete({
        where:{
            email:username
        }
    })
    console.log(res);
}
// deleteUser("abc@gmail.com");
// getData();
async function insertStudent(firstName:string,lastName:string,className:number,marks:number){
    const res = await prisma.student.create({
        data:{
            firstName,
            lastName,
            className,
            marks
        }
    })
    console.log(res);
}

