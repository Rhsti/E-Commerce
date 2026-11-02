import { FaArrowRight } from 'react-icons/fa'
import fashionEcommerce  from '../assets/fashion-Ecommerce.jpg'
import { Link } from "react-router-dom"

function Header() {
  return (
    <section className="bg-blue-200 h-full p-5 grid grid-cols-1 
    md:grid-cols-2 items-center  justify-items-center gap-8 md:gap-0  ">
    <div className='ml-5 md:ml-auto'>
        <p>NEW COLLENTION</p>
      <h1 className='text-3xl md:text-6xl w-60 md:w-fit lg:w-130'>Style Meets Everyday Comfort</h1>
      <p className='py-2 pb-6 md:py-4'>Discover high-quality prosucts, designed for your ev
        eryday life.</p>
        <Link to={'/shop'} className='bg-black rounded-2xl py-2.5 px-8
        text-white cursor-pointer'>Shop Now <FaArrowRight className='inline pl-2 size-6'/></Link>
    </div>
    <div>
        <img className=' w-90 md:w-130  rounded-3xl' src={fashionEcommerce} alt="" />
    </div>
    </section>
  )
}

export default Header