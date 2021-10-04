import React from 'react';
import './ContactContent.css';
import wt from '../../assets/icons/whatsapp.svg';
import instagram from '../../assets/icons/instagram 1.svg';
import facebook from '../../assets/icons/facebook 1.svg';
import youtube from '../../assets/icons/youtube 1.svg';

function ContactContent() {
    return (
        <div className="contact__content">
            <form className="contact__form">
                <h1 className="contact__title">Drop us a line!</h1>
                <input type="text" className="contact__input" placeholder="Name"/>
                <input type="email" className="contact__input" placeholder="Email*"/>
                <textarea placeholder="Message" className="contact__textarea"></textarea>
                <button className="filled__button large" style={{marginTop: "10px"}}>SEND</button>
                <button className="filled__contactWt"><img src={wt} alt="" />Message us on WhatsApp</button>
            </form>
            <div className="contact__info">
                <h1 className="contact__title">Drop us a line!</h1>
                <p className="contact__infoText">
                We enjoy new views and perspective, so feel free to visit during normal business hours.
                </p>
                <div className="seprator__line con__line"></div>
                <div className="contact__address">
                <p className="contact__infoText bold">New Heritage Fundacja</p>
                <p className="contact__infoText bold">Ulica Mokotowska 60, 00-534 Warsaw, Mazowieckie, Poland</p>
                </div>
               <div className="contact__tel">
               <p className="contact__infoText tel">0048 602 496 285</p>
                <p className="contact__infoText tel">0048 502 965 353</p>
                <p className="contact__infoText tel">info@nheritage.org</p>
               </div>
               <ul className="contactsocial__links">
                   <li className="social__link"><img src={youtube} alt="" /></li>
                   <li className="social__link"><img src={facebook} alt="" /></li>
                   <li className="social__link"><img src={instagram} alt="" /></li>
               </ul>
            </div>
        </div>
    )
}

export default ContactContent
