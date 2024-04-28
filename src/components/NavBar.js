// App.js or Navbar.js

import React, { useState } from 'react';
import SideBar from './SideBar';
import './NavBar.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="navbar">
        <button className="hamburger" onClick={toggleSidebar}>
          {/* Hamburger icon */}
        </button>
        <div className="navbar-brand">Finance Bro</div>
        {/* Other navbar links */}
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Navbar;
