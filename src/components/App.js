import React from 'react';
import Interactive from 'react-interactive';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Work from './Work';
import s from '../styles/app.style.js'

export const App = () => {
  return (
    <div style={s.root}>
      <div style={s.container}>
      <h3><strong>CHRISTOPHER MESSER</strong></h3>
      <h5 className="text-muted">Front-end / data visualization developer</h5>
            <ul>
        <li>
          <span className="fa fa-github fa-2x" style={{color: 'rgb(155, 155, 155)'}}/>
        </li>
                  <li>
          <span className="fa fa-gitlab fa-2x" style={{color: 'rgb(155, 155, 155)'}}/>
        </li>
        <li>
          <span className="fa fa-linkedin fa-2x" style={{color: 'rgb(155, 155, 155)'}}/>
        </li>
                <li>
          <span className="fa fa-medium fa-2x" style={{color: 'rgb(155, 155, 155)'}}/>
        </li>
      </ul>
      <Link to="/">
        <img style={s.img} src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAuVAAAAJDdhOTE3ZWRmLWFhYTAtNGJlZi1hYjIzLWFhNTEwODVlMjljYg.jpg" />
      </Link>
              <ul>
                <li>
        <Link to="/work">work</Link>
      </li>
      <li>
        <Link to="/about">about</Link> 
        </li>
      </ul>
    </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Work} />
      </Switch>
          <div>
      </div>
    </div>
  );
}

export default App
