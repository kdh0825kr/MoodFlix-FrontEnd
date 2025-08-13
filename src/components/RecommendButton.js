import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import './RecommendButton.css';

const RecommendButton = ({ onClick }) => {
  return (
    <div className="action-section">
      <button 
        className="recommend-btn"
        onClick={onClick}
      >
        영화 추천받기
        <FaStar className="star-icon" />
      </button>
    </div>
  );
};

RecommendButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RecommendButton;
