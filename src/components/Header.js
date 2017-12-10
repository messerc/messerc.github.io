import React from "react";

const Header = () => (
  <div className="header">
    <div className="profile-pic-container">
      <img
        className="profile-pic"
        src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAuVAAAAJDdhOTE3ZWRmLWFhYTAtNGJlZi1hYjIzLWFhNTEwODVlMjljYg.jpg"
      />
    </div>
    <div className="info-container">
      <h4>
        <strong>CHRISTOPHER MESSER</strong>
      </h4>
      <h5 className="text-muted">Front-end / data viz developer</h5>
      <div className="icon-flex">
        <div>
          <a href="https://github.com/messerc">
            <span className="fa fa-github fa-2x icon" />
          </a>
        </div>
        <div>
          <a href="http://imgur.com/a/stzZn">
            <span className="fa fa-gitlab fa-2x icon" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/chris-messer-ba123320/">
            <span className="fa fa-linkedin fa-2x icon" />
          </a>
        </div>
        <div>
          <a href="https://medium.com/@messer55">
            <span className="fa fa-medium fa-2x icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
