import React, { Component } from "react";
// import Firebase from "firebase";
// import config from "./config";
// import logo from "./logo.svg";
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
    name: "Joe Biden",
    votes: 0
  },
  {
    id: 4,
    name: "Pete Buttigieg",
    votes: 0
  },
  {
    id: 5,
    name: "Andrew Yang",
    votes: 0
  },
  {
    id: 6,
    name: "Amy Klobuchar",
    votes: 0
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
        onVote={this.handleEvent}
      />
    ));
  }
}

class Candidate extends Component {
  handleClick = () => this.props.onVote(this.props.id);

  render() {
    return (
      <div class="card">
        <div class="card__image-container">
          <img
            class="card__image"
            src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80"
            alt=""
          />
        </div>

        <svg class="card__svg" viewBox="0 0 800 500">
          <path
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
            stroke="transparent"
            fill="#333"
          />
          <path
            class="card__line"
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
            stroke="pink"
            stroke-width="3"
            fill="transparent"
          />
        </svg>

        <div class="card__content">
          <h1 class="card__title">Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            dolor praesentium at quod autem omnis, amet eaque unde perspiciatis
            adipisci possimus quam facere illo et quisquam quia earum nesciunt
            porro.
            <h1>{this.props.name}</h1>
            <h3>{this.props.votes}</h3>
            <button className="VoteButton" onClick={this.handleClick}>
              VOTE
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
