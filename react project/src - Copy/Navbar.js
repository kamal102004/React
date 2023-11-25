// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Import your stylesheet

const Navbar = ({ authenticated, handleLogout }) => {
  return (
    <nav className='nav'>
      <ul>
        <li className='q'><h2>STUDENT INFORMATION MANAGEMENT SYSTEM</h2></li>
      </ul>
      <ul>
        {!authenticated && (
          <>
            <li><Link className='link' to="/login">Login</Link></li>
            <li><Link className='link'to="/signup">Signup</Link></li>
          </>
        )}
        {authenticated && (
          <>
            <li><Link className='link'to="/home">Home</Link></li>
            <li><button className='logout' onClick={handleLogout}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
