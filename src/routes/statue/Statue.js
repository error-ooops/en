import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../components/header/Header';
import BannerSubroute from '../../components/banner-linkedfooter/BannerSubroute';

function Statue() {
    return (
        <div className="statue">
           <Header />
      <BannerSubroute
        primary="Our updated statute of the organization on the 18th of February 2021"
        title="Statute of the New Heritage Foundation"
        content="Plik będzie dostępny wkrótce."
      />  
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

export default Statue
