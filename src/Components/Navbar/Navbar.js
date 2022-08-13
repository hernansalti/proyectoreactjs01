// import './Navbar.css'
// import CartWidget from '../CartWidget/CartWidget.js'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//     return (
//         <nav className='Navbar'>
//             <Link className="Titulo" to='/'>
//                 Tienda Nonno
//             </Link>
//             <div className="Categories">
//                 <Link to='/category/Mates' className="Option">Mates</Link>
//                 <Link to='/category/Deco' className="Option">Deco</Link>
//                 <Link to='/category/Bazar' className="Option">Bazar</Link>
//             </div>
//             <CartWidget />
//         </nav>
        
//     )
// }

// export default Navbar

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