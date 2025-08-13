import React from 'react';
import PropTypes from 'prop-types';
import EmotionSelector from './EmotionSelector';
import MoodInput from './MoodInput';
import RecommendButton from './RecommendButton';
import './MainContent.css';

const MainContent = ({ 
  selectedMood, 
  moodDescription, 
  canRecommend,
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

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onGetRecommendations();
          }}
        >
          {/* 텍스트 입력 필드 */}
          <MoodInput
            id="mood-description"
            label="오늘의 기분 설명"
            value={moodDescription}
            onChange={onMoodDescriptionChange}
          />

          {/* 추천 버튼 */}
          <RecommendButton disabled={!canRecommend} />
        </form>
      </div>
    </main>
  );
};

MainContent.propTypes = {
  selectedMood: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  moodDescription: PropTypes.string.isRequired,
  canRecommend: PropTypes.bool.isRequired,
  onMoodSelect: PropTypes.func.isRequired,
  onMoodDescriptionChange: PropTypes.func.isRequired,
  onGetRecommendations: PropTypes.func.isRequired,
};

MainContent.defaultProps = {
  selectedMood: null,
};

export default MainContent;
