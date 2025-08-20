import React from 'react';
import ReactDOM from 'react-dom/client';


import Header from './Header';
import Carrusel from './Carrusel';
import Productos from './Productos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Carrusel />
    <Productos />
    
  </React.StrictMode>
);
