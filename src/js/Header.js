import { Link } from 'react-router-dom';
import { FaShoppingCart} from 'react-icons/fa';
import '../css/Header.css';

    function Header() {
        return (
            <header className="header">
        
        <div>
            <img src='/img/logo.png' className='logo-imagen' />
             <span className='logo-titulo'>EssencePerfume</span>
             </div>
              <nav className='botones'>
                <Link to="/">Inicio</Link>
                <Link to="/Catalogo">Catalogo</Link>
                <Link to="/Ofertas">Ofertas</Link>
                <Link to="/Contacto">Contacto</Link>
             </nav>

            

            <div className='carrito'>
                <FaShoppingCart size={24} />
                <span className='carrito-conteo'>$</span>
            </div>
            </header>
        );
    }
    export default Header;