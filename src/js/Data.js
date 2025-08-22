import { Link } from "react-router-dom";

// productos en general xd
export const productos = [

    // productos destacados osea de la pag principal y catalogo
  {
    id: 1,
    nombre: "Eros Flame",
    precio: 399.99,
    imagen: "/img/eros.png",
    destacado: true,
    Link: <Link to="/">Mas Informacion</Link>,
  },
    {
    id: 2,
    nombre: "212 VIP",
    precio: 399.99,
    imagen: "/img/212vip.png",
    destacado: true,
    Link: <Link to="/">Mas Informacion</Link>,
  },
    {
    id: 3,
    nombre: "valentino",
    precio: 399.99,
    imagen: "/img/valentino.png",
    destacado: true,
    Link: <Link to="/">Mas Informacion</Link>,
  },
    {
    id: 4,
    nombre: "le male parfum",
    precio: 399.99,
    imagen: "/img/lemaleparfum.png",
    destacado: true,
    Link: <Link to="/">Mas Informacion</Link>,
  },

  // productos de la pag catalogo osea lo rstante xd
    {
    id: 5,
    nombre: "Eros Flame",
    precio: 399.99,
    imagen: "/img/eros.png",
    destacado: true,
    Link: <Link to="/">Mas Informacion</Link>,
  },
    {
    id: 6,
    nombre: "Eros Flame",
    precio: 399.99,
    imagen: "/img/eros.png",
    destacado: true,
    Link: <Link to="/">Mas Informacion</Link>,
  },
    {
    id: 7,
    nombre: "Eros Flame",
    precio: 399.99,
    imagen: "/img/eros.png",
    destacado: true,
    Link: <Link to="/">Mas Informacion</Link>,
  },
    {
    id: 8,
    nombre: "Eros Flame",
    precio: 399.99,
    imagen: "/img/eros.png",
    destacado: true,
    Link: <Link to="/">Mas Informacion</Link>,
  },

  // productos de la pag ofertas

  {
    id: 9,
    nombre: "Eros Flame",
    precio: 399.99,
    imagen: "/img/eros.png",
    destacado: true,
    Link: <Link to="/">Mas Informacion</Link>,
  },
  {
    id: 10,
    nombre: "Eros Flame",
    precio: 399.99,
    imagen: "/img/eros.png",
    destacado: true,
    Link: <Link to="/">Mas Informacion</Link>,
  },
  {
    id: 11,
    nombre: "Eros Flame",
    precio: 399.99,
    imagen: "/img/eros.png",
    destacado: true,
    Link: <Link to="/">Mas Informacion</Link>,
  },
  {
    id: 12,
    nombre: "Eros Flame",
    precio: 399.99,
    imagen: "/img/eros.png",
    destacado: true,
    Link: <Link to="/">Mas Informacion</Link>,
  },
  {
    id: 13,
    nombre: "Eros Flame",
    precio: 399.99,
    imagen: "/img/eros.png",
    destacado: true,
    Link: <Link to="/">Mas Informacion</Link>,
  },
  {
    id: 14,
    nombre: "Eros Flame",
    precio: 399.99,
    imagen: "/img/eros.png",
    destacado: true,
    Link: <Link to="/">Mas Informacion</Link>,
  },
  {
    id: 15,
    nombre: "Eros Flame",
    precio: 399.99,
    imagen: "/img/eros.png",
    destacado: true,
    Link: <Link to="/">Mas Informacion</Link>,
  },
  {
    id: 16,
    nombre: "Eros Flame",
    precio: 399.99,
    imagen: "/img/eros.png",
    destacado: true,
    Link: <Link to="/">Mas Informacion</Link>,
  },

];


// exporta los productos destacados
export const getDestacados = () => productos.filter(p => p.id >= 1 && p.id <= 4);

// exporta los productos del catalogo
export const getCatalogo = () => productos.filter(p => p.id >= 1 && p.id <= 8);

// exporta los productos de ofertas
export const getOfertas = () => productos.filter(p => p.id >= 9 && p.id <= 16);