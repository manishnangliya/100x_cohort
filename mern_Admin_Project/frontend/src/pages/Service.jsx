import { useContext, useEffect, useState } from "react";
import { Card } from "../components/Card";
import { HeadingText } from "../components/HeadingText";
import { StorageContext } from "../stores/Context";
import axios from "axios";
import { toast } from "react-toastify";

export function Service() {
    const allContext = useContext(StorageContext);
    const token = allContext.currToken;
    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api/service/getcourse', {
            method: "GET"
        })
            .then(async (response) => {
                const json = await response.json();
                setServiceData(json.course);
            })
    }, [])
    async function deleteServiceFunction(currServiceData){
        // alert(serviceData.service)
        const res = await axios.delete('http://localhost:3000/api/admin/deleteservice', {
            headers: {
                Authorization: token,
                id: currServiceData._id
            }
        })
        console.log(res);
        if (res.status === 200) {
            toast.success(res.data.message)
            const newServices = serviceData.filter(service => service._id != currServiceData._id);
            setServiceData(newServices);
        }
        else {
            toast.error("Service not deleted, Refresh & Try Again!")
        }
    }
    return <>
        <HeadingText label={"All available Services"} />
        <div className="grid grid-col-1 sm:grid-col-2 lg:grid-cols-3 gap-3">
            {serviceData.map(data => <Card key={data._id} service={data.service} description={data.description} price={data.price} provider={data.provider} isAdmin={allContext.user.isAdmin} deleteService={()=>deleteServiceFunction(data)}/>)}
        </div>
    </>
}