import React, { useState } from 'react';
import EventForm from './components/EventForm/EventForm';
import ToggleColor from './components/ToggleColor/ToggleColor';
import './App.css';

const App = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleLightMode = () => {
    setIsLightMode(prevMode => !prevMode);
  };

  return (
    <div className={`app-container ${isLightMode ? 'light-mode' : ''}`}>
      <ToggleColor isLightMode={isLightMode} onToggle={toggleLightMode} />
      <div className={`content-container ${isLightMode ? 'light-mode' : ''}`}>
        <EventForm />
      </div>
    </div>
  );
};

export default App;
