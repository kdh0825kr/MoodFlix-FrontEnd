import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import './RecommendButton.css';

const RecommendButton = ({ disabled = false }) => {
  return (
    <div className="action-section">
      <button 
        className="recommend-btn"
        type="submit"
        disabled={disabled}
      >
        영화 추천받기
        <FaStar className="star-icon" />
      </button>
    </div>
  );
};

RecommendButton.propTypes = {
  disabled: PropTypes.bool,
};

export default RecommendButton;
