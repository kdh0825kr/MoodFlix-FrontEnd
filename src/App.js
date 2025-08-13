import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { useMood } from './hooks/useMood';

function App() {
  const {
    selectedMood,
    moodDescription,
    handleMoodSelect,
    handleMoodDescriptionChange,
    handleGetRecommendations
  } = useMood();

  return (
    <div className="app">
      <Sidebar />
      <MainContent 
        selectedMood={selectedMood}
        moodDescription={moodDescription}
        onMoodSelect={handleMoodSelect}
        onMoodDescriptionChange={handleMoodDescriptionChange}
        onGetRecommendations={handleGetRecommendations}
      />
    </div>
  );
}

export default App;
