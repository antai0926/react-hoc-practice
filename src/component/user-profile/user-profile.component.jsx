import React from 'react';
import './_user-profile.styles.scss';
import withData from '../../HOC/with-data';

const UserProfile = ({ data, name, email }) => {
  return (
    <div className="container">
      <h1 className="name"> {name} </h1>
      <h2 className="email"> {email} </h2>
      <h3>Post Counts: {data.length}</h3>
      posts:
      {data.map((post) => (
        <div className="post" key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default withData(UserProfile);
