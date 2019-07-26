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
        if(this.props.activeFriend && prevProps.activeFriend !== this.props.activeFriend) {
            this.setState({
                friend: this.props.activeFriend
            });
        }
    }

    handleChange = event => {
        event.persist();
        let value = event.target.value;

        this.setState(prevState => ({
            friend: {
            ...prevState.friend,
            [event.target.name]: value
        }
        }));
        // this.setState({
        //     [event.target.name]: event.target.value,
        //     [event.target.age]: event.target.value,
        //     [event.target.email]: event.target.value
        // });
    }

    

    handleSubmit = event => {
        if(this.props.activeFriend) {
            this.props.updateFriend(event, this.state.friend);
        } else {
            this.props.addFriend(event, this.state.friend);
        }
        this.setState({
            name: '',
            age: '',
            email: ''
        });
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
                        value={this.state.friend.name}
                    />
                    <label>Age</label>
                    <input 
                        type="text" 
                        name="age" 
                        onChange={this.handleChange}
                        value={this.state.friend.age}
                    />
                    <label>Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    onChange={this.handleChange}
                    value={this.state.friend.email}
                    />
                    <button type="submit">{`${
            this.props.activeFriend ? "Update" : "Add New"
          } Friend `}</button>
                </form>
            </div>
        );
    }
}

export default FriendForm;