import React from 'react'
import './AboutFooter.css'
import { NavLink } from 'react-router-dom';
import aboutFooterImage001 from '../../../assets/stock/about-footer001.svg'
import aboutFooterImage002 from '../../../assets/stock/about-footer002.svg'
import aboutFooterImage003 from '../../../assets/stock/about-footer003.svg'
import aboutFooterImage004 from '../../../assets/stock/about-footer004.svg'
import aboutFooterImage005 from '../../../assets/stock/about-footer005.svg'


function AboutFooter() {
    return (
        <div className="about_footer">
            <h1 className="about_footerTitle">Our Partners</h1>
            <div className="about_footerContent">
                <div className="about_footer_line"></div>
                <ul className="about_footerIcons">
                    <li className="about_footerIcons_item">
                        <img src={aboutFooterImage001} alt="" />
                    </li>
                    <li className="about_footerIcons_item">
                        <img src={aboutFooterImage002} alt="" />
                    </li>
                    <li className="about_footerIcons_item">
                        <img src={aboutFooterImage003} alt="" />
                    </li>
                    <li className="about_footerIcons_item">
                        <img src={aboutFooterImage004} alt="" />
                    </li>
                    <li className="about_footerIcons_item">
                        <img src={aboutFooterImage005} alt="" />
                    </li>
                </ul>
            </div>

            <div className="footer__bottom">
                <p>Copyright © 2021 New Heritage Poland — Wszelkie prawa zastrzeżone.</p>
                <ul className="footer__bottomCollection">
                    <li className="footer__bottomItem"> <NavLink to="/">PRIVACY POLICY</NavLink></li>
                    <li className="footer__bottomItem"> <NavLink to="/">STATUTE</NavLink> </li>
                </ul>
            </div>
        </div>
    )
}

export default AboutFooter
