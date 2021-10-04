import React from 'react';
import './Documentaries.css';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import FooterNav from '../../components/footer-navigator/FooterNav';
import DocumentariesContent from '../../components/documentaries-content/DocumentariesContent';
import project_banner from '../../assets/stock/projects_banner.png'; 

function Documentaries() {
    document.title = "Enheritage | Short Documentaries";
    return (
        <div className="documentaries">
            <Header/>
            <Banner bannerImage={project_banner} title="Projects" config={true}/>
            <DocumentariesContent/>
            <div className="container short__background">
                <FooterNav/>
                <Footer/>
            </div>
        </div>
    )
}

export default Documentaries
