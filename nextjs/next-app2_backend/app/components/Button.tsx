import { MouseEvent } from "react";

interface ButtonField{
    text:string
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}
export function Button({text,onClick}:ButtonField){
    return <button type="button" onClick={onClick} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{text}</button>
}