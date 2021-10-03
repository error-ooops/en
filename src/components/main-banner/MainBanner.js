import React from 'react';
import './MainBanner.css';
import banner_video from '../../assets/video/banner_video.mp4';
import arrow from '../../assets/icons/arrow.svg';

function MainBanner() {
    return (
        <div className="main__banner">
            <video className="main__bannerVideo" loop autoPlay src={banner_video}></video>
            <div className="main__bannerContent">
                <h1 className="main__bannerTitle">Combining Passion and Professionalism</h1>
                <div className="main__bannerCalltoact">
                    <img src={arrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MainBanner
