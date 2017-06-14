import React from 'react';
import Interactive from 'react-interactive';
import { NavLink, Link, Switch, Route, IndexRoute } from 'react-router-dom';
import Home from './Home';
import Work from './Work';
import About from './About';
import Charts from './Charts';
import s from '../styles/app.style.js'

export const App = () => {
  return (
    <div className="container-fluid">
      <div style={s.container}>
      <h3><strong>CHRISTOPHER MESSER</strong></h3>
      <h5 className="text-muted">Front-end / data visualization developer</h5>
      <ul>
        <li>
          <a href="https://github.com/messerc">
          <span className="fa fa-github fa-2x icon"/>
          </a>
        </li>
        <li>
          <a href="http://imgur.com/a/stzZn">
          <span className="fa fa-gitlab fa-2x icon"/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/chris-messer-ba123320/">
          <span className="fa fa-linkedin fa-2x icon"/>
          </a>
        </li>
        <li>
          <a href="https://medium.com/@messer55">
          <span className="fa fa-medium fa-2x icon"/>
          </a>
        </li>
      </ul>
      <Link to="/">
        <img style={s.img} src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAuVAAAAJDdhOTE3ZWRmLWFhYTAtNGJlZi1hYjIzLWFhNTEwODVlMjljYg.jpg" />
      </Link>
              <ul>
                <li>
        <NavLink to="/work" activeClassName="active">work</NavLink>
      </li>
            <li>
        <NavLink to="/charts" activeClassName="active">my life in charts</NavLink> 
        </li>
      <li className="slight-offset">
        <NavLink to="/about" activeClassName="active">about</NavLink> 
        </li>
      </ul>
    </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/charts" component={Charts} />
        <Route exact path ="/about" component={About} />
      </Switch>
          <div>
      </div>
    </div>
  );
}

export default App
