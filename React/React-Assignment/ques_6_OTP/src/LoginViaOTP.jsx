import { useRef } from "react"

export function LoginViaOTP() {
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);
    const fourthRef = useRef(null);
    const buttonRef = useRef(null);
    return <div className="text-white flex flex-col justify-center items-center ">
        <h1 className="text-5xl m-10">Login via OTP</h1>
        <div className="flex gap-7">
            <input type="text" ref={firstRef} className="border border-white bg-black w-16 text-center rounded-md px-2 py-3 text-2xl" pattern="[0-9]" maxLength={1} onChange={function (e) {
                    secondRef.current.focus();
            }}></input>
            <input type="text" ref={secondRef} className="border border-white bg-black w-16 text-center rounded-md px-2 py-3 text-2xl"  pattern="[0-9]" maxLength={1} onChange={function (e) {
            
                    thirdRef.current.focus();
            }}></input>
            <input type="text" ref={thirdRef} className="border border-white bg-black w-16 text-center rounded-md px-2 py-3 text-2xl" pattern="[0-9]" maxLength={1} onChange={function (e) {
        
                    fourthRef.current.focus();
            }}></input>
            <input type="text" ref={fourthRef} className="border border-white bg-black w-16 text-center rounded-md px-2 py-3 text-2xl" pattern="[0-9]" maxLength={1} onChange={function (e) {
                buttonRef.current.focus();
            }}></input>
        </div>
        <button ref={buttonRef} className="w-48 border border-white m-10 rounded-md px-2 py-3 text-xl hover:bg-slate-600">Validate OTP</button>
    </div>
}