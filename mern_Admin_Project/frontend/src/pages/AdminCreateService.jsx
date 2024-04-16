import { useContext, useState } from "react";
import { HeadingText } from "../components/HeadingText";
import { TextArea } from "../components/TextArea";
import { InputBox } from "../components/InputBox";
import { CustomButton } from "../components/CustomButton";
import axios from "axios";
import { StorageContext } from "../stores/Context";
import { toast } from "react-toastify";

export function AdminCreateService() {
    const [service, setService] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [provider, setProvider] = useState("");
    const allContext = useContext(StorageContext);
    async function handleSubmitService() {
        try {
            const response = await axios.post("http://localhost:3000/api/admin/newservice", {
                service,
                description,
                price: `₹${price}`,
                provider
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: allContext.currToken
                }
            })
            if (response.status === 201) {
                setService("");
                setDescription("");
                setPrice(0);
                setProvider("");
                toast.success(response.data.message);
            }
        } catch (error) {
            // console.log(error.response.data.message);
            allContext.displayNotification(error.response.data.message);
        }
    }
    return <div>
        <div className="flex justify-around">
            <div>
                <img src="/images/register.png" alt="Login image" width="400" height="400" />
            </div>
            <div>
                <HeadingText label={"Create New Service"} />
                <InputBox label={"Service"} type={"text"} value={service} onChange={(e) => {
                    setService(e.target.value);
                }} />
                <InputBox label={"Provider"} type={"text"} value={provider} onChange={(e) => {
                    setProvider(e.target.value);
                }} />
                <InputBox label={"price"} type={"number"} value={price} onChange={(e) => {
                    setPrice(e.target.value);
                }} />
                <TextArea label={"description"} type={"text"} value={description} onChange={(e) => {
                    setDescription(e.target.value);
                }} />
                <CustomButton label={"Save Service"} onClick={handleSubmitService} />
            </div>
        </div>
    </div>
}
