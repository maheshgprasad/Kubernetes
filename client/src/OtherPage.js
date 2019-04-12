import React from 'react';
import { Link } from 'react-router-dom';
export default () => {
  return (
    <div>
      <p>I have a <strong>Redis Server</strong> which caches all the indices and its corresponding values that i have calculated as Key Value Pair</p>
      <br/>
      <p>Also I have a <strong>Postgres Server</strong> which stores all the indices to which i have calculated the values for.</p>
      <br />
      <Link to="/">FiboKube Home</Link>
    </div>
  );
};
