import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/about">About</Link>
      {/* Add other links */}
    </nav>
  );
}

export default Navbar;
