const twitchMineVid = require('file-loader!./twitchminedemo.mp4');


const projects = [
  {
    name: 'twitchmine',
    source: 'https://twitchmine.com',
    description: 'twitchmine is a full-fledged single-page application built to understand the historical viewership trends on popular streaming site twitch.tv. I built the entire front-end using React, Redux, data visualization library Recharts, and other tools. I collaborated with a seasoned back-end developer to map out our CRON jobs, design the schema and our API endpoints. In its first 2 weeks, the site had over 1k unique visitors.',
    role: 'co-creator and front-end designer',
    video: true,
    videoSource: twitchMineVid,
    techs: ['javascript-plain', 'react-original', 'webpack-plain', 'rails-plain-wordmark', 'postgresql-plain'],
    noIconTechs: ['react', 'redux']
  },
  {
    name: 'chattermon',
    description: 'A browser-based pokemon battle simulator. Implemented with Socket.IO, Node / express, and React',
    video: false,
    imageSource: '',
    role: 'front-end lead / game logic flow',
    techs: ['javascript-plain', 'react-original', 'webpack-plain'],
    noIconTechs: ['socket.io']
  }
]

export default projects; 