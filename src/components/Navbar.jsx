import { Link, NavLink } from "react-router-dom"

function Navbar() {
  return (
    <NavLink>
     <Link to='/'>My Store</Link>
     <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/shop'}>Shop</Link>
     </div>
    </NavLink>
  )
}

export default Navbar