import { Link, NavLink } from "react-router-dom"

function Navbar() {
  return (
    <NavLink className='bg-red-600 h-40' >
      
     <Link to='/'>My Store</Link>
     <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/shop'}>Shop</Link>
     </div>
    </NavLink>
  )
}

export default Navbar