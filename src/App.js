import React, { useState } from 'react';
import EventForm from './components/EventForm/EventForm';
import ToggleColor from './components/ToggleColor/ToggleColor';
import './App.css';

const App = () => {
  // Step 1: Define state for light mode
  const [isLightMode, setIsLightMode] = useState(false);

  // Step 2: Define function to toggle light mode
  const toggleLightMode = () => {
    // Step 3: Update the light mode state
    setIsLightMode(prevMode => !prevMode);
  };

  // Step 4: Render the App component
  return (
    <div className={`app-container ${isLightMode ? 'light-mode' : ''}`}>
      {/* Step 5: Render the ToggleColor component */}
      <ToggleColor isLightMode={isLightMode} onToggle={toggleLightMode} />
      {/* Step 6: Render the EventForm component */}
      <EventForm />
    </div>
  );
};

export default App;
