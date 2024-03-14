import React, { useState } from 'react';

const Teleop = () => {
  const [formData, setFormData] = useState({
    notesCollectedTeleop: 0,
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
    // Get form data from global state or previous components
    const combinedFormData = {
      // ...setupFormData,
      // ...teamInfoFormData,
      // ...autonFormData,
      ...formData,
    };

    alert("The data has been submitted. Please wait for the confirmation that it has been uploaded, and do not press the button again or navigate away from the app until you see the upload confirmation, which should show momentarily.");

    const url = `https://script.google.com/macros/s/AKfycbxmHeBEC5J_XkS6l6fKNMzMzoPJYzWaqk6uZ2l20Eo4q2rVvA6J3uxvRGeK_oSoZq2RdA/exec?action=create&name=${combinedFormData.scoutName}&matchnumber=${combinedFormData.matchNumber}&teamnumber=${combinedFormData.teamNumber}&color=${combinedFormData.allianceColor}&preloadnotes=${combinedFormData.preloadScored}&notescollectedauton=${combinedFormData.notesCollectedAuton}&notescollectedteleop=${combinedFormData.notesCollectedTeleop}&notesplayedauton=${combinedFormData.ampsPlayedAuton}&notesplayedteleop=${combinedFormData.ampsPlayedTeleop}&amplifiednotesteleop=${combinedFormData.amplifiedSpeakersPlayedTeleop}&onstage=${combinedFormData.unamplifiedSpeakersPlayedTeleop}&harmonized=${combinedFormData.harmonized}&spotlight=${combinedFormData.spotlight}&buddyclimb=${combinedFormData.buddyClimb}&notes=${combinedFormData.notes}&scoredspeakers=${combinedFormData.scoredSpeakers}&scoredamps=${combinedFormData.scoredAmps}`;

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
          const fileContent = JSON.stringify(combinedFormData);
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
          // Clear form data in global state or reset form fields
        }
      });
  };

  return (
    <div>
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

export default Teleop;