import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <h3>
      <strong>CHRISTOPHER MESSER</strong>
    </h3>
    <h5 className="text-muted">Front-end / data visualization developer</h5>
    <ul>
      <li>
        <a href="https://github.com/messerc">
          <span className="fa fa-github fa-2x icon" />
        </a>
      </li>
      <li>
        <a href="http://imgur.com/a/stzZn">
          <span className="fa fa-gitlab fa-2x icon" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/chris-messer-ba123320/">
          <span className="fa fa-linkedin fa-2x icon" />
        </a>
      </li>
      <li className="slight-offset">
        <a href="https://medium.com/@messer55">
          <span className="fa fa-medium fa-2x icon" />
        </a>
      </li>
    </ul>
    <Link to="/">
      <img
        className="profile-pic"
        src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAuVAAAAJDdhOTE3ZWRmLWFhYTAtNGJlZi1hYjIzLWFhNTEwODVlMjljYg.jpg"
      />
    </Link>
  </div>
);

export default Header;
