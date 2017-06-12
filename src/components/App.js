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
      <h1>Christopher Messer</h1>
        <img style={s.img} src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAuVAAAAJDdhOTE3ZWRmLWFhYTAtNGJlZi1hYjIzLWFhNTEwODVlMjljYg.jpg" />
              <div>
        <Link to="/work">work</Link>
      </div>
      <div>
        <Link to="/about">about</Link> 
      </div>
    </div>
      <Switch>
        <Route exact path="/" component={Work} />
        <Route exact path="/work" component={Work} />
      </Switch>
          <div>
      </div>
    </div>
  );
}

export default App
