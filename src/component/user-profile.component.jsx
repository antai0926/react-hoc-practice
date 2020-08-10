import React from 'react';
import './user-profile.styles.sass';

const UserProfile = (props) => {
  return (
    <div className="user-profile">
      <h1 className="name"> {props.name} </h1>
      <h1 className="email"> {props.email} </h1>
    </div>
  );
};

export default UserProfile;
