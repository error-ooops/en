import React from 'react';
import './Sobieszyn.css';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import SobieszynContent from '../../components/sobieszyn-content/SobieszynContent';
import project_banner from '../../assets/stock/projects_banner.png'; 
import Footer from '../../components/footer/Footer';
import FooterNav from '../../components/footer-navigator/FooterNav';

function Sobieszyn({match}) {
    document.title = "Enheritage | Sobieszyn";
    return (
        <div className="sobieszyn">
            <Header/>
            <Banner bannerImage={project_banner} title="Projects" config={true}/>
            <div className="container">
                <SobieszynContent/>
                <FooterNav/>
                <Footer/>
            </div>
        </div>
    )
}

export default Sobieszyn
