import React from 'react';
import Interactive from 'react-interactive';
import { NavLink, Link, Switch, Route, IndexRoute } from 'react-router-dom';
import Home from './Home';
import Work from './Work';
import About from './About';
import s from '../styles/app.style.js'

export const App = () => {
  return (
    <div className="container-fluid">
      <div style={s.container}>
      <h3><strong>CHRISTOPHER MESSER</strong></h3>
      <h5 className="text-muted">Front-end / data visualization developer</h5>
            <ul>
        <li>
          <span className="fa fa-github fa-2x icon"/>
        </li>
                  <li>
          <span className="fa fa-gitlab fa-2x icon"/>
        </li>
        <li>
          <span className="fa fa-linkedin fa-2x icon"/>
        </li>
                <li>
          <span className="fa fa-medium fa-2x icon"/>
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
        <NavLink to="/about" activeClassName="active">about</NavLink> 
        </li>
      </ul>
    </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Work} />
        <Route exact path ="/about" component={About} />
      </Switch>
          <div>
      </div>
    </div>
  );
}

export default App
