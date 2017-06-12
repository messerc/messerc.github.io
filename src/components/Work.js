import React from 'react';
import s from '../styles/app.style.js'

export const Work = () => {
  return (
    <div className="row">
      <div className="col-xs-10 col-xs-offset-1">
      <h3>Featured Project: twitchmine </h3>
      <video style={s.gif} autoPlay loop>
        <source src="http://i.imgur.com/m1BfwNm.mp4" type="video/mp4" />
      </video>
      </div>
    </div>
  )
}

export default Work