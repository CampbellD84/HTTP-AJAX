import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import FriendsTable from './components/FriendsTable';
import FriendForm from './components/FriendForm';
import FriendsHome from './components/FriendsHome';
import Friend from './components/Friend';


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      activeFriend: null
    };
  }
  // 
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => this.setState({
      friends: response.data
  }))
    .catch(err => console.log(err));
  }

  addFriend = (e, friend) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/friends/`, friend)
    .then(res => {
      this.setState({
        friends: res.data
      });
      this.props.history.push("/friend-list");
  })
    .catch(err => console.log(err));
  };

  updateFriend = (evt, friend) => {
    evt.preventDefault();
    axios.put(`http://localhost:5000/friends/${friend.id}`)
    .then(res => {
      this.setState({
        activeFriend: null,
        friends: res.data
      });
      this.props.history.push("/friend-list");
    })
    .catch(err => console.log(err));
  }

  setUpdate = (evt, friend) => {
    evt.preventDefault();
    this.setState({
      activeFriend: friend
    });
    this.props.history.push("/friend-form");
  }

  deleteFriend = (evt, friend) => {
    evt.preventDefault();
    axios.delete(`http://localhost:5000/friends/${friend.id}`)
    .then(res => this.setState({friends: res.data}))
  }

  render() {
    return (
      <div className="container">
        <nav>
          <h1>FriendsList</h1>
          <div className="links">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/friend-list">
              See Friends
            </NavLink>
            <NavLink to="/friend-form">
            {`${this.state.activeItem ? "Update" : "Add"} Friend`}
            </NavLink>
          </div>
        </nav>

          <Route exact path="/" component={FriendsHome} />
          <Route 
            path="/friend-form" 
            render={props =>
              <FriendForm
                {...props}
                addFriend={this.addFriend}
                updateFriend={this.updateFriend}
                activeFriend={this.state.activeFriend} 
              />
            } 
          />
          <Route path="/friend-list" 
            render={props =>
              <FriendsTable
                {...props}
                friends={this.state.friends} 
                updateFriend={this.updateFriend}
                deleteFriend={this.deleteFriend} 
              /> 
            }
          />
          <Route path="/friend-list/:id" 
            render={props => 
              <Friend 
                {...props} 
                friends={this.state.friends} 
                setUpdate={this.setUpdate} 
              /> 
            }
          />
        </div>
    );
  }
}
export default App;
