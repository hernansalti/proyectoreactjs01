import './Navbar.css'
import Cartwidget from '../Cartwidget/Cartwidget'

const Navbar = () => {
    return (
        <nav >
            <Cartwidget />
            <div className='Navbar'>
                <button class='botones'>Mates</button>
                <button class='botones'>Deco</button>
                <button class='botones'>Bazar</button>
            </div>
            
        </nav>
        
    )

}

export default Navbar