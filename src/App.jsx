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

  
  {/* main */}
  <main className="bg-gray-200 min-h-screen">
  <Routes >
    <Route path="/" element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
  </Routes>
  </main>
 
 {/* footer */}
 <footer className="bg-slate-900 h-80">
  footer
 </footer>
  </div>
  </BrowserRouter>
  )
}

export default App