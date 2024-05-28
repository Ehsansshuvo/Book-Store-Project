import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NewBook from "./pages/NewBook"
import UpdateBook from "./pages/UpdateBook"
import DeleteBook from "./pages/DeleteBook"
import ShowBook from "./pages/ShowBook"


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/books/create" element={<NewBook/>} />
      <Route path="books/update/:id" element={<UpdateBook/>} />
      <Route path="books/delete/:id" element={<DeleteBook/>} />
      <Route path="books/details/:id" element={<ShowBook/>} />
      <Route path="" element="" />
      <Route path="" element="" />
    </Routes>
  )
}

export default App
