import React from 'react';

const Friend = ({friends, match, setUpdate}) => {
    const friend = friends.find(thing => `${thing.id}` === match.params.id);

    if(!friends.length || !friend) {
        return <h2>Loading Friend data...</h2>
    }

    return (
        <div>
            <div>
                <h2>{friend.name}</h2>
            </div>
            <div>
                <p>{`Age: ${friend.age}`}</p>
                <p>{`Email: ${friend.email}`}</p>
            </div>
            <button onClick={e => setUpdate(e, friend)}>Update Friend</button>
        </div>
    );
}

export default Friend;