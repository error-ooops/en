import React from "react";
import "./SobieszynContent.css";
import sb_imageOne from "../../assets/stock/sb_imageOne.png";
import sb_imageTwo from "../../assets/stock/sb_imageTwo.png";
import { carousel_images } from "../../static/carousel_images";
import ProjectGallary from '../../components/project-gallary/ProjectGallary';


function SobieszynContent() {
  return (
    <div className="sobieszyn__content">
      <h1 className="sb__title">Sobieszyn</h1>
      <div className="seprator__line sb"></div>
      <p className="sb__description">
        Standing on the edge of what had once been a prosperous and extensive
        19th century red-bricked farmyard stood a splendid neo-classical house.
        It was the sort of house that anyone would want to live in. Not too big
        and not too small. Elegant and charming. Inexplicably, it was deserted
        and open to the elements.
      </p>
      <div className="sb__collage">
        <img src={sb_imageOne} alt="" />
        <img src={sb_imageTwo} alt="" />
      </div>
      <div className="sb__supportive">
        <p className="sb__text">
          This palace built between 1790 and 1825 is one of the interesting
          examples of classicism architecture in Poland, designed by architect
          Chrystian Piotr Aigner with a small contribution by of so called
          architect amateur Stanisław Kostka Potocki. Farm buildings designed by
          Henryk Marconi. The Kicki family came into possession of the palace at
          the end of the 18th century by marriage, of whom it's most notable and
          last owner was count Kajetan Kicki. At the end of his life in 1878, he
          left his whole estate in his will for social welfare. On the basis of
          that in 1896 the first agricultural school in the Kingdom of Poland
          was opened.
          <br />
          <br />
          About ten years ago our director Richard Berkeley-Dennis came across
          this magnificent house and said: I was driving cross-country from
          Lublin to Warsaw when I saw a sign to Sobieszyn. It occurred to me
          that there might be some link with the Sobieski family and, that if
          there were, there might be a house worth seeing. Being in no hurry to
          get back to Warsaw I followed my instinct. The village itself is an
          unremarkable linear development stretching over a couple of
          kilometres. When the road seemed to be about to peter out my curiosity
          was rewarded. A few weeks later I returned with a film-maker and we
          made a short documentary about the house, which you can see below.
        </p>
      </div>
      <div className="sb__secondary">
        <p className="sb__text secondary">
          Two years ago I was invited to Lublin city hall to discuss a project
          with the city authorities. In passing, I mentioned Sobieszyn and
          wondered what had happened to the house. They checked-up and
          discovered that it was for sale. We met the relevant authorities at
          Ryki town hall and discovered a scandal of shocking proportions. Some
          time before, the town had sold the house at a bargain price to some
          fraudsters masquerading as investors with a plan. Following the sale,
          these people had managed to raise 19 million zloty from various
          sources for restoration work before they disappeared with all the
          funds. Naturally, they had failed to spend anything on the house. A
          bank, which had taken the house as collateral for some of the lost
          money, wanted a return. Thus, the bank had put the house on the
          market. Two years on there have been no takers because the 4 million
          price tag is unrealistic. The house remains open to the elements. It
          won’t last many more winters. <br /> <br /> What is extraordinary is
          that this story of the exploitation of the national heritage is not
          unique. It seems that many historic houses in Poland have been used as
          means of raising capital illicitly. Why is so little being done to
          preserve this vital part of Poland’s heritage? The government has made
          heritage a priority and yet it is government agencies which seem to be
          responsible for its neglect.
        </p>
      </div>
      <ProjectGallary projectGallaryImages={carousel_images.carouselpt}/>
      <div className="sb__supportive dark">
        <p className="sb__text">
          Sobieszyn is a lovely house. It could have many uses. Whatever it
          could be it won’t be unless someone does something very soon to
          preserve it. This is why we have decided to take the necessary steps
          in order to protect it from further decaying. We will keep you
          updated, but in the mean time please check out our social feed. The
          restoration of the palace would not be possible without the unending
          support and help from the volunteers. 
          <br /><br />
            The focus of the restoration
          currently looks towards the interior of the palace, through an
          extensive project to restore the ground floor and create an
          architectural installation. We are currently preparing the project and
          it is scheduled to launch through winter 2020 and main launch in
          spring 2021.
        </p>
      </div>
    </div>
  );
}

export default SobieszynContent;
