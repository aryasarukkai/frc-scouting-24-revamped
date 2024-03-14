import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Auton = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    preloadScored: false,
    notesCollectedAuton: 0,
    ampsPlayedAuton: 0,
    speakersPlayedAuton: 0,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const incrementValue = (field) => {
    setFormData((prevData) => ({ ...prevData, [field]: prevData[field] + 1 }));
  };

  const decrementValue = (field) => {
    setFormData((prevData) => ({ ...prevData, [field]: prevData[field] - 1 }));
  };

  const handleSubmit = () => {
    // Store form data in a global state or pass it to the next component
    history.push('/teleop');
  };

  return (
    <div>
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
      <button onClick={handleSubmit}>Switch to Teleop</button>
    </div>
  );
};

export default Auton;