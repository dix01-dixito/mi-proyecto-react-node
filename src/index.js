import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './js/Login';
import Header from './js/Header';
import Carrusel from './js/Carrusel';
import Productos from './js/Productos';
import Footer from './js/Footer';
import Catalogo from './js/Catalogo';
import Ofertas from './js/Ofertas';
import Contacto from './js/Contacto';
import Carrito from './js/Carrito';

const Layout = () => {
    // Fuerza la comprobación del estado de autenticación al cargar el componente
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('currentUser'));

    useEffect(() => {
        const handleStorageChange = () => {
            setIsLoggedIn(!!localStorage.getItem('currentUser'));
        };

        // Sirve para actualizar el estado cuando se inicia sesión en otra pestaña
        window.addEventListener('login', handleStorageChange);
        //Sirve para actualizar el estado cuando se cierra sesión en otra pestaña
        window.addEventListener('logout', handleStorageChange);

        return () => {
            window.removeEventListener('login', handleStorageChange);
            window.removeEventListener('logout', handleStorageChange);
        };
    }, []);

    if (!isLoggedIn && window.location.pathname !== '/login') {
        return <Navigate to="/login" />;
    }
  return (
    <>
      {isLoggedIn && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={isLoggedIn ? <Carrito /> : <Navigate to="/login" />} />
        <Route path="/catalogo" element={isLoggedIn ? <Catalogo /> : <Navigate to="/login" />} />
        <Route path="/ofertas" element={isLoggedIn ? <Ofertas /> : <Navigate to="/login" />} />
        <Route path="/contacto" element={isLoggedIn ? <Contacto /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {isLoggedIn && <Footer />}
    </>
  );
};

const Home = () => {
  const isLoggedIn = localStorage.getItem('currentUser');
  
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Carrusel />
      <Productos />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </React.StrictMode>
);