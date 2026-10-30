import { FaArrowRight } from 'react-icons/fa'
import fashionEcommerce  from '../assets/fashion-Ecommerce.jpg'

function Header() {
  return (
    <section className="bg-blue-200 h-full p-5 grid grid-cols-1 
    md:grid-cols-2 items-center  justify-items-center gap-8 md:gap-0  ">
    <div className='ml-3 md:ml-0'>
        <p>NEW COLLENTION</p>
      <h1 className='text-3xl md:text-6xl w-60 md:w-130'>Style Meets Everyday Comfort</h1>
      <p className='py-2 md:py-4'>Discover high-quality prosucts, designed for your ev
        eryday life.</p>
        <button className='bg-black rounded-2xl py-3 px-8
        text-white cursor-pointer'>Shop Now <FaArrowRight className='inline pl-2 size-6'/></button>
    </div>
    <div>
        <img className=' w-90 md:w-130  rounded-3xl' src={fashionEcommerce} alt="" />
    </div>
    </section>
  )
}

export default Header