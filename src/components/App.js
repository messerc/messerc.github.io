import React from "react";
import { NavLink, Link, Switch, Route, IndexRoute } from "react-router-dom";
import Header from "./Header";
import Work from "./Work";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Work />
    </div>
  );
};

export default App;
