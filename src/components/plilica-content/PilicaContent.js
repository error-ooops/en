import React from "react";
import ProjectGallary from "../project-gallary/ProjectGallary";
import pl_imageOne from "../../assets/stock/pl_imageOne.png";
import pl_imageTwo from "../../assets/stock/pl_imageTwo.png";
import { carousel_images } from "../../static/carousel_images";

function PilicaContent() {
  return (
    <div className="sobieszyn__content">
      <h1 className="sb__title">Pilica</h1>
      <div className="seprator__line sb"></div>
      <p className="sb__description">
        The palace in Pilica, sometimes referred to as castle, has as colourful
        history as its owners had. It all started around year 1569 when
        Padniewscy of Nowina coat of arms took over the fortified estate from
        the Pilecki family.
      </p>
      <div className="sb__collage">
        <img src={pl_imageOne} alt="" />
        <img src={pl_imageTwo} alt="" />
      </div>
      <div className="sb__supportive">
        <p className="sb__text">
          As our director Richard Berkeley-Dennis states that: I found Pilica by
          chance about seven years ago. I couldn’t believe my eyes as I walked
          up the steep hill to the house, flanked by the quadruple avenue of
          trees which line the drive. How could a house of this magnificence and
          importance be deserted? But as I drew close, I began to have my
          doubts. Was it a 19th century fake renaissance palace, the fantasy of
          some self-made industrialist or the real thing? I simply couldn’t
          decide. It took Dominik to educate me. As it turned out it is
          everything, I thought it was, and more. Much more.
        </p>
      </div>
      <div className="sb__secondary">
        <p className="sb__text secondary">
          The house was begun in the 1570s as a fortified palace. Over the
          centuries it was bought and sold, burned down, rebuilt, added to,
          burned again, restored, remodelled into some sort of rococo
          Disneyland, sequestered by the Germans, seized by the state for a
          school and then sold, carelessly, to Mrs. Barbara Piasecka-Johnson, an
          heir to the Johnson & Johnson family fortune, who died before she
          could sort out the mess made by a negligent notary in the sale
          transaction or capitalise on the 3 million dollars she had already
          spent extending the foundations and the basement. Thanks to Dominik, I
          discovered that what I had taken to be the main entrance was nothing
          more than the garden gate. The real entrance was the other side of the
          house, the cour d'honneur, half lost and decaying in woodland. And,
          what an entrance! Magnificent Italian renaissance fortifications which
          had been jazzed up in the 19th century. Magnificent, nonetheless.
        </p>
      </div>
      <ProjectGallary projectGallaryImages={carousel_images.carouselpt} />
      <div className="sb__supportive dark">
        <p className="sb__text">
          The focus of the restoration currently looks towards the interior of
          the palace, through an extensive project to restore the ground floor
          and create an architectural installation. We are currently preparing
          the project and it is scheduled to launch through winter 2020 and main
          launch in spring 2021.
        </p>
      </div>
    </div>
  );
}

export default PilicaContent;
