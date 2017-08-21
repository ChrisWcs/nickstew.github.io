import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import WorkExperience from './WorkExperience';
import Github from './Github';
import Footer from './Footer';

import BasicInfo from './BasicInfo';
import SkillSet from './SkillSet';
import Education from './Education';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container sections-wrapper">
          <div className="row">
            <div className="primary col-md-8 col-sm-12 col-xs-12">
              <About />
              <Projects />
              <WorkExperience />
              <Github />
            </div>
            <div className="secondary col-md-4 col-sm-12 col-xs-12">
              <BasicInfo />
              <SkillSet />
              <Education />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
