import React, { Component } from 'react';

import Project from './Project.js';
import projects from './data/projects.js'; 

export default class Work extends Component {
  
  render() {
    return (
    <div className="work-container">
    {projects.map(project => {
     console.log(project);
     return (
       <div className="row work-row">
        <div className="col-sm-5 col-sm-offset-1">
        <a href={project.source}>
          {(() => {
           if (project.video) {
            return (
              <video className="video" autoPlay loop>
                <source src={project.videoSource} type="video/mp4" />
              </video>
            )
          } else {
            return (
              <img className="video" src={project.imageSource} />
            );
          }
          })()}      
        </a>
        </div>
        <div className="col-sm-4">
          <h3>{project.name}</h3>
          <h5 className="text-muted">{project.role}</h5>
          <h5 className="text-muted">built with:{' '}
            {project.techs.map(tech => {
              return (
                <span className={`devicon-${tech}`} />
              );
            })}
            <span style={{fontSize: '10px'}}>
              {project.noIconTechs.join(', ')}
            </span>
          </h5>
          <p style={{fontSize: '12px'}}>{project.description}</p>
        </div>
      </div>
     )
    })}
    </div>
  )
  }
}
