import React from "react";
import '../css/Catalogo.css';

const Catalogo = [
    {
        id: 1,
        nombre: "Eros Flame",
        precio: 399.99,
        imagen: "/img/eros.png",
        href: "#",
    },
     {
        id: 2,
        nombre: "212 VIP",
        precio: 399.99,
        imagen: "/img/212vip.png",
        href: "#",
    },
     {
        id: 3,
        nombre: "Valentino",
        precio: 399.99,
        imagen: "/img/valentino.png",
        href: "#",
    },
     {
        id: 4,
        nombre: "Le male Parfum",
        precio: 399.99,
        imagen: "/img/lemaleparfum.png",
        href: "#",
    },
];

export default function Catalogo(){
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
                        <button className="tarjeta-boton1" onClick={() => window.location.href = producto.href}>Mas Informacion</button>
                        <button className="tarjeta-boton2" onClick={() => agregarAlcarrito(producto)}>Agregar al carrito</button>
                    </div>
                </div>
            </article>    
            ))}

        </div>
    </section>
 );
}
