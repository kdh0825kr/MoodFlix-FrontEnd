import React, { useState } from 'react';
import PropTypes from 'prop-types';
import KakaoLogin from './KakaoLogin';
import './HomeScreen.css';

const HomeScreen = ({ onStart }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const handleLoginSuccess = (data) => {
    setIsLoggedIn(true);
    setUserInfo(data);
    console.log('로그인 성공:', data);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserInfo(null);
    // 카카오 액세스 토큰 제거
    if (window.Kakao && window.Kakao.Auth.getAccessToken()) {
      window.Kakao.Auth.logout();
    }
  };

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

        {/* 로그인 상태에 따른 조건부 렌더링 */}
        {!isLoggedIn ? (
          <div className="login-section">
            <KakaoLogin onLoginSuccess={handleLoginSuccess} />
            <p className="login-description">
              카카오 계정으로 간편하게 로그인하고 개인화된 영화 추천을 받아보세요
            </p>
          </div>
        ) : (
          <div className="user-section">
            <div className="user-info">
              <span className="user-welcome">안녕하세요, {userInfo?.name || '사용자'}님!</span>
              <button className="logout-button" onClick={handleLogout}>
                로그아웃
              </button>
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
          </div>
        )}

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
