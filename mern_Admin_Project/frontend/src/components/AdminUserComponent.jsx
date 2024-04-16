import { CustomButton } from "./CustomButton";

export function AdminUserComponent({ username, email, phone, isAdmin, deleteUser,editUser }) {
    return <div>
        <div className="max-w-[21rem] max-h-sm rounded-xl overflow-hidden shadow-lg bg-slate-200 mb-5 ">
            <div className="px-6 py-4">
                <div className="font-bold text-black text-xl ">{"Username: " + username}</div>
                <div className="font-bold text-slate-700 text-l mb-1 ">{"Email: " + email}</div>
                <div className="font-bold text-slate-700 text-l mb-1 ">{"Phone: " + phone}</div>
                <div className="font-bold text-slate-700 text-l mb-1 ">{"IsAdmin: " + isAdmin}</div>
                <div className="flex justify-between">
                    <CustomButton label={"Edit User Details"} onClick={editUser}   />
                    <CustomButton label={"Delete User"} onClick={deleteUser}  />
                </div>
            </div>
        </div>
    </div>
}