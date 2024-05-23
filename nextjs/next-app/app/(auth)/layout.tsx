

export default function signinLayout({children}:{
    children:React.ReactNode
}) {
    return <div>
        <div className="border-b text-center bg-slate-400 py-1 font-bold">
            20% off for next 3 days.
        </div>
        {children}
    </div>
}