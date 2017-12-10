import React, { Component } from "react";

import Project from "./Project.js";
import projects from "./data/projects.js";

const Work = props => (
  <div>
    <div className="work-container">
      <div className="work-row-header">
        <h3 className="text-muted">Featured work</h3>
        <hr style={{ borderTop: "3px solid #93C54B" }} />
      </div>
      {projects.map(project => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  </div>
);

export default Work;
