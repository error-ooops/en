import React from "react";
import "./Almanac.css";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import al_banner from "../../assets/stock/al_banner.png";
import { NavLink } from 'react-router-dom'

import AlmanacContent from "../../components/almanac-content/AlmanacContent";

function Almanac() {
  return (
    <div className="almanac">
      <Header />
      <Banner bannerImage={al_banner} config={false} />
      <AlmanacContent al__image={al_banner} />
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
  );
}

export default Almanac;
