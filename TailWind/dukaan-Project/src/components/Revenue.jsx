export function Revenue() {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full p-5 ">
        <div className=" text-white ">
            <div className="bg-sky-700 rounded-md hover:bg-indigo-950 ">
                <div className="flex px-5 py-3">
                    <div className="">Next Payout </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
                <div className="flex justify-between text-2xl leading-9 px-5 pb-5 font-semibold">
                    <div className="">₹2,312.23</div>
                    <div className="flex flex-col justify-center">
                        <div className="flex">
                            <div className="text-sm underline">23 Orders</div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                        </div>
                    </div>
                </div>
                <div className="flex justify-between bg-indigo-950 leading-10 px-5 py-0 rounded-bl-md rounded-br-md ">
                    <div>Next Payment Date:</div>
                    <div>Today, 4:00PM</div>
                </div>
            </div>
        </div>
        <div className=" text-black ">
            <div className="  ">
                <div className="flex px-5 py-3">
                    <div className="">Amount Pending </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
                <div className="flex justify-between text-2xl leading-9 px-5 pb-5 font-semibold">
                    <div className="">₹92,312.20</div>
                    <div className="flex flex-col justify-center">
                        <div className="flex text-blue-700">
                            <div className="text-sm underline ">13 Orders</div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className=" text-black ">
            <div className="  ">
                <div className="flex px-5 py-3">
                    <div className="">Amount Processed </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
                <div className="flex justify-between text-2xl leading-9 px-5 pb-5 font-semibold">
                    <div className="">₹23,92,312.19</div>
                    <div className="flex flex-col justify-center">
                        <div className="flex text-blue-700">
                            <div className="text-sm underline ">13 Orders</div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
}