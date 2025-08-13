import React from 'react';
import PropTypes from 'prop-types';
import './MoodInput.css';

const MoodInput = ({ value, onChange }) => {
  return (
    <div className="input-section">
      <input
        type="text"
        className="mood-input"
        placeholder="더 자세히 오늘의 기분을 알려주세요... 예: 오늘 너무 기분이 좋아 짱이야 행복해"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

MoodInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MoodInput;
