import { useContext, useEffect } from "react"
import { StorageContext } from "../stores/Context"
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';

export function Logout(){
    const allContext = useContext(StorageContext);
    console.log("handle");
    useEffect(()=>{
        // console.log("handle");
        allContext.removeToken()
    },[allContext.removeToken])
    toast.success("Logged out successfully")    
    return <Navigate to='/login'/>
}