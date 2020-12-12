import React from 'react';
import {projectsData, aboutData} from '../portfolio';

const Projects = () => {
    return (
        <section className="projects section" id="projects">
                <h2 className="section-title">Projects</h2>

                <div className="projects__container bd-grid">
                    {projectsData.map((prj, key) => {
                        return (
                            <div className="projects__img" key={key}>
                                <a href={prj.url} target="popup">
                                    <img src={prj.img.default} alt=""/>
                                </a>
                            </div>
                        )
                    })}
                </div>
                <div className="projects__link">
                    <a href={aboutData.github} target="popup" className="button">More Projects...</a>
                </div>
            </section>
    )
}

export default Projects;