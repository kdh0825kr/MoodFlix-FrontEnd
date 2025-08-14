import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import HomeScreen from './components/HomeScreen';
import { useMood } from './hooks/useMood';

function App() {
  const {
    selectedMood,
    moodDescription,
    canRecommend,
    showHome,
    handleMoodSelect,
    handleMoodDescriptionChange,
    handleGetRecommendations,
    handleStartApp,
    handleGoHome
  } = useMood();

  return (
    <div className={`app ${!showHome ? 'home-view' : ''}`}>
      {showHome ? (
        <HomeScreen onStart={handleStartApp} />
      ) : (
        <>
          <Sidebar />
          <MainContent 
            selectedMood={selectedMood}
            moodDescription={moodDescription}
            canRecommend={canRecommend}
            onMoodSelect={handleMoodSelect}
            onMoodDescriptionChange={handleMoodDescriptionChange}
            onGetRecommendations={handleGetRecommendations}
            onGoHome={handleGoHome}
          />
        </>
      )}
    </div>
  );
}

export default App;
