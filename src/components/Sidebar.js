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
        <button className="nav-icon" aria-label="홈">
          <FaHome />
        </button>
        <button className="nav-icon" aria-label="검색">
          <FaSearch />
        </button>
        <button className="nav-icon" aria-label="추가">
          <FaPlus />
        </button>
        <button className="nav-icon" aria-label="캘린더">
          <FaCalendar />
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
