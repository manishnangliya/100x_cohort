import { useContext, useEffect, useState } from "react"
import { InputBox } from "../components/InputBox"
import { CustomButton } from "../components/CustomButton"
import { HeadingText } from "../components/HeadingText"
import { TextArea } from "../components/TextArea"
import axios from 'axios'
import { StorageContext } from "../stores/Context"

export function Contact() {
    const allContext = useContext(StorageContext);
    const user = allContext.user;
    const [email, setEmail] = useState(user.email || "")
    const [username, setUsername] = useState(user.username || "")
    const [message, setMessage] = useState("")

    useEffect(() => {
        setEmail(user.email);
        setUsername(user.username);
    }, [user])
    async function handleSubmitMessage() {
        try {
            const res = await axios.post(
                'http://localhost:3000/api/form/contact',
                {
                    username,
                    email,
                    message
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
            if (res.status == 200) {
                alert(res.data.message);
                if (!allContext.currToken) {
                    console.log("inside");
                    setUsername("");
                    setEmail("");
                }
                setMessage("");
            }
        } catch (error) {
            if (error.response && error.response.data) {
                // Handle error response data
                console.log(error.response.data.message);
            } else {
                // Handle other types of errors
                console.log("An error occurred:", error.message);
            }
        }
    }
    return <div>
        <div className="flex justify-evenly">
            <div>
                <img src="/images/register.png" alt="Login image" width="400" height="400" />
            </div>
            <div>
                <HeadingText label={"Contact Us"} />
                <InputBox label={"Username"} type={"text"} value={username} onChange={(e) => {
                    setUsername(e.target.value);
                }} />
                <InputBox label={"Email"} type={"email"} value={email} onChange={(e) => {
                    setEmail(e.target.value);
                }} />
                <TextArea label={"Message"} value={message} onChange={(e) => {
                    setMessage(e.target.value)
                }} />
                <CustomButton label={"Submit Message"} onClick={handleSubmitMessage} />
            </div>

        </div>
        <div  >
            <iframe className="rounded-xl w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.3184569035798!2d73.02006087595598!3d26.283774386834818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c4c77804d5d%3A0x8e1f987cff573d27!2sJodhpur!5e0!3m2!1sen!2sin!4v1711487053062!5m2!1sen!2sin" height="220" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
}