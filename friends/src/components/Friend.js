import React from 'react';

const Friend = props => {
    return(
        <div className="friend">
            <h2>{`Name: ${props.friend.name}`}</h2>
            <h3>{`Age: ${props.friend.age}`}</h3>
            <h3>{`Email: ${props.friend.email}`}</h3>
            <button>Delete Friend</button>
        </div>
    );
}

export default Friend;