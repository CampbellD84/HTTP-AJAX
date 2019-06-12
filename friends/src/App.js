import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import Friend from './components/Friend';
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
    .then(response => this.setState({friends: response.data}))
    .catch(err => console.log(err));
  }

  deleteFriend = () => {
    axios.delete('http://localhost:5000/friends')
    .then(res => this.setState({friends: res.data}))
  }

  render() {
    return (
      <div className="App">
        <h1>Friends App</h1>
        <div className="friend-area">
          <Route path="/" component={FriendsHome} />
          <Route path="/friends" render={props => <FriendsList {...props} friends={this.state.friends}/>} />
        </div>
        <FriendForm friends={this.state.friends}/>
        <Route path="/friends/:id" render={() => <Friend friends={this.props.friends}/>} />
        <NavLink to="/friends/">Friends</NavLink>
      </div>
    );
  }
}
export default App;
