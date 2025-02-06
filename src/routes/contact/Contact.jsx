import React from "react";
import "./ContactStyles.css";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";

import contactImg from "../../assets/imgs/2.jpg";

const Contact = () => {
  return (
    <div>
      <Hero cName="hero mid" heroImg={contactImg} title="Contato" />

      <div className="contact">
        <div className="contact-info">
          <h2>Fale Conosco</h2>
          <p>Estamos sempre disponíveis em nossos meios de comunicação!</p>
          <div>
            <h3>
              <i className="fa-solid fa-phone"></i> Telefone:
            </h3>
            <a href="tel:83986264672">83 98626-4672</a>
          </div>
          <div>
            <h3>
              <i className="fa-solid fa-envelope"></i> E-mail:
            </h3>
            <a href="mailto:agenciaumaideia@gmail.com">
              agenciaumaideia@gmail.com
            </a>
          </div>
          <div>
            <h3>
              <i className="fa-solid fa-location-dot"></i> Endereço:
            </h3>
            <p>Rua Professor Luiz de Queiroz, 46, Centro, Pirpirituba, PB</p>
            <p>58213-000</p>
          </div>
          <div className="social-networks">
            <h3>Redes sociais:</h3>
            <a
              href="https://www.instagram.com/umaideia_/"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-square-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/umaideiaagencia/"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="/" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5583986264672&text=Ol%C3%A1,%20Ag%C3%AAncia%20Uma%20Ideia"
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-square-whatsapp"></i>
            </a>
          </div>
        </div>
        <div className="contact-map">
          <h2>Como chegar até nós</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64440159.17531167!2d-99.76709813773608!3d-9.671198649557327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7adb789f9af8823%3A0x1409dab171d05aee!2sUma%20Ideia%20-%20Ag%C3%AAncia%20de%20Comunica%C3%A7%C3%A3o%20Visual!5e0!3m2!1spt-BR!2sbr!4v1738842837100!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
