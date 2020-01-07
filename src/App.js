import React, { Component } from "react";
// import Firebase from "firebase";
// import config from "./config";
import logo from "./logo.svg";
import "./App.css";

const list = [
  {
    id: 1,
    name: "Elizabeth Warren",
    votes: 0,
    image:
      "https://specials-images.forbesimg.com/imageserve/1180350427/960x0.jpg?fit=scale"
  },
  {
    id: 2,
    name: "Bernie Sanders",
    votes: 0,
    image:
      "https://specials-images.forbesimg.com/imageserve/1180350427/960x0.jpg?fit=scale"
  },
  {
    id: 3,
    name: "Joe Biden",
    votes: 0,
    image:
      "https://specials-images.forbesimg.com/imageserve/1180350427/960x0.jpg?fit=scale"
  },
  {
    id: 4,
    name: "Pete Buttigieg",
    votes: 0,
    image:
      "https://specials-images.forbesimg.com/imageserve/1180350427/960x0.jpg?fit=scale"
  },
  {
    id: 5,
    name: "Andrew Yang",
    votes: 0,
    image:
      "https://specials-images.forbesimg.com/imageserve/1180350427/960x0.jpg?fit=scale"
  },
  {
    id: 6,
    name: "Amy Klobuchar",
    votes: 0,
    image:
      "https://specials-images.forbesimg.com/imageserve/1180350427/960x0.jpg?fit=scale"
  }
];

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   Firebase.intializeApp(config.firebase);
  // }

  state = {
    candidates: []
  };

  componentDidMount() {
    this.setState({ candidates: list });
  }

  handleEvent = personId => {
    const updatedList = this.state.candidates.map(person => {
      if (person.id === personId) {
        return Object.assign({}, person, {
          votes: person.votes + 1
        });
      } else {
        return person;
      }
    });

    this.setState({
      candidates: updatedList
    });
  };

  render() {
    return this.state.candidates.map(person => (
      <Candidate
        key={person.id}
        id={person.id}
        name={person.name}
        votes={person.votes}
        image={this.image}
        onVote={this.handleEvent}
      />
    ));
  }
}

class Candidate extends Component {
  handleClick = () => this.props.onVote(this.props.id);

  render() {
    return (
      <div className="App">
        <image>{this.props.image}</image>
        <h1 className="CandidateName">{this.props.name}</h1>
        <h3>{this.props.votes}</h3>
        <button className="VoteButton" onClick={this.handleClick}>
          VOTE
        </button>
      </div>
    );
  }
}

export default App;
