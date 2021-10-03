import React from 'react'
import './GetInvolved.css'
// import involvedImage from '../../assets/stock/involved.png'
import GetInvolvedBanner from '../../components/get-involved-components/involved-banner/GetInvolvedBanner'
import GetInvolvedCarousel from '../../components/get-involved-components/involved-carousel/GetInvolvedCarousel'
import GetInvolvedMiddle from '../../components/get-involved-components/involved-middle/GetInvolvedMiddle'

function GetInvolved() {
    return (
        <div className="get_involved">
            <GetInvolvedBanner/>
            <GetInvolvedCarousel/>
            <GetInvolvedMiddle/>
        </div>
    )
}

export default GetInvolved
