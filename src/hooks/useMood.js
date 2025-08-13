import { useState, useCallback, useMemo } from 'react';

export const useMood = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodDescription, setMoodDescription] = useState('');

  const handleMoodSelect = useCallback((moodId) => {
    setSelectedMood(moodId);
  }, []);

  const handleMoodDescriptionChange = useCallback((description) => {
    setMoodDescription(description);
  }, []);

  const canRecommend = useMemo(
    () => Boolean(selectedMood || moodDescription.trim()),
    [selectedMood, moodDescription]
  );

  const handleGetRecommendations = useCallback(() => {
    if (canRecommend) {
      // TODO: 실제 API 호출로 교체
      console.log('Selected mood:', selectedMood);
      console.log('Mood description:', moodDescription);
      alert('영화 추천을 준비 중입니다...');
      // 여기에 실제 추천 로직을 구현할 수 있습니다
    } else {
      alert('감정을 선택하거나 기분을 설명해주세요!');
    }
  }, [canRecommend, selectedMood, moodDescription]);

  return {
    selectedMood,
    moodDescription,
    canRecommend,
    handleMoodSelect,
    handleMoodDescriptionChange,
    handleGetRecommendations
  };
};
