"use client"
import { useState } from "react";
import { Button } from "./Button";
import { InputField } from "./InputField";
import { useRouter } from "next/navigation";
import { signup } from "../actions/user";

export function SignupPage() {
    const [email,setEmail]= useState<string>("");
    const [password,setPassword] = useState<string>("");
    const router = useRouter();
    return <div className="flex justify-center h-screen">
        <div className="flex flex-col justify-center ">
            <div className="border-4 p-7 rounded-lg flex  flex-col justify-center gap-4">
                <InputField type="email" placeholder="john@xyz.com" label="Email" onChange = {(e)=>setEmail(e.target.value)} />
                <InputField type="password" placeholder="*******" label="Password" onChange = {(e)=>setPassword(e.target.value)}/>
                <Button text="Signup Now" onClick= {  async ()=>{
                    const result = await signup(email,password)
                    console.log(result)
                    router.push('/')
                }}/>
            </div>
        </div>
    </div>
}
