import React, { Component, useState } from "react";
import "../styles/App.css";
import { Route, Switch, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import LocatioDisplay from "./LocationDisplay";

class App extends Component {
  render() {
    return (
      <div id="main">
        <LocatioDisplay />
        <Link to="/About">About</Link>
        <Link to="/">Home</Link>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <div>No Match</div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
