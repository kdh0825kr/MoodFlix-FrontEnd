import React from 'react';
import { FaHome, FaSearch, FaPlus, FaCalendar } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="logo-section">
        <img src="/MoodFlix (Logo).png" alt="MoodFlix Logo" className="logo-image" />
      </div>
      <div className="nav-icons">
        <FaHome className="nav-icon" />
        <FaSearch className="nav-icon" />
        <FaPlus className="nav-icon" />
        <FaCalendar className="nav-icon" />
      </div>
    </nav>
  );
};

export default Sidebar;
