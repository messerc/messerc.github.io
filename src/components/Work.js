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
            <source src={twitchMineVid} type="video/mp4"  />
          </video>
          </a>
        </div>
        <div className="col-sm-4">
          <h3>twitchmine</h3>
          <h5><strong>featured project</strong></h5>
          <h5 className="text-muted">co-creator and front-end designer </h5>
          <h5 className="text-muted">built with:{' '}   
            <span className="fa fa-gitlab" />{' '}    
            <span className="devicon-javascript-plain" />{' '}
            <span className="devicon-react-original" />{' '}
            <span className="devicon-webpack-plain" /> {' '}
            <span className="devicon-rails-plain-wordmark" />{' '}
            <span className="devicon-postgresql-plain" />{' '}
            <span style={{fontSize: '10px'}}>redux, recharts</span>
          </h5>
          <p style={s.pText}>twitchmine is a full-fledged single-page application built to understand the historical viewership trends on popular streaming site twitch.tv. I built the entire front-end using React, Redux, data visualization library Recharts, and other tools. I collaborated with a seasoned back-end developer to map out our CRON jobs, design the schema and our API endpoints. In its first 2 weeks, the site had over 1k unique visitors.</p>
        </div>
      </div>
       <div className="row work-row">
        <div className="col-sm-5 col-sm-offset-1">
          <a href="http://twitch.show">
          <img className="video" src="https://i.imgur.com/o74QbNP.png" />
          </a>
        </div>
        <div className="col-sm-4">
          <h3>twitch.show</h3>
          <h5 className="text-muted">creator</h5>
          <h5 className="text-muted">built with:{' '}  
            <span className="fa fa-github" />{' '}     
            <span className="devicon-javascript-plain" />{' '}
            <span className="devicon-react-original" />{' '}
            <span className="devicon-webpack-plain" /> {' '}
            
          </h5>
          <p style={s.pText}>twitch.show is a very simple single-page application that, unlike twitchmine, only takes into account what's currently happening on the streaming site twitch.tv. However, I built it with no boilerplate to start, and that was critical in my path of learning of react, react-router, webpack, working with APIs, and general layout practice.</p>
        </div>
      </div>
      <div className="row work-row">
        <div className="col-sm-5 col-sm-offset-1">
          <a href="http://github.com/messerc/jawa">
          <img className="video" src="https://i.imgur.com/ySSnmnz.png" />
          </a>
        </div>
        <div className="col-sm-4">
          <h3>just another weather app (WIP)</h3>
          <h5 className="text-muted">creator</h5>
          <h5 className="text-muted">built with:{' '}  
            <span className="fa fa-github" />{' '}     
            <span className="devicon-javascript-plain" />{' '}
            <span className="devicon-react-original" />{' '}
            <span className="devicon-webpack-plain" /> {' '}
            
          </h5>
          <p style={s.pText}>"just another weather app" was a lot of fumbling around. I learned a lot of javascript, react, data viz, basic forms, working with multiple APIs and chaining AJAX calls. It got messy quickly, and it was during this project that I saw the light / need for redux.</p>
        </div>
      </div>
      <div className="row work-row">
        <div className="col-sm-5 col-sm-offset-1">
          <a href="http://messerc.github.io/twitchnow">
          <img className="video" src="https://i.imgur.com/JMw6XQp.png" />
          </a>
        </div>
        <div className="col-sm-4">
          <h3>twitch.now</h3>
          <h5 className="text-muted">creator</h5>
          <h5 className="text-muted">built with:{' '}  
            <span className="fa fa-github" />{' '}     
            <span className="devicon-javascript-plain" />{' '}
            <span className="devicon-d3js-plain" />{' '}
            <span className="devicon-jquery-plain" /> {' '}
            
          </h5>
          <p style={s.pText}>twitch.now was the very first site that I built, and it was all in a single, messy JS file. I used vanilla JS, d3, jQuery, and some elbow grease to put together something I was proud of. I of course revisited this site / idea (see: twitch.show) and re-built it.</p>
        </div>
      </div>
    </div>
  )
  }
}

