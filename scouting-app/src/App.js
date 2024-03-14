import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    scoutName: '',
    matchNumber: '',
    teamNumber: '',
    allianceColor: '',
    preloadScored: false,
    notesCollectedAuton: 0,
    notesCollectedTeleop: 0,
    ampsPlayedAuton: 0,
    speakersPlayedAuton: 0,
    ampsPlayedTeleop: 0,
    unamplifiedSpeakersPlayedTeleop: 0,
    amplifiedSpeakersPlayedTeleop: 0,
    harmonized: false,
    spotlight: false,
    buddyClimb: false,
    notes: '',
    scoredSpeakers: 0,
    scoredAmps: 0,
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

  const submitData = () => {
    alert("The data has been submitted.  Please wait for the confirmation that it has been uploaded, and do not press the button again or navigate away from the app until you see the upload confirmation, which should show monentarily.");

    const url = `https://script.google.com/macros/s/AKfycbxmHeBEC5J_XkS6l6fKNMzMzoPJYzWaqk6uZ2l20Eo4q2rVvA6J3uxvRGeK_oSoZq2RdA/exec?action=create&name=${formData.scoutName}&matchnumber=${formData.matchNumber}&teamnumber=${formData.teamNumber}&color=${formData.allianceColor}&preloadnotes=${formData.preloadScored}&notescollectedauton=${formData.notesCollectedAuton}&notescollectedteleop=${formData.notesCollectedTeleop}&notesplayedauton=${formData.ampsPlayedAuton}&notesplayedteleop=${formData.ampsPlayedTeleop}&amplifiednotesteleop=${formData.amplifiedSpeakersPlayedTeleop}&onstage=${formData.unamplifiedSpeakersPlayedTeleop}&harmonized=${formData.harmonized}&spotlight=${formData.spotlight}&buddyclimb=${formData.buddyClimb}&notes=${formData.notes}&scoredspeakers=${formData.scoredSpeakers}&scoredamps=${formData.scoredAmps}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('Request failed');
        }
      })
      .then(data => {
        if (data !== "DONE") {
          const timestamp = new Date().toISOString().replace(/:/g, "-");
          const fileName = `error_${timestamp}.txt`;
          const fileContent = JSON.stringify(formData);
          const blob = new Blob([fileContent], { type: "text/plain" });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.download = fileName;
          link.href = url;
          link.click();
          alert(`Data submission failed. Error saved as ${fileName}`);
        } else {
          alert(`Data submitted successfully: ${data}`);
          window.location.reload();
          clearData();
          setFormData((prevData) => ({ ...prevData, scoutName: formData.scoutName }));
        }
      });
  };

  const clearData = () => {
    setFormData((prevData) => ({
      ...prevData,
      matchNumber: '',
      teamNumber: '',
      notesCollectedAuton: '',
      notesPlayedAuton: '',
      notesCollectedTeleop: '',
      notesPlayedTeleop: '',
      amplifiedSpeakersPlayedTeleop: '',
      unamplifiedSpeakersPlayedTeleop: '',
      spotlight: false,
      harmonized: false,
      preloadScored: false,
      scoredSpeakers: '',
      scoredAmps: '',
      buddyClimb: '',
      notes: '',
    }));
  };

  return (
    <div>
      <div className="header">
        <img src="logo.png" alt="Logo" length="80px" width="80px" />
        <h1>649 Scouting <br /><code>V3	 • DEMO</code></h1>
      </div>
      <h1>FRC Crescendo</h1>

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

      <h3><u>Speakers</u> 🔈</h3>
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

      <h3><u>Endgame</u> 🔚</h3>
      <div className="input-group">
        <label htmlFor="harmonized">Harmonized:</label>
        <input
          type="checkbox"
          id="harmonized"
          name="harmonized"
          checked={formData.harmonized}
          onChange={handleInputChange}
        />
        <label className="checkmark" htmlFor="harmonized"></label>
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
        <label className="checkmark" htmlFor="spotlight"></label>
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
        <label className="checkmark" htmlFor="buddy_climb"></label>
      </div>

      <h3><u>Final Scoring</u> 🏆</h3>
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
        <textarea id="notes" name="notes" value={formData.notes} onChange={handleInputChange}></textarea>
      </div>

      <button type="submit" onClick={submitData}>Submit</button>
    </div>
  );
};

export default App;