import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './js/Login';
import Header from './js/Header';
import Carrusel from './js/Carrusel';
import Productos from './js/Productos';
import Footer from './js/Footer';
import Carrito from './js/Carrito';

const Home = () => {
  const isLoggedIn = localStorage.getItem('currentUser');
  
  if (!isLoggedIn) {
    return <Navigate to="/login" />; 
  } //Redirige al login si no hay usuario logueado

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
    <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
