import React from "react";
import "./ProjectContent.css";

function ProjectContent() {
  return (
    <div className="project__content">
      <h1 className="project__title">
        Experiences tell our story of the manor’s <br /> unique perspective and
        passion. <br /> NH Experiences typically include these four qualities:
      </h1>
      <div className="project__qualities">
          <div className="project__qualityLeft">
              <div className="quality">
                  <h1>Access</h1>
                <div className="seprator__line small"></div>
                  <p>We share our insider knowledge with guests and give them behind-the-scenes access to people, places, and activities that guests couldn’t typically find on their own.</p>
              </div>
              <div className="quality">
                  <h1>Perspective</h1>
                <div className="seprator__line small" ></div>
                  <p>The experience has personal meaning to us and conveys a unique point of view. Experiences tell manor’s story and immerse guests in their world.</p>
              </div>
          </div>
          <div className="project__qualityRight">
                <div className="quality">
                    <h1>Participation</h1>
                <div className="seprator__line small"></div>
                    <p>We provide opportunities for our guests to meaningfully engage in the activities of the experience, not just passively observe them.</p>
                </div>
                <div className="quality">
                    <h1>Passion</h1>
                    <div className="seprator__line small"></div>

                    <p>We are passionate about the theme of the experience and can demonstrate a deep knowledge or a skilled mastery of the activity.</p>
                </div>
          </div>
      </div>
    </div>
  );
}

export default ProjectContent;
