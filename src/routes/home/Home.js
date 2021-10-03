import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import HomeContent from '../../components/home-content/HomeContent';
import MainBanner from '../../components/main-banner/MainBanner';

import './Home.css';

function Home() {
    document.title = "Enheritage | Home";
    return (
        <div className="home">
            <Header/>
            <MainBanner />
            <div className="container">
                <HomeContent/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home
