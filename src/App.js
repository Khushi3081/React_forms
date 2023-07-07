import { Routes, Route, Form } from "react-router-dom"
import List from "./pages/List"
import FormData from "./components/Form"
function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<FormData />}></Route>
                <Route path='/list' element={<List />}></Route>
            </Routes>
        </>
    )
}

export default App
