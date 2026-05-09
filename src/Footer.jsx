
import { Link } from "react-router-dom"

function Footer(){
    return(
        <footer className="bg-white text-black mt-10 p-6">

    <div className="flex flex-col items-center gap-3">

        <h2 className="text-xl md:text-2xl font-bold">
            Favourite Student App
        </h2>

        <p className="text-sm text-black md:text-base">
            Manage and save your favourite students easily using React Context API.
        </p>

        <div className="flex gap-5 mt-2 text-sm md:text-base">

           <Link to={"/"}>

            <p className="hover:text-gray-400 cursor-pointer">
                Student
            </p>

           </Link>
            
            <Link to={"/favourite"}>

            <p className="hover:text-gray-400 cursor-pointer">
                Favourite
            </p>

            </Link>

        </div>

        <p className="text-xs text-black mt-3 md:text-base">
            © 2026 Favourite Student Project | Built with React & Tailwind CSS
        </p>

    </div>

</footer>

           

            
  
    )
}

export default Footer




