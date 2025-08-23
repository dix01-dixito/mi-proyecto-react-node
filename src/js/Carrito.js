import React, { Component } from 'react';
import '../css/Carrito.css';

// Función para agregar productos al carrito (reutilizar codigo)
export const agregarAlCarrito = (producto) => {
    const userId = localStorage.getItem('currentUser') || 'anonimo';
    const data = localStorage.getItem(`carrito_${userId}`);
    const carritoActual = data ? JSON.parse(data) : [];
    
    const productoConCantidad = {
        ...producto,
        cantidad: 1,
        subtotal: producto.precio
    };
    
    const nuevoCarrito = [...carritoActual, productoConCantidad];
    localStorage.setItem(`carrito_${userId}`, JSON.stringify(nuevoCarrito));
};

class Carrito extends Component {
    constructor(props) {
        super(props);
        this.userId = localStorage.getItem('currentUser') || 'anonimo';
        const data = localStorage.getItem(`carrito_${this.userId}`);
        this.state = {
            carrito: data ? JSON.parse(data) : [],
            showModalSuccess: false,
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.carrito !== this.state.carrito) {
            localStorage.setItem(
                `carrito_${this.userId}`,
                JSON.stringify(this.state.carrito)
            );
        }
    }

    actualizarCantidad = (indice, nuevaCantidad) => {
        if (nuevaCantidad < 1) return; // Evitar cantidades negativas
        
        this.setState(prevState => ({
            carrito: prevState.carrito.map((item, idx) => 
                idx === indice 
                    ? { ...item, cantidad: nuevaCantidad, subtotal: item.precio * nuevaCantidad }
                    : item
            )
        }));
    };

    eliminarDelCarrito = (indice) => {
        this.setState((prevState) => ({
            carrito: prevState.carrito.filter((_, i) => i !== indice),
        }));
    };

    calcularTotal = () => {
        return this.state.carrito.reduce((total, item) => total + (item.precio * (item.cantidad || 1)), 0);
    };

    mostrarModalSuccess = () => {
        console.log('Click en pagar'); // Para debugging
        this.setState({ 
            showModalSuccess: true 
        }, () => {
            console.log('Modal mostrada:', this.state.showModalSuccess); // Para debugging
        });
    };

    cerrarModal = () => {
        this.setState({
            showModalSuccess: false,
            carrito: []
        });
    }

    render() {
        return (
            <>
                <div className="carrito-container">
                    <h2>Carrito de compras</h2>
                    {this.state.carrito.length === 0 ? (
                        <p>Tu carrito está vacío</p>
                    ) : (
                        <>
                            <div className="productos-lista">
                                {this.state.carrito.map((item, idx) => (
                                    <div key={idx} className="producto-item">
                                        <img 
                                            src={item.imagen} 
                                            alt={item.nombre} 
                                            className="producto-imagen"
                                        />
                                        <div className="producto-info">
                                            <h3>{item.nombre}</h3>
                                            <p>Precio: S/ {item.precio.toFixed(2)}</p>
                                            <div className="cantidad-control">
                                                <button 
                                                    onClick={() => this.actualizarCantidad(idx, (item.cantidad || 1) - 1)}
                                                    className="cantidad-btn"
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={item.cantidad || 1}
                                                    onChange={(e) => this.actualizarCantidad(idx, parseInt(e.target.value) || 1)}
                                                    className="cantidad-input"
                                                />
                                                <button 
                                                    onClick={() => this.actualizarCantidad(idx, (item.cantidad || 1) + 1)}
                                                    className="cantidad-btn"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <p>Subtotal: S/ {((item.cantidad || 1) * item.precio).toFixed(2)}</p>
                                            <button 
                                                onClick={() => this.eliminarDelCarrito(idx)}
                                                className="eliminar-btn"
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="carrito-total">
                                <h3>Total: S/ {this.calcularTotal().toFixed(2)}</h3>
                                <button 
                                    className="pagar-btn"
                                    onClick={this.mostrarModalSuccess}
                                >
                                    Proceder al pago
                                </button>
                            </div>
                        </>
                    )}
                </div>

                {/* Modal fuera del contenedor principal */}
                {this.state.showModalSuccess && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <button className="close-button" onClick={this.cerrarModal}/>
                            <div className="success-checkmark">
                                <div className="check-icon">
                                    <span className="icon-line line-tip"></span>
                                    <span className="icon-line line-long"></span>
                                    <div className="icon-circle"></div>
                                    <div className="icon-fix"></div>
                                </div>
                            </div>
                            <h3>¡Compra exitosa!</h3>
                        </div>
                    </div>
                )}
            </>
        );
    }
}

export default Carrito;