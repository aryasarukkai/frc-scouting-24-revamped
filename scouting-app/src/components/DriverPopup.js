// DriverPopup.js
import React from 'react';

const DriverPopup = ({ formData, setFormData, handleStageChange, submitData }) => {
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
      <h2><u>Teleop Portion</u> 🕹️</h2>
      <div className="input-group">
        <label htmlFor="notes_collected_teleop">Notes Collected:</label>
        <button type="button" onClick={() => decrementValue('notesCollectedTeleop')}>-</button>
        <input
          type="number"
          id="notes_collected_teleop"
          name="notesCollectedTeleop"
          value={formData.notesCollectedTeleop}
          onChange={handleInputChange}
          min="0"
        />
        <button type="button" onClick={() => incrementValue('notesCollectedTeleop')}>+</button>
      </div>
      <div className="input-group">
        <label htmlFor="amps_played_teleop">Amps Played:</label>
        <button type="button" onClick={() => decrementValue('ampsPlayedTeleop')}>-</button>
        <input
          type="number"
          id="amps_played_teleop"
          name="ampsPlayedTeleop"
          value={formData.ampsPlayedTeleop}
          onChange={handleInputChange}
          min="0"
        />
        <button type="button" onClick={() => incrementValue('ampsPlayedTeleop')}>+</button>
      </div>
      <div className="input-group">
        <label htmlFor="unamplified_speakers_played_teleop">Unamplified Speakers Scored:</label>
        <button type="button" onClick={() => decrementValue('unamplifiedSpeakersPlayedTeleop')}>-</button>
        <input
          type="number"
          id="unamplified_speakers_played_teleop"
          name="unamplifiedSpeakersPlayedTeleop"
          value={formData.unamplifiedSpeakersPlayedTeleop}
          onChange={handleInputChange}
          min="0"
        />
        <button type="button" onClick={() => incrementValue('unamplifiedSpeakersPlayedTeleop')}>+</button>
      </div>
      <div className="input-group">
        <label htmlFor="amplified_speakers_played_teleop">Amplified Speakers Scored:</label>
        <button type="button" onClick={() => decrementValue('amplifiedSpeakersPlayedTeleop')}>-</button>
        <input
          type="number"
          id="amplified_speakers_played_teleop"
          name="amplifiedSpeakersPlayedTeleop"
          value={formData.amplifiedSpeakersPlayedTeleop}
          onChange={handleInputChange}
          min="0"
        />
        <button type="button" onClick={() => incrementValue('amplifiedSpeakersPlayedTeleop')}>+</button>
      </div>
      <div className="input-group">
        <label htmlFor="harmonized">Harmonized:</label>
        <input
          type="checkbox"
          id="harmonized"
          name="harmonized"
          checked={formData.harmonized}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="spotlight">Spotlight:</label>
        <input
          type="checkbox"
          id="spotlight"
          name="spotlight"
          checked={formData.spotlight}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="buddy_climb">Buddy Climb:</label>
        <input
          type="checkbox"
          id="buddy_climb"
          name="buddyClimb"
          checked={formData.buddyClimb}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="scored_amps">Scored Amps:</label>
        <button type="button" onClick={() => decrementValue('scoredAmps')}>-</button>
        <input
          type="number"
          id="scored_amps"
          name="scoredAmps"
          value={formData.scoredAmps}
          onChange={handleInputChange}
          min="0"
        />
        <button type="button" onClick={() => incrementValue('scoredAmps')}>+</button>
      </div>
      <div className="input-group">
        <label htmlFor="scored_speakers">Scored Speakers:</label>
        <button type="button" onClick={() => decrementValue('scoredSpeakers')}>-</button>
        <input
          type="number"
          id="scored_speakers"
          name="scoredSpeakers"
          value={formData.scoredSpeakers}
          onChange={handleInputChange}
          min="0"
        />
        <button type="button" onClick={() => incrementValue('scoredSpeakers')}>+</button>
      </div>
      <div className="input-group">
        <label htmlFor="notes">Miscellaneous Notes:</label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="buttons">
        <button onClick={() => handleStageChange('auton')}>Previous</button>
        <button onClick={submitData}>Submit</button>
      </div>
    </div>
  );
};

export default DriverPopup;