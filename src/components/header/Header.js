import React from "react";

import { NavLink } from "react-router-dom";
import { nav_links } from "../../static/navigation_links";
import "./Header.css";
import headerLogo from "../../assets/logos/logo.svg";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <div className="header__logoContainer">
          <img src={headerLogo} alt="Heritage Poland Logo" />
        </div>
      </div>
      <div className="header__navigation">
        <div className="header__navigationContainer">
          <div className="header__options">
            <ul className="header__languageOptions">
              <li className="header__language">PL</li> {" | "}
              <li className="header__language">EN</li>
            </ul>
            <NavLink to="/almanac"><button className="outlined__button">almanac</button></NavLink>
            <NavLink to="/getinvolved"> <button className="filled__button">get involved</button></NavLink>
           
          </div>
          <ul className="header__routeCollection">
            {nav_links?.map((collectionItem) => (
              <li className="collection__item">
                <NavLink to={`${collectionItem.route}`}>{collectionItem.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
