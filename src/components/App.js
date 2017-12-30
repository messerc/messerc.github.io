import React from "react";
import { NavLink, Link, Switch, Route, IndexRoute } from "react-router-dom";
import About from "./About";
import Header from "./Header";
import Work from "./Work";

const App = () => {
  return (
    <div>
      <Header />
      <Work />
      <About />
    </div>
  );
};

export default App;
