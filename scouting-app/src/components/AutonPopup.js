// AutonPopup.js
import React from 'react';

const AutonPopup = ({ formData, setFormData, handleStageChange }) => {
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : parseInt(value, 10);
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const incrementValue = (field) => {
    setFormData((prevData) => ({ ...prevData, [field]: prevData[field] + 1 }));
  };

  const decrementValue = (field) => {
    setFormData((prevData) => ({ ...prevData, [field]: Math.max(prevData[field] - 1, 0) }));
  };

  return (
    <div className="popup">
      <h2><u>Autonomous Portion</u> 🚀</h2>
      <div className="input-group">
        <label htmlFor="preload_scored">Preload Scored:</label>
        <input
          type="checkbox"
          id="preload_scored"
          name="preloadScored"
          checked={formData.preloadScored}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="notes_collected_auton">Notes Collected:</label>
        <button type="button" onClick={() => decrementValue('notesCollectedAuton')}>-</button>
        <input
          type="number"
          id="notes_collected_auton"
          name="notesCollectedAuton"
          value={formData.notesCollectedAuton}
          onChange={handleInputChange}
          min="0"
        />
        <button type="button" onClick={() => incrementValue('notesCollectedAuton')}>+</button>
      </div>
      <div className="input-group">
        <label htmlFor="amps_played_auton">Amps Played:</label>
        <button type="button" onClick={() => decrementValue('ampsPlayedAuton')}>-</button>
        <input
          type="number"
          id="amps_played_auton"
          name="ampsPlayedAuton"
          value={formData.ampsPlayedAuton}
          onChange={handleInputChange}
          min="0"
        />
        <button type="button" onClick={() => incrementValue('ampsPlayedAuton')}>+</button>
      </div>
      <div className="input-group">
        <label htmlFor="speakers_played_auton">Speakers Scored:</label>
        <button type="button" onClick={() => decrementValue('speakersPlayedAuton')}>-</button>
        <input
          type="number"
          id="speakers_played_auton"
          name="speakersPlayedAuton"
          value={formData.speakersPlayedAuton}
          onChange={handleInputChange}
          min="0"
        />
        <button type="button" onClick={() => incrementValue('speakersPlayedAuton')}>+</button>
      </div>
      <div className="buttons">
        <button onClick={() => handleStageChange('setup')}>Previous</button>
        <button onClick={() => handleStageChange('driver')}>Next</button>
      </div>
    </div>
  );
};

export default AutonPopup;
