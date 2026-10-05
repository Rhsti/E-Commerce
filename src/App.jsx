import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Shop from "./pages/Shop"
import Home from "./pages/Home"


function App() {
  return (
    <BrowserRouter>
    <div className="min-h-screen">
      {/* Navbar */}
    <Navbar/>

    {/* header */}
    <header className="bg-blue-200 h-40">   
      header   
    </header>
  {/* main */}
  <main className="bg-gray-700 min-h-screen">
  <Routes >
    <Route path="/" element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
  </Routes>
  </main>
 
 {/* footer */}
 <footer className="bg-gray-900 h-40">
  footer
 </footer>
  </div>
  </BrowserRouter>
  )
}

export default App