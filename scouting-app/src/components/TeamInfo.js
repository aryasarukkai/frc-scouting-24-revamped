import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const TeamInfo = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    matchNumber: '',
    teamNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    // Store form data in a global state or pass it to the next component
    history.push('/auton');
  };

  return (
    <div>
      <h2><u>Team Info</u> 🏆</h2>
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
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default TeamInfo;