import { getCatalogo } from "./Data";
import { Link } from "react-router-dom";
import '../css/Productos.css';
import { agregarAlCarrito } from './Carrito';


export default function Catalogo(){
    const productos = getCatalogo();

    const handleAgregarCarrito = (producto) => {
        agregarAlCarrito(producto);
        alert(`Agregaste al carrito: ${producto.nombre}`);
    };

return (
    <section className="contenedor-tarjetas">
        <h2 className="titulos-tarjetas">Catalogo de Perfumes</h2>

        <div className="grid">
            {productos.map((producto) => (
            <article key={producto.id} className="tarjeta">
                <img src={producto.imagen} alt={producto.nombre} className="tarjeta-img" loading="lazy"/>

                <div className="cuerpo-tarjetas">
                    <h3 className="tarjeta-nombres">{producto.nombre}</h3>
                    <p className="tarjeta-p">S/ {producto.precio.toFixed(2)}</p>
                    <div className="tarjeta-botones">
                        <Link className="tarjeta-boton1" to={`/producto/${producto.id}`}>Más informacion</Link>
                        <button className="tarjeta-boton2" onClick={() => handleAgregarCarrito(producto)}>Agregar al carrito</button>
                    </div>
                </div>
            </article>    
            ))}

        </div>
    </section>
);
}
