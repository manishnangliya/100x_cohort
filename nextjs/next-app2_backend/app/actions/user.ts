"use server"
import client from '@/db'
export async function signup(email:string,password:string){
    //headers
    // console.log(req.headers.get('authorization'));
    //query parameters
    // console.log(req.nextUrl.searchParams.get('name'));
    try {
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
        return {
            message:"You are logged in",
            data: res
        }
    } catch (error) {
        return "error while signup"
    }


}