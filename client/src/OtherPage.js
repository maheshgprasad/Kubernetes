import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <p>I have a database on <strong>Postgres</strong> which stores all the indices and its corresponding values that i have calculated.</p>
      <p>Also I have a <strong>Redis Server</strong> which stores all the indices to which i have calculated the values for.</p>
      <br />
      <Link to="/">Go back home</Link>
    </div>
  );
};
