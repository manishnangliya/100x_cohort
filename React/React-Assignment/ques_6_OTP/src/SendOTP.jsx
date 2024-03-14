export function SendOTP(){
    return <div className="text-white flex flex-col justify-center items-center ">
        <h1 className="text-5xl m-10">Enter OTP</h1>
        <input type="text" placeholder="Enter yout Mobile Number" className="border border-white bg-black w-96 text-center rounded-md px-2 py-3 text-2xl"></input>
        <button className="w-48 border border-white m-10 rounded-md px-2 py-3 text-xl hover:bg-slate-600">Send OTP</button>
    </div>
}