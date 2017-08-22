import React from 'react';
import resume from './resume.json';

const IndividualProj = ({ name, summary }) => (
  <div className="content">
    <h4>{name}</h4>
    <p>{summary}</p>
  </div>
);

const Projects = () => (
  <section className="projects section">
    <div className="section-inner">
      <h2 className="heading">Projects</h2>
      <div className="content">
        {resume.publications.map( publication => <IndividualProj {...publication} />  )}
        <a className="btn btn-cta-secondary">
          More on GitHub <i className="fa fa-chevron-right"></i>
        </a>
      </div>
    </div>
  </section>
);

export default Projects;