import React from 'react';
import PropTypes from 'prop-types';
import './MoodInput.css';

const MoodInput = ({ id, label, value, onChange }) => {
  return (
    <div className="input-section">
      <label htmlFor={id} className="sr-only">{label}</label>
      <input
        id={id}
        type="text"
        className="mood-input"
        placeholder="더 자세히 오늘의 기분을 알려주세요... 예: 오늘 너무 기분이 좋아 짱이야 행복해"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
      />
    </div>
  );
};

MoodInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MoodInput;
