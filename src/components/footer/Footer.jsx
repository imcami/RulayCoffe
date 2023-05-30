import React from "react";
import Facebooklogo from "../../assets/svg/Facebooklogo";
import Instagramlogo from '../../assets/svg/Instagramlogo';
import Whatsapplogo from '../../assets/svg/Whatsapplogo';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <section className="footer__logo">
                <h1>Rulay Coffe</h1>
            </section>
            <section className="footer__social">
                <a href="https://www.facebook.com/Rulay-Coffee-101501868925201" target="_blank" rel="noreferrer">
                    <Facebooklogo/>
                </a>
                <a href="https://www.instagram.com/rulaycoffee/" target="_blank" rel="noreferrer">
                    <Instagramlogo/>
                </a>
                <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
                   <Whatsapplogo/>
                </a>
            </section>
            <section>
                <h3>Enlaces utiles</h3>
                <ul>
                    <li><Link exact path="/pp">Politica de Privacidad</Link></li>
                    <li><Link exact path="/ttcc">Terminos y Condiciones</Link></li>
                    <li><Link exact path="/ubicacion">Nuestra ubicacion</Link></li>
                    <li><Link exact path="/novedades">Ultimas novedades</Link></li>
                    <li><Link exact path="/blog">Nuestro Blog</Link></li>
                </ul>

            </section>
            <div className="footer_suscribe">
                <form action="sucribite">
                <h3>Suscribite a nuestro newsletter</h3>
                <input type="text" name="email" placeholder="Ingresa tu Email aqui" id="subscribe-field"/>
                <p>
			   <input type="submit" value="Sucribirme"/>
		       </p>
                </form>
            </div>
                    
        <p>Rulay 2023 - All rights reserved</p>
        </div>
    );
    }

export default Footer;