import React, { useState, useEffect } from 'react';
import './user-list.styles.scss';

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.slice(0, 3)));
  }, []);
  return (
    <div className="container user-list">
      <h3>Users Counts: {users.length}</h3>
      User List:
      {users.map((user) => (
        <div className="post" key={user.id}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
