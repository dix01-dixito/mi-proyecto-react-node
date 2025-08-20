import react from 'react';
import { FaShoppingCart} from 'react-icons/fa';
import './css/Header.css';

    function Header() {
        return (
            <header className="header">
        
        <div>
            <img src='/img/logo.png' className='logo-imagen' />
             <span className='logo'>EssencePerfume</span>
             </div>
              <nav className='botones'>
                <a href='#'>Inicio</a>
                <a href='#'>Categorías</a>
                <a href='#'>Ofertas</a>
                <a href='#'>Contacto</a>
             </nav>

             <div className='barra-busqueda'>
                <input type="text" placeholder="Buscar productos..." />
                <button type="submit">Buscar</button>
             </div>

            <div className='carrito'>
                <FaShoppingCart size={24} />
                <span className='carrito-conteo'>$</span>
            </div>
            </header>
        );
    }
    export default Header;