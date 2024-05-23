import { ChangeEventHandler } from "react"

interface SignupField{
    type:string,
    placeholder:string
    label:string
    onChange :ChangeEventHandler<HTMLInputElement>
}
export function InputField({type,placeholder,label,onChange}:SignupField){
    return <div>
    <label className="block mb-2 text-sm font-medium">{label}</label>
    <input type={type} id="first_name" onChange={onChange} className="bg-gray-50 border w-72  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5" placeholder={placeholder} required />
</div>
}   