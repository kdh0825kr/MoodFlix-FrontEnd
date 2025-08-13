import React from 'react';
import { FaStar } from 'react-icons/fa';
import './RecommendButton.css';

const RecommendButton = () => {
  return (
    <div className="action-section">
      <button 
        className="recommend-btn"
        type="submit"
      >
        영화 추천받기
        <FaStar className="star-icon" />
      </button>
    </div>
  );
};

export default RecommendButton;
