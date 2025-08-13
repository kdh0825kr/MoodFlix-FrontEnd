import React from 'react';
import PropTypes from 'prop-types';
import EmotionSelector from './EmotionSelector';
import MoodInput from './MoodInput';
import RecommendButton from './RecommendButton';
import './MainContent.css';

const MainContent = ({ 
  selectedMood, 
  moodDescription, 
  onMoodSelect, 
  onMoodDescriptionChange, 
  onGetRecommendations 
}) => {
  return (
    <main className="main-content" aria-labelledby="main-title">
      <div className="content-card">
        {/* 메인 타이틀 섹션 */}
        <div className="title-section">
          <h1 id="main-title" className="main-title">당신의 감정을 영화로</h1>
          <p className="subtitle">오늘의 기분에 맞는 완벽한 영화를 찾아보세요</p>
        </div>

        {/* 감정 선택 섹션 */}
        <EmotionSelector 
          selectedMood={selectedMood} 
          onMoodSelect={onMoodSelect} 
        />

        {/* 텍스트 입력 필드 */}
        <MoodInput 
          value={moodDescription} 
          onChange={onMoodDescriptionChange} 
        />

        {/* 추천 버튼 */}
        <RecommendButton onClick={onGetRecommendations} />
      </div>
    </main>
  );
};

MainContent.propTypes = {
  selectedMood: PropTypes.string,
  moodDescription: PropTypes.string.isRequired,
  onMoodSelect: PropTypes.func.isRequired,
  onMoodDescriptionChange: PropTypes.func.isRequired,
  onGetRecommendations: PropTypes.func.isRequired,
};

export default MainContent;
