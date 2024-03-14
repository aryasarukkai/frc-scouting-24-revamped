// SetupPopup.js
import React from 'react';

const SetupPopup = ({ setFormData, handleStageChange }) => {
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  return (
    <div className="popup">
      <h2>Setup 🚀</h2>
      <div className="input-group">
        <label htmlFor="scout_name">Scout Name:</label>
        <input
          type="text"
          id="scout_name"
          name="scoutName"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="match_number">Match Number:</label>
        <input
          type="number"
          id="match_number"
          name="matchNumber"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="team_number">Team Number:</label>
        <input
          type="number"
          id="team_number"
          name="teamNumber"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="alliance_color">Alliance Color:</label>
        <select name="allianceColor" id="alliance_color" onChange={handleInputChange} required>
          <option value="">Select Color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
        </select>
      </div>
      <div className="buttons">
        <button onClick={() => handleStageChange('auton')}>Next: Autonomous</button>
      </div>
    </div>
  );
};

export default SetupPopup;
