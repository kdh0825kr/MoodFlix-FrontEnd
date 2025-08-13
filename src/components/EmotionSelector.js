import React from 'react';
import { emotions } from '../constants/emotions';
import './EmotionSelector.css';

const EmotionSelector = ({ selectedMood, onMoodSelect }) => {
  return (
    <div className="emotion-section">
      <h2 className="emotion-title">지금 기분이 어떠신가요?</h2>
      <div className="emotion-grid">
        {emotions.map((emotion) => {
          const IconComponent = emotion.icon;
          return (
            <button
              key={emotion.id}
              className={`emotion-btn ${selectedMood === emotion.id ? 'selected' : ''}`}
              onClick={() => onMoodSelect(emotion.id)}
              style={{
                borderColor: selectedMood === emotion.id ? emotion.color : 'transparent'
              }}
            >
              <IconComponent className="emotion-icon" />
              <span className="emotion-text">{emotion.text}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default EmotionSelector;
