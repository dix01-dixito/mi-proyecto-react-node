import '../css/Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
         <div>
            <img src="/img/logo.png" className="logo-imagen" alt="Logo" />
            <p className="logo">EssencePerfume Derechos reservados</p>
         </div>

         <div className="sociales">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/img/facebook.png" alt="Facebook" className="img-sociales"  />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/img/instagram.png" alt="Instagram"  className="img-sociales"/>
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                <img src="/img/tiktok.png" alt="Tiktok" className="img-sociales" />
            </a>
         </div>
        </footer>
    );
}