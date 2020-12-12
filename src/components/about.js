import React from "react";
import { aboutData } from "../portfolio";

const About = () => {
  return (
    <section className="about section " id="about">
      <h2 className="section-title">About</h2>

      <div className="about__container bd-grid">
        <div className="about__img">
          <img src={aboutData.img.default} alt="" />
        </div>
        <div>
          <h2 className="about__subtitle">I'am {aboutData.name}</h2>
          <p className="about__text">
            {aboutData.message}
            <br />
          </p>
          <div className="about__social">
            <a
              href={aboutData.linkedin}
              target="popup"
              className="about__social-icon"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href={aboutData.twitter}
              target="popup"
              className="about__social-icon"
            >
              <i className="bx bxl-twitter"></i>
            </a>
            <a
              href={aboutData.github}
              target="popup"
              className="about__social-icon"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href={aboutData.gitlab}
              target="popup"
              className="about__social-icon"
            >
              <i className="bx bxl-gitlab"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
