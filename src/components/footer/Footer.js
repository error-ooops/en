import React from "react";
import "./Footer.css";
import visa from '../../assets/icons/visa.svg';
import americanExpress from '../../assets/icons/american express.svg';
import discover from '../../assets/icons/discover.svg';
import paypal from '../../assets/icons/paypal.svg';
import mastercard from '../../assets/icons/mastercard.svg';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="seprator__line"></div>
        <div className="footer__containerSides">
          <div className="footer__left">
            <h1 className="footer__title">Help Our Cause</h1>
            <p>
              Your support and contributions will enable us to meet our goals
              and improve conditions. Your generous donation will fund our
              mission.
            </p>
          </div>
          <div className="footer__right">
              <button className="filled__button large">donate now</button>
              <ul className="footer__paymentOptions">
                  <li className="footer__option">
                      <img src={paypal} alt="" />
                  </li>
                  <li className="footer__option">
                      <img src={mastercard} alt="" />
                  </li>
                  <li className="footer__option">
                      <img src={visa} alt="" />
                  </li>
                  <li className="footer__option">
                      <img src={discover} alt="" />
                  </li>
                  <li className="footer__option">
                      <img src={americanExpress} alt="" />
                  </li>
              </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
          <p>Copyright © 2021 New Heritage Poland — Wszelkie prawa zastrzeżone.</p>
          <ul className="footer__bottomCollection">
              <li className="footer__bottomItem"> <NavLink to="/privacypolicy">PRIVACY POLICY</NavLink></li>
              <li className="footer__bottomItem"> <NavLink to="/statue">STATUTE</NavLink> </li>
          </ul>
      </div>
    </div>
  );
}

export default Footer;
