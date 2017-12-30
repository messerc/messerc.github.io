const twitchMineVid = require("file-loader!./twitchminedemo.mp4");
const chattermonVid = require("file-loader!./chattermon.mov");
const inspectifyVid = require("file-loader!./Inspectify.mov");
const marsklifVid = require("file-loader!./marsklif.mov");

const projects = [
  {
    name: "twitchmine",
    source: "https://twitchmine.com",
    description:
      "twitchmine is a SPA built to understand the historical viewership trends on popular streaming site twitch.tv. I built the front-end primarily using React, Redux, and Recharts. I collaborated with a seasoned back-end developer to map out our schema and API endpoints. In its first 2 weeks, the site had over 1k unique visitors.",
    role: "co-creator and front-end designer",
    video: true,
    videoSource: twitchMineVid,
    techs: [
      "javascript-plain",
      "react-original",
      "webpack-plain",
      "rails-plain-wordmark",
      "postgresql-plain"
    ],
    noIconTechs: ["react", "redux"]
  },
  {
    name: "Chattermon",
    source: "https://chattermon-staging.herokuapp.com",
    description:
      "A browser-based pokemon battle simulator. Implemented with Socket.IO, Node / express, and React. The team mined the PokeAPI and created game logic based on real Pokemon logic (attack calculations, managing damages by type, etc).",
    video: true,
    videoSource: chattermonVid,
    imageSource: "",
    role: "front-end lead / game logic flow",
    techs: ["javascript-plain", "react-original", "webpack-plain"],
    noIconTechs: ["socket.io"]
  },
  {
    name: "Inspectify",
    source: "https://inspectify.herokuapp.com",
    description:
      "Analyze your spotify playlists and music preferences. Authenticates your account through spotify's endpoint and parses through all of your saved songs. Save your scores to be compared to other Inspectify users.",
    video: true,
    videoSource: inspectifyVid,
    imageSource: "",
    role: "creator",
    techs: [
      "javascript-plain",
      "react-original",
      "webpack-plain"
    ],
    noIconTechs: ["recharts", "node", "mongo"]
  },
  {
    name: "Marsklif",
    source: "https://markslif.herokuapp.com",
    description:
      "A searchable movie database to help users make decisions on what movie to watch, and to see their box office stats. This site was challenging because our team inherited a tightly-coupled codebase and I had to strip down the front-end to the bare necessities and re-factor into a more extendable React/Redux-based architecture.",
    video: true,
    videoSource: marsklifVid,
    imageSource: "",
    role: "front-end developer",
    techs: [
      "javascript-plain",
      "react-original",
      "webpack-plain"
    ],
    noIconTechs: ["recharts", "node", "mongo"]
  }
];

export default projects;
