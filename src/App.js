import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const list = [
  {
    id: 1,
    name: "Elizabeth Warren",
    votes: 0
  },
  {
    id: 2,
    name: "Bernie Sanders",
    votes: 0
  },
  {
    id: 3,
    name: "Pete Buttigieg",
    votes: 0
  },
  {
    id: 4,
    name: "Tom Seyer",
    votes: 0
  },
  {
    id: 5,
    name: "Joe Biden",
    votes: 0
  },
  {
    id: 6,
    name: "Cory Booker",
    votes: 0
  },
  {
    id: 7,
    name: "Amy Klobuchar",
    votes: 0
  },
  {
    id: 8,
    name: "Andrew Yang",
    votes: 0
  }
];

class App extends Component {
  handleEvent = e => console.log("button clicked for " + e);

  render() {
    return list.map(person => (
      <Candidate
        key={person.id}
        name={person.name}
        votes={person.votes}
        onVote={this.handleEvent}
      />
    ));
  }
}

class Candidate extends Component {
  handleClick = () => this.props.onVote(this.props.name);

  render() {
    return (
      <div className="App">
        {this.props.name}
        <button onClick={this.handleClick}>VOTE</button>
      </div>
    );
  }
}

export default App;
