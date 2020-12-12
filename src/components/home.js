import React from "react";
import { homeData } from "../portfolio";
import img from "../assets/img/manOnTable.svg";

const Home = () => {
  return (
    <section className="home bd-grid" id="home">
      <div className="home__data">
        <h1 className="home__title">
          Hi,
          <br />
          I'am <span className="home__title-color">{homeData.name}</span>
          <br /> {homeData.action}
        </h1>

        <a href={homeData.resume.default} target="_blank" className="button">
          Resume
        </a>
      </div>

      <div className="home__social"></div>

      <div className="home__img">
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default Home;
