import React from "react";

const Project = props => {
  const { project } = props;
  return (
    <div className="work-row">
      <div>
        <a href={project.source}>
          <video className="video" playsInline autoPlay loop muted="muted">
            <source src={project.videoSource} type="video/mp4" />
            <source src={project.videoSource} type="video/mov" />
          </video>
        </a>
      </div>
      <div>
        <h3>{project.name}</h3>
        <h5 className="text-muted">{project.role}</h5>
        <h5 className="text-muted">
          built with:{" "}
          {project.techs.map(tech => {
            return <span className={`devicon-${tech}`} key={tech} />;
          })}
          <span style={{ fontSize: "10px" }}>
            {" "}
            {project.noIconTechs.join(", ")}
          </span>
        </h5>
        <p style={{ fontSize: "12px" }}>{project.description}</p>
      </div>
    </div>
  );
};

export default Project;
