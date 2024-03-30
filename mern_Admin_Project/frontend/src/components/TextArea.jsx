export function TextArea({label,onChange,value}){
    return <div className="p-2 px-4">
    <p className="py-1 font-semibold text-sm ">{label}</p>
    <textarea rows="6" cols="48" className="rounded-md  bg-slate-300 text-black py-1 px-2 text-l" value={value}  onChange={onChange}/>
    </div>
}