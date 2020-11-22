import React, { Component, useState } from "react";
import "../styles/App.css";
import { Router, Switch } from "react-router-dom";
import About from "./About";
import Home from "./Home";
class App extends Component {
  render() {
    return (
      <div id="main">
        <a href="./About">About</a>
        <a href="./Home">Home</a>
      </div>
    );
  }
}

export default App;
