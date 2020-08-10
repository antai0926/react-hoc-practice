import React, { useEffect, useState } from 'react';
import './user-profile.styles.scss';

const UserProfile = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 3)));
  }, []);

  return (
    <div className="container">
      <h1 className="name"> {props.name} </h1>
      <h2 className="email"> {props.email} </h2>
      <h3>Post Counts: {posts.length}</h3>
      posts:
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default UserProfile;
