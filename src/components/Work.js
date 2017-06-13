import React from 'react';
import s from '../styles/app.style.js'
const twitchMineVid = require('file-loader!./twitchminedemo.mp4');

export default class Work extends React.Component {

  render() {
    return (
    <div className="route-container">
      <div className="row work-row">
        <div className="col-sm-5 col-sm-offset-1">
          <video className="video" autoPlay loop >
            <source src={twitchMineVid} type="video/mp4" />
          </video>
        </div>
        <div className="col-sm-4">
          <h3>twitchmine</h3>
          <h5 className="text-muted">featured project: co-creator and front-end designer </h5>
          <h5 className="text-muted">used:{' '}       
            <span className="devicon-javascript-plain" />{' '}
            <span className="devicon-react-original" />{' '}
            <span className="devicon-webpack-plain" /> {' '}

          </h5>
          <p style={s.pText}>twitchmine is a full-fledged single page application built to understand the historical viewership trends on popular streaming site twitch.tv. From initial conception to launch, this project took about twelve months.</p>
        </div>
      </div>
       <div className="row work-row">
        <div className="col-sm-5 col-sm-offset-1">
          <video className="video" autoPlay loop >
            <source src={twitchMineVid} type="video/mp4" />
          </video>
        </div>
        <div className="col-sm-4">
          <h3>twitchmine</h3>
          <h5 className="text-muted">featured project: co-creator and front-end designer </h5>
          <h5 className="text-muted">used:{' '}       
            <span className="devicon-javascript-plain" />{' '}
            <span className="devicon-react-original" />{' '}
            <span className="devicon-webpack-plain" /> {' '}
            
          </h5>
          <p style={s.pText}>twitchmine is a full-fledged single page application built to understand the historical viewership trends on popular streaming site twitch.tv. From initial conception to launch, this project took about twelve months.</p>
        </div>
      </div>
    </div>
  )
  }
}

