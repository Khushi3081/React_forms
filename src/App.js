import { Route, Routes } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import ViewData from "./components/ViewData"
import "bootstrap/dist/css/bootstrap.min.css"
import EditData from "./components/EditData"
// import "bootstrap/dist/js/bootstrap.bundle.min"
function App() {
    return (
        <div classNameName='App'>
            <Routes>
                <Route path='/' element={<Navbar />}></Route>
                <Route path='/view/:index' element={<ViewData />}></Route>
                <Route path='/edit/:index' element={<EditData />}></Route>
            </Routes>
        </div>
    )
}

export default App
