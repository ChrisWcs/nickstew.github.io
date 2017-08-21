import React from 'react';
import resume from './resume.json';

const Projects = () => (
  <section className="projects section">
    <div className="section-inner">
      <h2 className="heading">Other Projects</h2>
      <div className="content">
        {openSourceProject(resume.publications[1])}

        <a className="btn btn-cta-secondary" href={resume.basics.profiles[2].url}>
          More on GitHub <i className="fa fa-chevron-right"></i>
        </a>
      </div>
    </div>
  </section>
);

export default Projects;