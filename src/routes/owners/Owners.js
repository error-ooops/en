import React from "react";
import "./Owners.css";
import owners_banner from "../../assets/stock/owners_banner.png";
import Banner from "../../components/banner/Banner";
import Header from "../../components/header/Header";
import OwnerContent from "../../components/owners-content/OwnerContent";
import { NavLink } from 'react-router-dom';

function Owners() {
  return (
    <div className="owners">
      <Header />
      <Banner
        bannerImage={owners_banner}
        ownerSpecial={true}
        title="Owners"
        config={false}
      />
      <div className="container">
        <OwnerContent />
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
  );
}

export default Owners;
