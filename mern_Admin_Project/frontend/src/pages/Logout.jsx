import { useContext, useEffect } from "react"
import { StorageContext } from "../stores/Context"
import { Navigate } from "react-router-dom";

export function Logout(){
    const allContext = useContext(StorageContext);
    console.log("handle");
    useEffect(()=>{
        // console.log("handle");
        allContext.removeToken()
    },[allContext.removeToken])
    return <Navigate to='/login'/>
}