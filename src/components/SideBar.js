import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'; // Make sure to create and link the CSS file

const Sidebar = ({ isOpen, setSidebarOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <nav>
        <ul>
          <li><Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link></li>
          <li><Link to="/investments" onClick={() => setSidebarOpen(false)}>Investments</Link></li>
          <li><Link to="/savings" onClick={() => setSidebarOpen(false)}>Savings</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
