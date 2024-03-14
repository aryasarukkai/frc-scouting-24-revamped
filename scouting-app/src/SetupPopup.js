import React from 'react';

const SetupPopup = ({ formData, handleInputChange, handleNextPopup }) => {
  return (
    <div className="popup">
      <h2><u>Setup</u> 🚀</h2>

      <div className="input-group">
        <label htmlFor="reload-button">Update App:</label>
        <button id="reload-button" onClick={() => {
          if ('serviceWorker' in navigator) {
            caches.keys().then(function (cacheNames) {
              cacheNames.forEach(function (cacheName) {
                caches.delete(cacheName);
              });
            });
          }
          window.location.reload(true);
        }}>Reload App</button>
      </div>

      <div className="input-group">
        <label htmlFor="scout_name">Scout Name:</label>
        <input
          type="text"
          id="scout_name"
          name="scoutName"
          value={formData.scoutName}
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
          value={formData.matchNumber}
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
          value={formData.teamNumber}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="alliance_color">Alliance Color:</label>
        <div>
          <input
            type="radio"
            id="alliance_color_red"
            name="allianceColor"
            value="red"
            checked={formData.allianceColor === 'red'}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="alliance_color_red">Red</label>
          <input
            type="radio"
            id="alliance_color_blue"
            name="allianceColor"
            value="blue"
            checked={formData.allianceColor === 'blue'}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="alliance_color_blue">Blue</label>
        </div>
      </div>

      <button onClick={handleNextPopup}>Next</button>
    </div>
  );
};

export default SetupPopup;
