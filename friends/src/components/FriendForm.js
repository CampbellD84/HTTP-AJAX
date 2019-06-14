import React, { Component } from 'react';

class FriendForm extends Component {
        state = {
            friend: this.props.activeFriend || {
                name: '',
                age: '',
                email: ''
            }
        };
    

    componentDidUpdate(prevProps) {
        if(this.props.activeFriend && prevProps.activeFriend != this.props.activeFriend) {
            this.setState({
                friend: this.props.activeFriend
            });
        }
    }

    handleChange = event => {
        event.preventDefault();
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
        if(this.props.activeFriend) {
            this.props.updateFriend(event, friend);
        } else {
            this.props.addFriend(event, friend);
        }
    }


    render() {
        return (
            <div className="friend-form">
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input 
                        name="name" 
                        type="text" 
                        onChange={this.handleChange}
                        value={this.state.name}
                    />
                    <label>Age</label>
                    <input 
                        type="text" 
                        name="age" 
                        onChange={this.handleChange}
                        value={this.state.age}
                    />
                    <label>Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    onChange={this.handleChange}
                    value={this.state.email}
                    />
                    <button type="submit">{`${
            this.state.activeItem ? "Update" : "Add New"
          } Friend `}</button>
                </form>
            </div>
        );
    }
}

export default FriendForm;