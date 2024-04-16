import { useContext, useEffect, useState } from "react";
import { HeadingText } from "../components/HeadingText";
import { StorageContext } from "../stores/Context";
import { AdminUserComponent } from "../components/AdminUserComponent";
import axios from "axios";
import { toast } from "react-toastify";

export function AdminGetUser() {
    const [accounts, setAccounts] = useState([]);
    const allContext = useContext(StorageContext);
    const token = allContext.currToken;
    const user = allContext.user
    useEffect(() => {
        fetch('http://localhost:3000/api/admin/getuser', {
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
                // console.log(json.users);
                setAccounts(json.users);
            })
    }, [token])
    async function editUserFunction(nowEditUser,yourAccount){
        alert(nowEditUser.username)
    }
    async function deleteUserFunction(nowDeletedUser,yourAccount) {
        if(yourAccount){
            toast.error("You can't delete your account");
            return;
        }
        const res = await axios.delete('http://localhost:3000/api/admin/deleteuser', {
            headers: {
                Authorization: token,
                id: nowDeletedUser._id
            }
        })
        if (res.status === 200) {
            toast.success(res.data.message)
            const newAccounts = accounts.filter(account => account.email != nowDeletedUser.email);
            setAccounts(newAccounts);
        }
        else {
            toast.error("User not deleted, Refresh & Try Again!")
        }
    }
    return <div >
        <div className="text-center">
            <HeadingText label={"List of all Users"} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
            {accounts.map(account => <AdminUserComponent key={account._id} username={account.username} email={account.email} phone={account.phone} isAdmin={account.isAdmin} editUser={()=>editUserFunction(account,account.email === user.email)} deleteUser={() => deleteUserFunction(account,account.email === user.email)} />)}
        </div>
    </div>
}