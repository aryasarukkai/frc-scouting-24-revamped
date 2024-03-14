import React from 'react';

const AutonPopup = ({
  formData,
  handleInputChange,
  incrementValue,
  decrementValue,
  handleNextPopup,
  handlePrevPopup,
}) => {
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
        <label className="checkmark" htmlFor="preload_scored"></label>
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

      <button onClick={handlePrevPopup}>Previous</button>
      <button onClick={handleNextPopup}>Next</button>
    </div>
  );
};

export default AutonPopup;