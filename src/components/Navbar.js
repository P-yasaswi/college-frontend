// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css'; // optional for styling

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/'; // redirect to home/login
  };

  return (
    <div className="navbar">
      <div className="nav-left">
        <button onClick={() => window.location.href = '/about'}>About Us</button>
        <button onClick={() => window.location.href = '/contact'}>Contact Us</button>
      </div>
      <div className="nav-right">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
