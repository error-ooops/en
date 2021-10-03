import React from "react";
import "./HomeContent.css";
import collage_itemOne from "../../assets/stock/collage_one.png";
import collage_itemTwo from "../../assets/stock/collage_two.png";
import collage_itemThree from "../../assets/stock/collage_three.png";
import collage_itemFour from "../../assets/stock/collage_four.png";

function HomeContent() {
  return (
    <div className="homecontent">
      <div className="home__mainSection">
        <div className="home__sectionWrapper">
          <h1 className="home__sectionTitle">
            How to preserve <br /> the past for the future
          </h1>
          <div className="section__seperator">
            <button className="filled__button overline">projects</button>
          </div>
          <p className="section__text">
            Historic houses are an integral part of a nation’s identity. <br />{" "}
            Finding a purpose for these in an epoch for which they were not
            designed is a challenge. <br /> They are challenging to restore and
            need imagination to maintain. Once they are gone,
            <br /> something irreplaceable has been lost forever. This is the
            task facing New Heritage.
          </p>
        </div>
        <div className="home__sectionCollage">
          <div className="collage__item">
            <img src={collage_itemOne} alt="" />
          </div>
          <div className="collage__item">
            <img src={collage_itemTwo} alt="" />
          </div>
          <div className="collage__item">
            <img src={collage_itemThree} alt="" />
          </div>
          <div className="collage__item">
            <img src={collage_itemFour} alt="" />
          </div>
        </div>
        <div className="home__sectionWrapper">
          <h1 className="home__sectionTitle">
            Much is in peril
          </h1>
          <div className="section__seperator">
            <button className="filled__button overline">about us</button>
          </div>
          <p className="section__text shrinked">
            Poland has a huge number of abandoned or derelict historic houses, largely as a <br /> consequence of the world wars and mismanagement following the collapse of <br /> communism. Many organisations and individuals have documented the plight of these <br /> houses through photographs and publications. Some brave individuals have even taken on <br /> the gargantuan task of saving a house, with varying degrees of success. Despite these <br /> efforts, an enormous amount of work remains to be done if the bulk of Poland’s <br /> architectural heritage is to be preserved, and preserved with dignity.
            <br />
            <br />
            The New Heritage Foundation is uniquely committed to the preservation of our shared <br /> heritage for the enlightenment and enjoyment of everyone now and of future generations.
          </p>
        </div>
        <div className="home__mainDates">
            <div className="home__date2700">
                <h1 className="date">2700</h1>
                <p>There are 2,700 one-storeyed mansions built until 1939, which retained at least the external character of the monument.</p>
            </div>
            <div className="home__date2000">
                <h1 className="date">2000</h1>
                <p>About 2000 are in a state of severe devastation or only the outer walls remain. Most often they are owned by the Agricultural Property Agency, commune or agricultural company. Some of them were sold to private individuals without regard to the rights of the heirs of the pre-war owners. Many of them are empty.</p>
            </div>
            <div className="home__dateAddition">
                <p>In 1939, there were approximately 16 thousand manors and 5 thousand palaces within the borders of Poland as constituted. Today what is left is only a mere 1% of the 1939 number.</p>
            </div>
        </div>
        <div className="home__videoIntro">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/D7_026CYZEc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
