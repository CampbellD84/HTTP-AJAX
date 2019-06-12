import React from 'react';
import Friend from './Friend';



const FriendsList = props => {
    return (
        <div className="friend-area">
          {props.friends.map(friend => (
            <Friend friend={friend} name={friend.name} deleteFriend={props.deleteFriend} />
          ))}
        </div>
    );
}

export default FriendsList;