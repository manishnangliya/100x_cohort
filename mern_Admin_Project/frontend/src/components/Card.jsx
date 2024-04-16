import { CustomButton } from "./CustomButton";

export function Card({ service, description, price, provider,isAdmin,deleteService }) {
    return <div>
        <div className="max-w-sm min-h-72 rounded-xl overflow-hidden shadow-lg bg-slate-200 mb-5 ">
            <div className="px-6 py-4">
                <div className="font-bold text-black text-xl ">{service}</div>
                <div className="font-bold text-slate-700 text-l mb-1 ">{provider}</div>
                <p className="text-gray-700 text-base">{description}</p>
                <div className="flex justify-between">
                    <div className="font-bold text-black text-xl mt-2">Price: {price}</div>
                    <CustomButton label={"Buy Now"} />{isAdmin?<CustomButton label={"Delete Service"} onClick={deleteService} />:<></>}
                    
                </div>
            </div>
        </div>
    </div>
}