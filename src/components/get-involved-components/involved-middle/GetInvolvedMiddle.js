import React, { useState } from 'react'
import './GetInvolvedMiddle.css'
import visa from '../../../assets/icons/visa.svg';
import americanExpress from '../../../assets/icons/american express.svg';
import discover from '../../../assets/icons/discover.svg';
import paypal from '../../../assets/icons/paypal.svg';
import mastercard from '../../../assets/icons/mastercard.svg';
import chevronDown from '../../../assets/stock/chevron-down.svg'
import { NavLink } from 'react-router-dom';


function GetInvolvedMiddle() {
    const [showSupport, setshowSupport] = useState(false)
    return (
        <div className="getInvolvedMiddle">
            <div className="getInvolvedMiddle_text">
                <p>As a charity we need your help to protect the Poland's best-loved places in our care, to ensure they remain special for everyone. You can support our valuable conservation work as a charity in many ways. From making a general donation to supporting an appeal, or even taking part in one of our raffles, we greatly appreciate anything you can give during this particularly difficult time. Membership and visitor income makes a vital contribution to the upkeep of the amazing places you love, but we rely on your additional generosity to continue to protect the irreplaceable. In our beginnings, we need you now more than ever.</p>
                <p>
                We are at the start of our mission. We are gathering the support of people whose wide range of expertise will enable us to carry through our mission. But, we need your support to enable this work to begin, work that will preserve our shared heritage. You can play a vital role through reporting details of a house in need, suggesting ideas for its preservation, making a donation.
                </p>
            </div>
            <div className="getInvolvedMiddle_image"></div>
            <div className="footer__container">
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
            <div className="getInvolvedMiddle_Town"></div>
            <div className="getInvolvedCorporate">
                <h1>Corporate partners</h1>
                <div className="getInvolvedCorporate_line"></div>
                <p>We are working to develop lasting relationships with companies who are excited about the work that we do and where we feel that a positive contribution to both brands can be made. By associating with the NHP we can offer your firm a number of exciting sponsorship opportunities, including major events and publications; a platform to speak to our audiences; and benefits for your staff and clients. 
                As a NHP Corporate Partner we can also help you to meet your companies CSR aspirations.</p>
                <p>We will work with you to create a unique partnership package that meets the needs of your firm. 
                To find out more please contact us.</p>
            </div>
            <div className= {showSupport ?"getInvolvedSupport activeSupport":"getInvolvedSupport "}> 
                <div className="getInvolvedSupportContainer">
                    <h1>Corporate supporters</h1>
                    <p>
                    Bring all the benefits of NHP membership to your employees, in the knowledge that you are enhancing your employment offer, providing them with valuable access to professional development and publicly lending your organisation's support to the work of the NHP.
                    </p>
                    <p>
                    Our Corporate Supporters are like minded charities, small companies and large firms who are an active part of the building conservation sector. We can help you to offer NHP membership as a benefit to you and your employees. You don't have to be a big firm to take part, we recognise that many providers of building conservation skills are small organisations. Just three memberships is all you need to get started. As a thank you we will list your organisation's name on our website and those offering more than three memberships to their staff will qualify for a discount.
                    </p>
                   {showSupport ? null: <img onClick={()=> setshowSupport(prev=> !prev)} src={chevronDown} alt="" />}
                </div>
                <div className="getInvolvedSupportHide">
                    <div className="getInvolvedSupportHide_item">
                        <h1>Benefits of Becoming a Corporate Supporter:</h1>
                        <p>Three or more named memberships for your staff or clients
                            Your business name listed on our website
                            Access to our digital Supporters Badge for use in your social media
                            The opportunity to apply to be a suggested supplier in our Technical Database
                            First notice of sponsorship opportunities</p>
                    </div>
                    <div className="getInvolvedSupportHide_item">
                        <h1>Each of your named members will receive:</h1>
                        <p>Our quarterly NHP Magazine, a must-read for those who love old buildings
                            Access to our online list of historic properties for sale and website Members Area
                            Visits and events in your local area via our regional groups
                            Priority booking for selected NHP courses
                            Discounted tickets to our Spring and Autumn lecture series
                            Deals and offers from other organisations</p>
                    </div>
                    <div className="getInvolvedSupportHide_item">
                        <h1>How your membership helps old buildings:</h1>
                        <h4>Our members are an integral part of the NHP. As well as championing old buildings and the NHP Approach, your membership helps us to:</h4>
                        <p>Offer free, impartial advice via our technical advice line and online Knowledge Base
                            Carry out casework, responding to applications for alterations to listed buildings across England and Wales
                            Campaign for at risk buildings and promote skills and training within the sector
                            Train the next generation of professionals to care for old buildings
                            Carry out hands-on repairs to old buildings at our working parties 
                            and through the Old House Project</p>
                            <button >CONTACT IS NOW</button>
                       
                    </div>
                </div>
            </div>
            <div style={{backgroundColor:"#1B1B1B"}} className="footer__bottom">
                <p>Copyright © 2021 New Heritage Poland — Wszelkie prawa zastrzeżone.</p>
                <ul className="footer__bottomCollection">
                    <li className="footer__bottomItem"> <NavLink to="/">PRIVACY POLICY</NavLink></li>
                    <li className="footer__bottomItem"> <NavLink to="/">STATUTE</NavLink> </li>
                </ul>
            </div>
        </div>
    )
}

export default GetInvolvedMiddle
