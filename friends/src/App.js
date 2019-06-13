import React, { Component } from 'react';
import axios from 'axios';


import FriendsList from './components/FriendsList';
import FriendsHome from './components/FriendsHome';
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
    .then(response => this.setState({
      friends: response.data,
    id: response.data.id
  }))
    .catch(err => console.log(err));
  }

  deleteFriend = () => {
    axios.delete(`http://localhost:5000/friends/$`)
    .then(res => this.setState({friends: res.data}))
  }

  render() {
    return (
      <div className="App">
        <h1>Friends App</h1>
        <div className="friend-area">
          <FriendsHome />
          <FriendsList 
            friends={this.state.friends} 
            deleteFriend={this.deleteFriend} 
            id={this.state.id}
          />
        </div>
        <FriendForm friends={this.state.friends}/>
      </div>
    );
  }
}
export default App;
