import React, { Component } from 'react';
import axios from 'axios';

import Friend from './components/Friend';
import FriendForm from './components/FriendForm';


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  // 
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => this.setState({friends: response.data}))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Friends App</h1>
        <div className="friend-area">
          {this.state.friends.map(friend => (
            <Friend friend={friend} key={friend.id}/>
          ))}
        </div>
        <FriendForm friends={this.state.friends}/>
      </div>
    );
  }
}
export default App;
