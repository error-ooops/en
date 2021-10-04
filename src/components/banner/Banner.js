import React from "react";
import "./Banner.css";
import { NavLink } from "react-router-dom";

function Banner({ bannerImage, config, title }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="banner__content">
        <h1 className="banner__title">{title}</h1>
        {config ? <ul className="banner__collection">
          <li className="banner__item">
            <NavLink activeClassName="active__bannerLink" to={`/projects/sobieszyn`}>Sobieszyn</NavLink>
          </li>
          <li className="banner__item">
            <NavLink activeClassName="active__bannerLink" to={`/projects/pilica`}>Pilica</NavLink>
          </li>
          <li className="banner__item">
            <NavLink activeClassName="active__bannerLink" to="/projects/shortdocumentaries">Short Documentaries</NavLink>
          </li>
        </ul> : <> </>}
      </div>
      {
        config ? <div className="banner__description">
        <p className="banner__descriptionText">
          This is only a fraction of what we have been involved in. We take
          extra care on every project and we try to make every decision
          beneficial for everyone. Throughout our projects we are not only
          involved in preservation of historic buildings, but also we try to
          rise awareness of the historical importance of such sites.
        </p>
        <button className="filled__dark">find out more</button>
      </div> : <></>
      }
    </div>
  );
}

export default Banner;
