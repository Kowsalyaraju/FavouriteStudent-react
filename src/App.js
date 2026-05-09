import {BrowserRouter, Route, Routes} from "react-router-dom"
import Student from "./Student"
import Favourite from "./Favourite"
import StudentProvider from "./StudentContext"



function App()
{
  return(

    <BrowserRouter>

    <StudentProvider>
      <Routes>

      <Route path='/' element={<Student/>}></Route>
      <Route path="/favourite"  element={<Favourite/>}></Route>

    </Routes>
    </StudentProvider>

    </BrowserRouter>
  )
}

export default App