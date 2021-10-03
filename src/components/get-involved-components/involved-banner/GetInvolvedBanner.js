import React from 'react'
import Header from '../../header/Header'
import './GetInvolvedBanner.css'

function GetInvolvedBanner() {
    return (
        <div className="GetInvolvedBanner">
            <div className="GetInvolvedBanner_top">
                <Header/>
                <h1>Get involved</h1>
            </div>
            <div className="GetInvolvedBanner_content">
                    <p>We believe heritage buildings have a future. From cottages to castles and from churches to cathedrals we are here to help buildings and the people who care for them. Based on years of experience and research we understand how old buildings work.</p>
            </div>
            <div className="GetInvolvedBanner_bottom">
                <h2>Join Us</h2>
                <p>You can help support the places you love by becoming a member, donating or giving your time as a volunteer. We hope you enjoy our site and take a moment to drop us a line.</p>
            </div>
        </div>
    )
}

export default GetInvolvedBanner
