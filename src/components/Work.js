import React from 'react';
import s from '../styles/app.style.js'
const twitchMineVid = require('file-loader!./twitchminedemo.mp4');

export default class Work extends React.Component {

  render() {
    return (
    <div className="route-container">
      <div className="row work-row">
        <div className="col-sm-5 col-sm-offset-1">
          <a href="https://www.twitchmine.com/">
          <video className="video" autoPlay loop >
            <source src={twitchMineVid} type="video/mp4" />
          </video>
          </a>
        </div>
        <div className="col-sm-4">
          <h3>twitchmine</h3>
          <h5><strong>featured project</strong></h5>
          <h5 className="text-muted">co-creator and front-end designer </h5>
          <h5 className="text-muted">used:{' '}   
            <span className="fa fa-gitlab" />{' '}    
            <span className="devicon-javascript-plain" />{' '}
            <span className="devicon-react-original" />{' '}
            <span className="devicon-webpack-plain" /> {' '}
            <span className="devicon-rails-plain-wordmark" />{' '}
            <span className="devicon-postgresql-plain" />{' '}
            <span style={{fontSize: '10px'}}>redux, recharts</span>
          </h5>
          <p style={s.pText}>twitchmine is a full-fledged single-page application built to understand the historical viewership trends on popular streaming site twitch.tv. From initial idea to launch, this project took about twelve months. When I first wanted to build this, I had never written a line of code before.</p>
        </div>
      </div>
       <div className="row work-row">
        <div className="col-sm-5 col-sm-offset-1">
          <a href="http://twitch.show">
          <img className="video" src="http://i.imgur.com/o74QbNP.png" />
          </a>
        </div>
        <div className="col-sm-4">
          <h3>twitch.show</h3>
          <h5 className="text-muted">creator</h5>
          <h5 className="text-muted">used:{' '}  
            <span className="fa fa-github" />{' '}     
            <span className="devicon-javascript-plain" />{' '}
            <span className="devicon-react-original" />{' '}
            <span className="devicon-webpack-plain" /> {' '}
            
          </h5>
          <p style={s.pText}>twitch.show is a very simple single-page application that, unlike twitchmine, only takes into account what's currently happening on the streaming site twitch.tv. However, I built it with no boilerplate to start, and that was critical in my path of learning of react, react-router, webpack, working with APIs, and general layout practice.</p>
        </div>
      </div>
    </div>
  )
  }
}

