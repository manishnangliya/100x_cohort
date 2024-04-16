import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName
        }
    })
    console.log(res);
}
async function insertTodo(title:string, description:string,userId:number) {
    const res = await prisma.todo.create({
        data:{
            title,
            description,
            userId
        }
    })
    console.log(res);
}

interface updateParams{
    firstName:string
    lastName:string
}

async function updateUser(usernme:string,{firstName,lastName}:updateParams) {
    const res = await prisma.user.update({
        where:{username:usernme},
        data:{
            firstName,
            lastName
        },
        select:{
            username:true,
            firstName:true,
            lastName:true
        }
    })
    console.log(res);
}

async function getUser(username:string) {
    const res = await prisma.user.findFirst({
        where:{
            username:username
        }
    })
    console.log(res);
}
//joins
async function getTodosAndUserDetails(userId:number) {
    const res = await prisma.todo.findMany({
        where:{
            userId:userId
        },
        select:{
            id:true,
            title:true,
            description:true,
            user:true
        }
    })
    console.log(res);
}
getTodosAndUserDetails(1);

// insertUser("newuser2@gmail.com","newuser2","new2", "user2");
// insertTodo('todo2','newdescription todo2',1);
// updateUser("newuser2@gmail.com",{firstName:"updatedFirstName", lastName:"updatedLastName"});
// getUser("newuser2@gmail.com")