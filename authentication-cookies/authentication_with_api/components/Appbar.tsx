"use client"
import { signIn, signOut, useSession } from "next-auth/react"

export default function Appbar() {
    const session = useSession();
    return <div className="flex justify-between bg-slate-400 text-black items-center px-4 ">
        <div>App
            <div>
                {JSON.stringify(session)}
            </div>
        </div>

        <div  >
            <button className=" p-2 border mx-4 rounded-lg  " onClick={()=>{
                signIn();
            }}>Signin</button>
            <button className="p-2 border rounded-lg " onClick={()=>{
                signOut();
            }}>Logout</button>
        </div>
    </div>
}