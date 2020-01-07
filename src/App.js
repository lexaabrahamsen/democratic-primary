import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const candidates = [
  {
    id: 1,
    name: "Elizabeth Warren"
  },
  {
    id: 2,
    name: "Bernie Sanders"
  },
  {
    id: 3,
    name: "Pete Buttigieg"
  },
  {
    id: 4,
    name: "Tom Seyer"
  },
  {
    id: 5,
    name: "Joe Biden"
  },
  {
    id: 6,
    name: "Cory Booker"
  },
  {
    id: 7,
    name: "Amy Klobuchar"
  },
  {
    id: 8,
    name: "Andrew Yang"
  }
];

class App extends Component {
  render() {
    return candidates.map(person => (
      <Candidate key={person.id} name={person.name} />
    ));
  }
}

class Candidate extends Component {
  render() {
    return (
      <div className="App">
        {this.props.name}{" "}
        <button onClick={console.log("button clicked")}>+</button>
      </div>
    );
  }
}

export default App;
