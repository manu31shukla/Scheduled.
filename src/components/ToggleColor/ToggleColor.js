import React from 'react';
import './ToggleColor.css';

const ToggleColor = ({ isLightMode, onToggle }) => {
  const handleToggle = () => {
    onToggle(!isLightMode);
  };

  return (
    <div className="toggle-container">
      {/* Step 1: Create a label with the toggle-switch class */}
      <label className="toggle-switch">
        {/* Step 2: Create an input of type checkbox */}
        <input type="checkbox" checked={isLightMode} onChange={handleToggle} />
        {/* Step 3: Create a span with the slider and round classes */}
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleColor;
