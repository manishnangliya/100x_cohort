import { useContext, useState } from "react"
import { HeadingText } from "../components/HeadingText"
import { InputBox } from "../components/InputBox"
import { CustomButton } from "../components/CustomButton"
import { useNavigate } from "react-router-dom";
import { StorageContext } from "../stores/Context";
import { toast } from 'react-toastify';

export function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const allContext = useContext(StorageContext);
    async function handleClickLogin() {
        try {
            const res = await fetch('http://localhost:3000/api/auth/login',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    email,
                    password
                })
            })
            const json = await res.json();
            // console.log(json);
            if(res.ok){
                // allContext.displayNotification(json.message);
                toast.success(json.message)
                const token = json.token;
                // localStorage.setItem("token",token);
                allContext.setToken(token);
                setEmail("");
                setPassword("");
                navigate("/");
            }
            else{
                // alert("Incorrest credentials");
                allContext.displayNotification(json.message);
                console.log(json);
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    return <div className="flex justify-evenly">
        <div>
            <img src="/images/register.png" alt="Login image" width="400" height="400"/>
        </div>
        <div>
            <HeadingText label={"Login Form"}/>
            <InputBox label={"Email"} type={"email"} onChange={(e) => {
                setEmail(e.target.value);
            }} />
            <InputBox label={"Password"} type={"password"} onChange={(e) => {
                setPassword(e.target.value);
            }} />
            <CustomButton label={"Login Now"} onClick = {handleClickLogin} />

        </div>
    </div>
}