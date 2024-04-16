import { useContext, useEffect, useState } from "react";
import { AdminMessageComponent } from "../components/AdminMessageComponent";
import { HeadingText } from "../components/HeadingText";
import { StorageContext } from "../stores/Context";

export function AdminGetMessage() {
    const [allmessage, setAllMessage] = useState([]);
    const allContext = useContext(StorageContext);
    const token = allContext.currToken;
    useEffect(() => {
        fetch('http://localhost:3000/api/admin/getmessage', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: token
            }
        })
            .then(async (res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await res.json();
                setAllMessage(json.message);
            })
    }, [token])
    return <div>
        <div className="text-center">
            <HeadingText label={"List of all Feedbacks"} />
        </div>
        <div className="">
            {allmessage.map(msg => <AdminMessageComponent key={msg._id} username={msg.username} email={msg.email} message={msg.message} />)}

        </div>
    </div>
}