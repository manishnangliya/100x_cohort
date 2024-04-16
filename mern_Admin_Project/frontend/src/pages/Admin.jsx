import { useContext } from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import { StorageContext } from "../stores/Context";
import { HeadingText } from "../components/HeadingText";

export function Admin() {
    const allContext = useContext(StorageContext);
    const user = allContext.user;
    const loading = allContext.loading;
    // console.log(loading);
    if (loading) {
        return <div className="text-center">
            <HeadingText label={"Loading..."}/>
        </div>
    }
    // console.log(user);

    if (!user.isAdmin) {
        return <Navigate to="/" />
    }
    return <div className="px-4 pb-5 " >
        <div className='flex justify-between  rounded-md'>
            <div >
                Welcome to Admin Dashboard
            </div>
            <div className="flex justify-between gap-10 px-6 pb-8  underline ">
                <NavLink to='./alluser'>All Users</NavLink>

                <NavLink to='./allmessage'>All Messages</NavLink>

                <NavLink to='./newservice'>Add New Service</NavLink>
            </div>
        </div>
        <Outlet />
    </div>
}