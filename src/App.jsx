import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Shop from "./pages/Shop"
import Home from "./pages/Home"
import Header from "./components/Header"


function App() {
  return (
    <BrowserRouter>
    <div className="min-h-screen">
      {/* Navbar */}
    <Navbar/>

    {/* header */}
   <Header/>
  {/* main */}
  <main className="bg-gray-200 min-h-screen">
  <Routes >
    <Route path="/" element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
  </Routes>
  </main>
 
 {/* footer */}
 <footer className="bg-slate-900 h-40">
  footer
 </footer>
  </div>
  </BrowserRouter>
  )
}

export default App