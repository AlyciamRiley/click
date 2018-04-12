import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json"
import './App.css';

class App extends Component {
  state = {
    friends
  };

  //card is clicked

  clickCard = card => {
    console.log("you clicked the card!");
  };

  render () {
    return (
      <Wrapper>
        <Title>Friends List </Title>
        {this.state.friends.map(friend => (
          <FriendCard
          clickCard={friend.clickCard}
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
