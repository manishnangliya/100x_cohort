import { NavLink } from "react-router-dom";
import { Logout } from "../pages/Logout";
import { useContext } from "react";
import { StorageContext } from "../stores/Context";

export function Navbar() {
    const allContext = useContext(StorageContext);
    const currToken = allContext.currToken;
    return <div className="w-full mb-12">
        <div className='flex justify-between py-3 px-4  rounded-md'>
            <div >
                My Project
            </div>
            <div className="flex justify-between gap-10 px-6 underline ">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>

                <NavLink to='/service'>Services</NavLink>

                <NavLink to='/contact'>Contact</NavLink>
                {currToken ? <NavLink to='/logout' >Logout</NavLink> :
                    <>
                        <NavLink to='/signup'>Register</NavLink>
                        <NavLink to='/login'>Login</NavLink>
                    </>}


            </div>
        </div>
    </div>
}