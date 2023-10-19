import { useNavigate } from "react-router-dom";

function Notfound() {
    const navigate = useNavigate()
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-[#1A2238]">
            <h1 className="text-9xl font-extralight text-white">404</h1>
            <div className="bg-black text-white absolute px-2 rounded rotate-12">
                Page Not Found...
            </div>
            <button className="mt-5">
            <a onClick={()=>navigate(-1)} className="relative inline-block text-sm font-medium text-[#FF6A3D] bg-yellow-500 focus:outline-none">
            <span  className="relative block px-8 py-3 bg-[#1A2238] border border-current"> Go Back</span>
            </a>
           </button>
        </div>
    )
}
export default Notfound;