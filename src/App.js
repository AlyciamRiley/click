import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import Counter from "./components/Counter";
import friends from "./friends.json"
import './App.css';


// const Counter = () => <Counter />

let currScore = 0;

class App extends Component {
  state = {
    friends,
    currScore, 
  };

  //card is clicked

  clickCard = card => {
    this.setState({ currScore: this.state.currScore + 1 });
  };

  render () {
    return (
      <Wrapper>
        <Title>Friends List </Title>
        <p>{this.state.currScore}</p>
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
