import React from 'react';
import Banner from '../../components/banner/Banner';
import Header from '../../components/header/Header';
import contact_image from '../../assets/stock/contact_image.png';
import './Contact.css';
import { NavLink } from 'react-router-dom';
import ContactContent from '../../components/contact-content/ContactContent';

function Contact() {
  document.title = "Enheritage | Contact";

    return (
        <div className="contact">
            <Header/>
            <Banner  bannerImage={contact_image}
                title="Contact"
                config={false}/>
            <div className="contact__fixer">
                <ContactContent/>
            </div>
            <div className="map">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46232.22205207545!2d21.00914780926494!3d52.23933884408337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sVarshava%2C%20Polsha!5e0!3m2!1suz!2s!4v1633366812196!5m2!1suz!2s" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div className="footer__bottom">
        <p>
          Copyright © 2021 New Heritage Poland — Wszelkie prawa zastrzeżone.
        </p>
        <ul className="footer__bottomCollection">
          <li className="footer__bottomItem">
            {" "}
            <NavLink to="/">PRIVACY POLICY</NavLink>
          </li>
          <li className="footer__bottomItem">
            {" "}
            <NavLink to="/">STATUTE</NavLink>{" "}
          </li>
        </ul>
      </div>
        </div>
    )
}

export default Contact
