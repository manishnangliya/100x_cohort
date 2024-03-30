import { useContext, useEffect, useState } from "react";
import { InputBox } from "../components/InputBox";
import { CustomButton } from "../components/CustomButton";
import { HeadingText } from "../components/HeadingText";
import { useNavigate } from "react-router-dom";
import { StorageContext } from "../stores/Context";

export function Signup() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const allContext = useContext(StorageContext);
    async function handleClick() {
        try {
            const res = await fetch('http://localhost:3000/api/auth/register',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    username,
                    email,
                    phone,
                    password
                })
            })
            const json = await res.json();
            // console.log(json);
            if(res.ok){
                alert(json.message);
                const token = json.token;
                // console.log(setToken);
                allContext.setToken(token);
                setUsername("");
                setEmail("");
                setPhone("");
                setPassword("");
                navigate("/");
            }
            else{
                alert(json.message);
                console.log(json.message);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return <div className="flex justify-evenly">
        <div>
            <img src="/images/register.png" alt="registration image" width="400" height="400" />
        </div>
        <div>
            <HeadingText label={"Registration Form"} />
            <InputBox label={"Username"} type={"text"} onChange={(e) => {
                setUsername(e.target.value);
            }} />
            <InputBox label={"Email"} type={"email"} onChange={(e) => {
                setEmail(e.target.value);
            }} />
            <InputBox label={"Phone"} type={"number"} onChange={(e) => {
                setPhone(e.target.value);
            }} />
            <InputBox label={"Password"} type={"password"} onChange={(e) => {
                setPassword(e.target.value);
            }} />
            <CustomButton label={"Register Now"} onClick={handleClick} />
        </div>
    </div>
}