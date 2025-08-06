import React, { useState } from 'react';
import './App.css';
import { FaHome, FaSearch, FaPlus, FaCalendar, FaStar, FaHeart, FaHeartBroken } from 'react-icons/fa';
import { GiPeaceDove } from 'react-icons/gi';
import { BsEmojiSmile, BsEmojiFrown, BsEmojiSunglasses } from 'react-icons/bs';

function App() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodDescription, setMoodDescription] = useState('');

  const emotions = [
    { id: 'happy', icon: BsEmojiSmile, text: '행복해요', color: '#FFD700' },
    { id: 'sad', icon: BsEmojiFrown, text: '슬퍼요', color: '#87CEEB' },
    { id: 'excited', icon: BsEmojiSunglasses, text: '신나요', color: '#FF6B6B' },
    { id: 'peaceful', icon: GiPeaceDove, text: '평온해요', color: '#98FB98' },
    { id: 'romantic', icon: FaHeart, text: '로맨틱해요', color: '#FF69B4' },
    { id: 'anxious', icon: FaHeartBroken, text: '불안해요', color: '#DDA0DD' }
  ];

  const handleMoodSelect = (moodId) => {
    setSelectedMood(moodId);
  };

  const handleGetRecommendations = () => {
    if (selectedMood || moodDescription.trim()) {
      alert('영화 추천을 준비 중입니다...');
      // 여기에 실제 추천 로직을 구현할 수 있습니다
    } else {
      alert('감정을 선택하거나 기분을 설명해주세요!');
    }
  };

  return (
    <div className="app">
      {/* 왼쪽 네비게이션 바 */}
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

      {/* 메인 콘텐츠 */}
      <main className="main-content">
        <div className="content-card">
          {/* 메인 타이틀 섹션 */}
          <div className="title-section">
            <h1 className="main-title">당신의 감정을 영화로</h1>
            <p className="subtitle">오늘의 기분에 맞는 완벽한 영화를 찾아보세요</p>
          </div>

          {/* 감정 선택 섹션 */}
          <div className="emotion-section">
            <h2 className="emotion-title">지금 기분이 어떠신가요?</h2>
            <div className="emotion-grid">
              {emotions.map((emotion) => {
                const IconComponent = emotion.icon;
                return (
                  <button
                    key={emotion.id}
                    className={`emotion-btn ${selectedMood === emotion.id ? 'selected' : ''}`}
                    onClick={() => handleMoodSelect(emotion.id)}
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

          {/* 텍스트 입력 필드 */}
          <div className="input-section">
            <input
              type="text"
              className="mood-input"
              placeholder="더 자세히 오늘의 기분을 알려주세요... 예: 오늘 너무 기분이 좋아 짱이야 행복해"
              value={moodDescription}
              onChange={(e) => setMoodDescription(e.target.value)}
            />
          </div>

          {/* 추천 버튼 */}
          <div className="action-section">
            <button 
              className="recommend-btn"
              onClick={handleGetRecommendations}
            >
              영화 추천받기
              <FaStar className="star-icon" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
