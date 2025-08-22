import react from 'react';
import { FaShoppingCart} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../css/Header.css';

    function Header() {
        return (
            <header className="header">
        
        <div>
            <img src='/img/logo.png' className='logo-imagen' />
             <span className='logo-titulo'>EssencePerfume</span>
             </div>
              <nav className='botones'>
                <a href='#'>Inicio</a>
                <a href='#'>Categorías</a>
                <a href='#'>Ofertas</a>
                <a href='#'>Contacto</a>
             </nav>

            

            <div className='carrito'>
                <Link to="carrito">
                <FaShoppingCart size={24} />
                <span className='carrito-conteo'>$</span>
                </Link>
            </div>
            </header>
        );
    }
    export default Header;