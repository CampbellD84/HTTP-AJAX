import React, { Component } from 'react';
import axios from 'axios';

class FriendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.age]: event.target.value,
            [event.target.email]: event.target.value
        });
    }
    

    handleSubmit = event => {
        event.preventDefault();
        const friend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        };

        axios.post(`http://localhost:5000/friends/`, {...friend})
        .then(res => this.setState({friends: res.data}))
        .catch(err => console.log(err));
    }


    render() {
        return (
            <div className="friend-form">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                    <input name="name" type="text" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Age
                    <input type="text" name="age" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Email
                    <input type="email" name="email" onChange={this.handleChange}/>
                    </label>
                    <button type="submit">Add Friend</button>
                </form>
            </div>
        );
    }
}

export default FriendForm;