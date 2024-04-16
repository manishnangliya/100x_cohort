import { CustomButton } from "./CustomButton";

export function AdminMessageComponent({ username, email, message, deleteMessage }) {
    return <div>
        <div className="min-w-[40rem] md:min-w-[80rem] max-h-sm rounded-xl overflow-hidden shadow-lg bg-slate-200 mb-5 ">
            <div className="px-6 py-4">
                <div className="flex justify-between">
                    <div className="font-bold text-black text-xl ">{"Username: " + username}</div>
                    <div className="font-bold text-slate-700 text-l mb-1 ">{"Email: " + email}</div>
                </div>
                <p className="font-bold text-slate-700 text-l mb-1 ">{"Message: " + message}</p>
                <div className="flex justify-center items-center">
                    <CustomButton label={"Delete Message"} onClick={deleteMessage} />
                </div>
            </div>
        </div>
    </div>
}