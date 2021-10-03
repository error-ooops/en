import React from 'react';
import './FooterNav.css';
import { NavLink } from 'react-router-dom';

function FooterNav() {
    return (
        <div className="footer__nav">
            <ul className="footer__collection">
          <li className="footer__item">
            <NavLink className="footer__link" activeClassName="active__footerLink" to="/projects/sobieszyn">Sobieszyn</NavLink>
          </li>
          <li className="footer__item">
            <NavLink className="footer__link" activeClassName="active__footerLink" to="/projects/pilica">Pilica</NavLink>
          </li>
          <li className="footer__item">
            <NavLink className="footer__link" activeClassName="active__footerLink" to="/projects/shortdocumentaries">Short Documentaries</NavLink>
          </li>
        </ul>
        </div>
    )
}

export default FooterNav
