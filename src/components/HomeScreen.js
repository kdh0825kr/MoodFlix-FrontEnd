import React from 'react';
import PropTypes from 'prop-types';
import './HomeScreen.css';

const HomeScreen = ({ onStart }) => {
  return (
    <div className="home-screen">
      <div className="home-content">
        <div className="logo-section">
          <img 
            src="/MoodFlix (Logo).png" 
            alt="MoodFlix Logo" 
            className="home-logo"
          />
        </div>
        
        <div className="welcome-section">
          <h1 className="welcome-title">MoodFlix에 오신 것을 환영합니다</h1>
          <p className="welcome-subtitle">
            당신의 기분에 맞는 완벽한 영화를 찾아보세요
          </p>
          <p className="welcome-description">
            감정을 선택하고 기분을 설명하면, AI가 당신에게 딱 맞는 영화를 추천해드립니다.
          </p>
        </div>

        <div className="action-section">
          <button 
            className="start-button"
            onClick={onStart}
            aria-label="MoodFlix 시작하기"
          >
            시작하기
          </button>
        </div>

        <div className="features-section">
          <div className="feature-item">
            <span className="feature-icon">🎭</span>
            <span className="feature-text">감정 기반 추천</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🎬</span>
            <span className="feature-text">맞춤형 영화</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✨</span>
            <span className="feature-text">AI 분석</span>
          </div>
        </div>
      </div>
    </div>
  );
};

HomeScreen.propTypes = {
  onStart: PropTypes.func.isRequired,
};

export default HomeScreen;
