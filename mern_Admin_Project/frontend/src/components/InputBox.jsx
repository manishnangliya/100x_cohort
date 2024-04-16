export function InputBox({label,type,onChange,value}){
    return <div className="p-2 px-4">
        <p className="py-1 font-semibold text-sm ">{label}</p>
        <input className="border w-96 rounded-md py-1 px-2 font-semibold text-l bg-slate-300 text-black border-gray-700" value={value} type={type} onChange={onChange} />
    </div>
}