import { createContext } from "react";
import { useState } from "react";

export const StudentContext = createContext()
function StudentProvider(data)
{
       const[student,setstudent] = useState(
        [
            {
                id:1,
                name:"Kowsalya"
            },
            {
                id:2,
                name:"Lakshmi"
            },
            {
                id:3,
                name:"Hemachandran"
            },
            {
                id:4,
                name:"Eswaran"
            },
            {
                id:5,
                name:"Swetha"
            },
            {
                id:6,
                name:"Devi"
            }
        ]
       )

       const[favourite,setfavourite] = useState([])

       return(
        <StudentContext.Provider value={{student,setstudent,favourite,setfavourite}}>
                 {data.children}
        </StudentContext.Provider>
       )

}

export default StudentProvider