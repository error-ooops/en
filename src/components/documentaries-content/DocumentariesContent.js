import React from "react";
import "./DocumentariesContent.css";

function DocumentariesContent() {
  return (
    <div className="documentaries__content">
      <h1 className="sb__title">Short Documentaries</h1>
      <div className="home__videoIntro">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/D7_026CYZEc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="documentaries__shorts">
        <div className="shorts">
        <iframe width="100%" height="80%" src="https://www.youtube.com/embed/FFynC91zMEQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p>
            Check out this great video of our director Richard Berkeley-Dennis
            on the destruction of the country house. Richard speaks about the
            importance of persisting the memory stored in old farm buildings
          </p>
        </div>
        <div className="shorts">
        <iframe width="100%" height="80%" src="https://www.youtube.com/embed/b6Naim9sXSA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>Richard Berkeley visits the Kicki Palace in Sobieszyn</p>
        </div>
        <div className="shorts">
        <iframe width="100%" height="80%" src="https://www.youtube.com/embed/9AbNvUsXjoE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p><span className="highlited">Lubartów - Sanguszko family palace</span><br />
            Richard visits the Sanguszko family palace in Lubartów built at the beginning of XVII century and designed by Tylman van Gameren</p>
        </div>
        <div className="shorts">
        <iframe width="100%" height="80%" src="https://www.youtube.com/embed/jAAPRhyre_8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>Heritage Houses in Poland - intro</p>
        </div>
      </div>
    </div>
  );
}

export default DocumentariesContent;
