import React, { Component } from "react";

import Project from "./Project.js";
import projects from "./data/projects.js";

const Work = props => (
  <div className="work-container">
    {projects.map(project => <Project key={project.name} project={project} />)}
  </div>
);

export default Work;