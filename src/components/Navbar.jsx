import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className='bg-slate-900 max-h-50 
     text-white flex justify-around items-center p-7'>
      
     <Link to='/'>My Store</Link>
     <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/shop'}>Shop</Link>
        <Link to={'/shop'}>Favorites</Link>

     </div>
     <div>
      <Link>Cart</Link>
      <Link></Link>
     </div>


    </nav>
  )
}

export default Navbar