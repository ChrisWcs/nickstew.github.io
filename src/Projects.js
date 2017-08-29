import React from 'react';
import resume from './resume.json';

const IndividualProj = ({ name, summary, demo, website }) => (
  <div className="content">
    <h4>{name}</h4>
    <p>{summary}</p>
    <a className="btn btn-cta-secondary" href={demo}>Demo</a>
    <a className="btn btn-cta-secondary extra-left-margin" href={website}>Github</a>
  </div>
);

const Projects = () => (
  <section className="projects section">
    <div className="section-inner">
      <h2 className="heading">Projects</h2>
      <div className="content">
        {resume.publications.map( publication => <IndividualProj {...publication} />  )}
        <a className="btn btn-cta-primary extra-top-margin" href="https://github.com/ChrisWcs">
          More on GitHub <i className="fa fa-chevron-right"></i>
        </a>
      </div>
    </div>
  </section>
);

export default Projects;