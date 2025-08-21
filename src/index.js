import React from 'react';
import ReactDOM from 'react-dom/client';


import Header from './js/Header';
import Carrusel from './js/Carrusel';
import Productos from './js/Productos';
import Catalogo from './js/Catalogo';
import Footer from './js/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Carrusel />
    <Productos />
    
    <Footer />
    
  </React.StrictMode>
);
