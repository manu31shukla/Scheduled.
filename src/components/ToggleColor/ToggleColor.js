import React from 'react';
import './ToggleColor.css';

const ToggleColor = ({ isLightMode, onToggle }) => {
  const handleToggle = () => {
    onToggle(!isLightMode);
  };

  return (
    <div className="toggle-container">
      <label className="toggle-switch">
        <input type="checkbox" checked={isLightMode} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleColor;
