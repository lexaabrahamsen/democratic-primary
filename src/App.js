import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return <Candidate name="John Lennon" />;
  }
}

class Candidate extends Component {
  render() {
    return <div className="App">{this.props.name}</div>;
  }
}

export default App;
