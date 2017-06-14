import React from 'react';
import s from '../styles/app.style.js'
const twitchMineVid = require('file-loader!./twitchminedemo.mp4');

export default class About extends React.Component {

  render() {
    return (
    <div className="route-container">
      <div className="row work-row">
        <div className="col-sm-6 col-sm-offset-3">
        <p>I grew up in Massachusetts and moved out to San Francisco in 2017. Currently, I love using javascript and the tools / frameworks built by the community to create great experiences. In my former life, I was a psuedo-professional online gamer (I signed a contract that was e-mailed to me in a pdf, so it was pretty serious). 
        </p>
        <p>If you'd like to chat, send me an <a href="mailto:messer.chr@gmail.com">e-mail</a></p>
        </div>
      </div>
    </div>
  )
  }
}

