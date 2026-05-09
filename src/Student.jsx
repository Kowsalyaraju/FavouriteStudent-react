import { StudentContext } from "./StudentContext";
import { useContext } from "react";

import { Link } from "react-router-dom";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function Student() {
  const { student, favourite, setfavourite } =
    useContext(StudentContext);

  function addfavourite(removeid) {
    var newarr = student.filter(function (item) {
      if (item.id === removeid) {
        return true;
      } else {
        return false;
      }
    });

    const alreadyExists = favourite.some(function (item) {
      return item.id === removeid;
    });

    if (alreadyExists === false) {
      setfavourite([...favourite, newarr[0]]);
    }
  }

  return (
    <div
      className="bg-black text-white text-center "
      style={{ height: "590px" }}
    >
      <Navbar />

      <h1 className="text-xl md:text-3xl mt-10">Student List</h1>

      <div className="bg-white text-black w-96 h-90 p-5 rounded-lg shadow-md mx-auto mt-5 ">

        {student.map((item) => {
          return (

            <div>

              <div className="flex items-center justify-between w-full px-5 my-5">

                <h2 className="text-base md:text-xl font-bold">{item.name}</h2>

                <Link to="/favourite">

                  <button
                    className="bg-black text-white px-3 py-1 rounded text-sm md:text-base"
                    onClick={() => addfavourite(item.id)}
                  >
                    Add to Favourite
                  </button>

                </Link>

              </div>
               
            </div>
          );
        })}
      </div>

      <Footer/>
    </div>
  );
}

export default Student;
