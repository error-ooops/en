import React from 'react'
import './AboutInvolvement.css'

function AboutInvolvement() {
    return (
        <div className="about_involvement">
            <h1 className="about_involvement_title">Our Involvement</h1>
            <div className="about_involvementContent">
                <div className="about_involvementRight">
                    <div className="about_involvementContent_item"> 
                        <h2>Non-profit help</h2>
                        <div className="about_involvementLine"></div>
                        <p>We intervene to help polish heritage houses and places in serious danger of demolition or decay. We bring together architects, engineers, planners and investors to offer viable alternative solutions. Where necessary, and with expert advice, we take steps to prevent major and needless losses. Our  immediate objectives are to identify build</p>
                        <span>Pokaż więcej</span>
                    </div>
                        <div className="about_involvementContent_item"> 
                        <h2>Rescue Plans</h2>
                        <div className="about_involvementLine"></div>
                        <p>The mobilisation of a rescue plan is the greatest challenge. The state  cannot be expected to fund every building in need of support.  Alternative solutions need to be found.  It will require a new vision,  innovation and expertise to give these buildings a new  purpose to  ensure their survival for future generations.</p>
                    </div>
                </div>
                <div className="about_involvementLeft">
                    <div className="about_involvementContent_item"> 
                        <h2>Film/Documentary</h2>
                        <div className="about_involvementLine"></div>
                        <p>One of our main objectives for the 2020/2021 year is to document through  film the decaying country residences to raise awareness and interest,  and to preserve these gems for our future generations. We are starting with series of short videos capturing the forgotten places in Polish heritage landscape. </p>
                        </div>
                        <div className="about_involvementContent_item"> 
                        <h2>Catalogue</h2>
                        <div className="about_involvementLine"></div>
                        <p>Research  and catalogue houses which are in danger anywhere in Poland. This will involve  contributions from the general public. Some houses are well known and  easy to identify. Others are ignored or forgotten on sites off the  beaten track. All contributions of videos, photographs and written material will be placed in a public access, multi-media virtual museum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutInvolvement
