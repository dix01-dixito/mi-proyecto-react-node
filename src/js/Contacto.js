import React from "react";
import { FaWhatsapp, FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import '../css/Contacto.css';

const PHONE_LOCAL = "941247056";
const PHONE_INTL = "51941247056";
const EMAIL = "dixmarket720@gmail.com";
const WHATSAPP_MSG = "Hola, quisiera más información sobre sus perfumes.";

export default function ContactSection() {
  const whatsappHref = `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
  const mailHref = `mailto:${EMAIL}?subject=${encodeURIComponent("Consulta de perfumes")}`;
  const telHref = `tel:+${PHONE_INTL}`;

  return (
    <section className="contact-section">
      <h2 className="contact-title">Contáctanos</h2>
      <p className="contact-desc">
        Somos <strong>EssencePerfume</strong>, una tienda dedicada a ofrecer
        los mejores perfumes originales. Queremos que encuentres tu fragancia
        perfecta y vivas una experiencia de lujo.
      </p>

      <div className="contact-cards">
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="card whatsapp">
          <FaWhatsapp className="card-icon" />
          <span>WhatsApp</span>
        </a>

        <a href={mailHref} className="card email">
          <FaEnvelope className="card-icon" />
          <span>Correo</span>
        </a>

        <a href={telHref} className="card phone">
          <FaPhone className="card-icon" />
          <span>Teléfono</span>
        </a>
      </div>

      <div className="contact-socials">
        <p>Síguenos en nuestras redes:</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
        </div>
      </div>
    </section>
  );
}
