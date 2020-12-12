import React from "react";
import img from "../assets/img/work1.jpg";
import { skillsData } from "../portfolio";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__container bd-grid">
        <div>
          <h2 className="skills__subtitle">Profesional Skills</h2>
          {skillsData.map((skill, key) => {
            return (
              <div className="skills__data" key={key}>
                <div className="skills__names">
                  <i className={`bx bxl-${skill.logoName} skills__icon`}></i>
                  <span className="skills__name">{skill.name}</span>
                </div>
                <div className="skills__bar" style={{ width: skill.percent }} />
                <div>
                  <span className="skills__percentage">{skill.percent}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <img src={img} alt="" className="skills__img" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
