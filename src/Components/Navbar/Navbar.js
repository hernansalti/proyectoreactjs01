import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget.js'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <Link className="Titulo" to='/'>
                Tienda Nonno
            </Link>
            <div className="Categories">
                <Link to='/category/Mates' className="Option">Mates</Link>
                <Link to='/category/Deco' className="Option">Deco</Link>
                <Link to='/category/Bazar' className="Option">Bazar</Link>
            </div>
            <CartWidget />
        </nav>
        
    )
}

export default Navbar