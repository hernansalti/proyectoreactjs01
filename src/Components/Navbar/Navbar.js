import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <nav>
        <Link to='/'>
            <h3 className='Titulo'> Tienda Nonno</h3>
            </Link>
            <div className='NavBar'>
                <div className="Categories">
                    <NavLink to='/category/Mates' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mates</NavLink>
                    <NavLink to='/category/Deco' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Deco</NavLink>
                    <NavLink to='/category/Bazar' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Bazar</NavLink>
                </div>
                <CartWidget />
            </div>
      </nav>
  )
}

export default NavBar