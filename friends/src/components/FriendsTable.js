import React from 'react';


const FriendsTable = props => {
  const friendRoute = (e, friend) => {
    e.preventDefault();
    props.history.push(`/friend-list/${friend.id}`);
  }

    return (
      <div>
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
          </thead>
          <tbody>
            {props.friends.length > 0 ? (
              props.friends.map(friend => (
                <tr key={friend.id}>
                  <td>{friend.name}</td>
                  <td>{friend.age}</td>
                  <td>{friend.email}</td>
                  <td>
                    <button onClick={e => friendRoute(e, friend)} key={friend.id}>Edit</button>
                    <button onClick={e => props.deleteFriend(e, friend)}>Delete</button>
                  </td>
                </tr>
            ))
            ): (
              <tr>
                <td colSpan={4}>No Friends</td>
              </tr>
            )}
          </tbody>
      </table>
    </div>
    );
}

export default FriendsTable;