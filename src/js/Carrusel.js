import { useState, useEffect } from "react";
import '../css/Carrusel.css';

const imagenes = [
    "/img/banner.png",
    "/img/banner2.png",
    "/img/banner3.png",
];

function Carrusel() {
    const [c, setC] = useState(0);

useEffect(() => { const interval = setInterval(()=> {
    setC(Math.floor(Math.random() * imagenes.length));
},1500);
return () => clearInterval(interval);},[]);

return (
    <div>
        <img
        className="carrusel-container"
        alt="imagenes-carrusel"
        src={imagenes[c]}/>
    </div>
 );
}
export default Carrusel;