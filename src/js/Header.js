import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart} from 'react-icons/fa';
import { useState } from 'react';

import '../css/Header.css';

    function Header() {
        const [showDropdown, setShowDropdown] = useState(false);
        const username = localStorage.getItem('currentUser') || '';
        const navigate = useNavigate();

        const handleLogout = () => {
            localStorage.removeItem("currentUser");
            window.dispatchEvent(new Event("logout"));
            navigate('/login');
        };
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
            <div className="user-menu">
                <Link to="/carrito" className="cart-button">🛒</Link>
                <div className="dropdown">
                    <button 
                        className="user-button" 
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        👤 {username}
                    </button>
                    {showDropdown && (
                        <div className="dropdown-content">
                            <span className="user-info">
                                Hola, {username}
                            </span>
                            <button onClick={handleLogout}>
                                Cerrar sesión
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
        );
    }
    export default Header;