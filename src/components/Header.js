import React from "react";

const icons = [
  {
    link: "https://github.com/messerc",
    icon: "fa fa-github fa-2x icon"
  },
  {
    link: "http://imgur.com/a/stzZn",
    icon: "fa fa-gitlab fa-2x icon"
  },
  {
    link: "https://www.linkedin.com/in/chris-messer-ba123320/",
    icon: "fa fa-linkedin fa-2x icon"
  },
  {
    link: "https://medium.com/@messer55",
    icon: "fa fa-medium fa-2x icon"
  }
];

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
      <h5 className="text-muted">Front-end engineer</h5>
      <div className="icon-flex">
        {icons.map(icon => {
          return (
            <div key={icon.link}>
              <a href={icon.link}>
                <span className={icon.icon} />
              </a>
            </div>
          )
        })}
      </div>
    </div>
  </div>
);

export default Header;
