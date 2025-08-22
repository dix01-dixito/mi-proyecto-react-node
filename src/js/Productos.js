import React from "react";
import '../css/Productos.css';
import { getDestacados } from "./Data";
import { Link } from "react-router-dom";


export default function Productos(){
    const productos = getDestacados();
    const agregarAlcarrito = (producto) => {
        alert(`Agregaste al carrito: ${producto.nombre}`);
    };

return (

    <section className="contenedor-tarjetas">
        <h2 className="titulos-tarjetas">Perfumes Destacados</h2>

        <div className="grid">
            {productos.map((producto) => (
            <article key={producto.id} className="tarjeta">
                <img src={producto.imagen} alt={producto.nombre} className="tarjeta-img" loading="lazy"/>

                <div className="cuerpo-tarjetas">
                    <h3 className="tarjeta-nombres">{producto.nombre}</h3>
                    <p className="tarjeta-p">S/ {producto.precio.toFixed(2)}</p>
                    <div className="tarjeta-botones">
                         <Link className="tarjeta-boton1" to={`/producto/${producto.id}`}>Mas información</Link>
                        <button className="tarjeta-boton2" onClick={() => agregarAlcarrito(producto)}>Agregar al carrito</button>
                    </div>
                </div>
            </article>    
            ))}

        </div>
    </section>
 );
}
