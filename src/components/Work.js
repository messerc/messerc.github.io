import React from 'react';
import s from '../styles/app.style.js'

export const Work = () => {
  return (
    <div className="row route-container">
      <div className="row work-row">
      <div className="col-sm-5 col-sm-offset-1">
      <video className="video" autoPlay loop>
        <source src="http://i.imgur.com/m1BfwNm.mp4" type="video/mp4" />
      </video>
      </div>
      <div className="col-sm-5">
        <h3>twitchmine</h3>
        <h5 className="text-muted">featured project: co-creator and front-end designer </h5>
        <p style={s.pText}>This is my baby. I didn't use this project solely as a way to learn how to code, I learned how to code to build this site. I put nearly a year into this project from start to finish, from initial thoughts to 1.0 launch.</p>
        <p style={s.pText}>One key note is that I worked with a long-time friend and professional developer throughout the duration of this project to make my vision a reality. On top of gaining better fundamentals with React, Redux, and Data Visualization / Design, I learned how to code with someone else and go through code reviews. These were the most valuable lessons learned in the months of developing this.</p>
      </div>
      </div>
    </div>
  )
}

export default Work