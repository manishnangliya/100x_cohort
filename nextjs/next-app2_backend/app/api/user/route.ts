import { NextRequest } from "next/server"
import { PrismaClient } from '@prisma/client'
import client from '@/db'


export async function GET(){
    //database logic
    const user = await client.user.findFirst();
    return Response.json({
        email:user?.email,
        name:"Manish"
    })
}


export async function POST(req:NextRequest){
    //database logic
    //extract the body
    const body = await req.json();
    const email = body.email;
    const password = body.password

    //headers
    // console.log(req.headers.get('authorization'));
    //query parameters
    // console.log(req.nextUrl.searchParams.get('name'));

    const res = await client.user.create({
        data:{
            email,
            password
        },

        select:{
            id:true,
            email:true
        }
    })


    return Response.json({
        message:"You are logged in",
        data: res
    })

}