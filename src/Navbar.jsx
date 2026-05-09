
import { Link } from "react-router-dom"

function Navbar()
{
    return(

    <div className=" flex justify-between bg-white text-black p-5 shadow-md z-50 top-0 sticky ">

        <div >
            <h1 className="text-xl md:text-3xl font-bold">Favourite</h1>
        </div>

        <div className=" hidden  md:flex items-center gap-2 border border-black p-2 h-12 border rounded-2xl" style={{width:"50%"}}>
    
            <i className="fa-solid fa-magnifying-glass"></i>
             <input type="text" placeholder="Search here anything" className="outline-none w-full" />

        </div>

        <div className="flex gap-10 cursor-pointer ">

            <Link to={"/"}>
            <p className="hover:underline font-bold text-base md:text-xl">Student</p>
            </Link>

            <Link to={"/favourite"}>
             <p className="hover:underline font-bold text-base md:text-xl">Favourite</p>
            </Link>
        </div>

    </div>

  )
}

export default Navbar