import { StudentContext } from "./StudentContext"
import { useContext } from "react"

import { Link } from "react-router-dom"

import Navbar from "./Navbar"
import Footer from "./Footer"


function Favourite()
{
    const { favourite,setfavourite } = useContext(StudentContext)


    function removefavourite(deleteid)
    {
        var fresharr = favourite.filter(function(item)
    {
        if(item.id===deleteid)
        {
            return false
        }
        else
        {
            return true
        }
    })

    setfavourite(fresharr)

    }


    return(
        <div className="bg-black text-white text-center "
      style={{ height: "640px" }}>
            <Navbar/>

        <h1 className=" text-xl md:text-3xl mt-10">Favourite Students List</h1>

           <div className="bg-white text-black w-96 h-90 p-5 rounded-lg shadow-md mx-auto mt-5">
                 <ul>
                
                {
                     favourite.length === 0 ? (
                    <h3 className="text-red-600 text-lg">
                        No favourite students added yet
                    </h3>
                ) :
                       favourite.map((item) => {
                               
                        return(
                           <div className="flex justify-between w-full px-5 my-5">
                             <h2 className="text-base md:text-xl font-bold">{item.name}
                                </h2>
                                 <button className="bg-black text-white border rounded-md px-3 py-1 text-sm md:text-base"
                                 onClick={()=>{removefavourite(item.id)}}>
                                    Remove Favourite
                                    </button>
                                
                           
                           </div>
                        )
                               })
                }
            </ul>
                 
                 <Link to={"/"}><button className="bg-black text-white px-3 py-1 border rounded-md">Student</button></Link>


           </div>

           <Footer/>

        </div>
    )
}


export default Favourite