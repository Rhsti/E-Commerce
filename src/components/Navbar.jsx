import { Link } from "react-router-dom"
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import {  FaX } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";




function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={`bg-slate-900   py-4 
     text-white flex flex-col md:flex-row justify-evenly items-center
      p-2 md:pb-6 ${isOpen ? 'h-100' : 'h-20'}
      `}>
      
     <Link className=" absolute top-8 left-10 md:top-6 md:left-14"  to='/'><strong>My</strong>Store</Link>
     <div className="hidden md:flex gap-4 flex-col md:flex-row items-center md:gap-8">
        <Link to={'/'}>Home</Link>
        <Link to={'/shop'}>Shop</Link>
        <Link to={'/shop'}>Product Details</Link>
     </div>
     <div className=" hidden md:flex  items-center gap-8">
      <Link><IoCartOutline size={25} /></Link>
      <Link to={'/shop'}><MdFavoriteBorder size={25} /></Link>

      <Link><FaRegUser size={20}/></Link>
     </div>

      <button className="absolute top-8 right-10 md:hidden" onClick={() => setIsOpen(!isOpen)}>
         {isOpen ? <FaX/> : <IoIosMenu size={25}/>}
      </button>
     
      {isOpen && (
     <>
     <div className="  md:hidden flex gap-4 flex-col md:flex-row items-center md:gap-8">
        <Link to={'/'}>Home</Link>
        <Link to={'/shop'}>Shop</Link>
        <Link to={'/shop'}>Product Details</Link>
     </div>
     <div className="md:hidden  flex  items-center gap-8">
      <Link><IoCartOutline size={25} /></Link>
      <Link to={'/shop'}><MdFavoriteBorder size={25} /></Link>

      <Link><FaRegUser size={20}/></Link>
     </div>
     </>
    )}
    </nav>
  )
}

export default Navbar