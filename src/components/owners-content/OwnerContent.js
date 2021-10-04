import React from "react";
import "./OwnerContent.css";
import ownerMainImage from "../../assets/stock/owner_imageMain.png";
import ownerImageOne from "../../assets/stock/owner__imageOne.png";
import ownerImageTwo from "../../assets/stock/owner_imageTwo.png";

function OwnerContent() {
  return (
    <div className="owners__content">
      <p className="sb__text owner__firstText">
        New Heritage Experiences are unique activities designed for you in a
        manor or palace of your choosing from our portfolio. Unlike a typical
        tour or workshop, NH Experiences are especially crafted for you and
        offer a deep-dive into the world of the house. We offer our guests
        special knowledge, insights and access to local places and communities
        that they would be unlikely to find on their own, creating lasting
        connections and treasured memories. Each person’s experience is a
        different adventure, and in some ways very personal.
      </p>
      <div className="almanac__imageWrapper owner__mainImage">
        <img className="almanac__image" src={ownerMainImage} alt="" />
        <h1 className="almanac__imageText">Polish Landed Gentry</h1>
      </div>
      <p className="sb__text main__text">
        An old stately home located in the small town of Dukla a true hidden gem
        on the outskirts of modern Poland. The origins of the earliest building
        date back to the mid 16th Century to a renaissance castle. <br /> <br />{" "}
        It was most likely built by the Lord of Dukla Jan Jordan. The next
        owners were the Zborowski, Drohojewski and Męciński families. During the
        next century the castle fell into disrepair. In 1636-38 the new owner
        Franciszek Bernard Mniszech redeveloped the castle adding a new building
        to the west side and fortified it with four defensive bastions resulting
        in a fortified palace. <br />
        <br /> The next redevelopment was carried out in 1764-65 by Jerzy August
        Wandalin Mniszech and his wife Maria Amalia, of the house Brühl. In this
        period they expanded the existing palace adding another storey with a
        mansard roof. The author of the project was most likely the Dresden
        architect Jan Fryderyk Knobl and the works were managed by the architect
        Leonard Andrys. On the site of two of the bastions outbuildings were
        built and the remaining fortifications were dismantled. In their place a
        park in the style of a French formal garden was created. <br />
        <br /> In 1989 after the fall of Communism Stanislaw the rightful owner
        of the Dukla Estate started procedures to reclaim his property.
        Following lengthy legal court cases the palace and park were returned to
        Stanislaw's children in the autumn of 2012.
      </p>
      <div className="owner__images">
        <div className="owner__imageWrapper">
          <img src={ownerImageOne} alt="" />
          <p>
            Located in the Palace is a History Museum. The Museum holds
            permanent exhibitions on the history of the Dukla Palace, military
            exhibits from both world wars and open air exhibits of heavy
            artillery.
          </p>
        </div>
        <div className="owner__imageWrapper">
          <img src={ownerImageTwo} alt="" />
          <p>
            The Palace complex consists of three buildings, the central palace
            and two outbuildings. The palace grounds are 10 hectares in size.
            The park consists of three lakes, an ice house, a burial chapel
            (built in 1925) and the ruins of the green houses.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OwnerContent;
