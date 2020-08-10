import React from 'react';
import './user-list.styles.scss';
import withData from '../../HOC/with-data';

const UserList = ({ data }) => {
  return (
    <div className="container user-list">
      <h3>Users Counts: {data.length}</h3>
      User List:
      {data.map((user) => (
        <div className="post" key={user.id}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default withData(UserList);
