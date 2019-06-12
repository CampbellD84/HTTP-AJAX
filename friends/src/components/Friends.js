import React from 'react';
import Friend from './Friend';

const Friends = props => {
    return (
        <div className="friend-area">
          {props.friends.map(friend => (
            <Friend friend={friend} name={friend.name} key={friend.id}/>
          ))}
        </div>
    );
}

export default Friends;