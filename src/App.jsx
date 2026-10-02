import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Shop from "./pages/Shop"
import Home from "./pages/Home"


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App