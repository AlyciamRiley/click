import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Heading from "./components/Heading";
import friends from "./friends.json"
import './App.css';


// const Counter = () => <Counter />

const currScore = 0;
const guessedPic = [];


class App extends Component {
  state = {
    friends,
    currScore,
    guessedPic,
    message: 'Click each picture just once!'
  };

  //card is clicked
  //

  clickCard = card => {
    this.setState({ currScore: this.state.currScore + 1 });
  };

  render () {
    return (
      <Wrapper>
    <Heading title="Yass, Queen!"
    currScore= {this.state.currScore}
    message={this.state.message ? this.state.message: 'Click each picture just once!'}
    /> <br />
    {this.state.friends.map(friend => (
          <FriendCard
          clickCard={this.clickCard}
          id={friend.id}
          key={friend.id}
          name={friend.name}
          image={friend.image}
          />
        ))}
        </Wrapper>
    );
  }
}
export default App;
