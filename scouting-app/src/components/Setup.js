import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Setup = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    scoutName: '',
    allianceColor: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    // Store form data in a global state or pass it to the next component
    history.push('/team-info');
  };

  return (
    <div>
      <h2><u>Setup</u> 🚀</h2>
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
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default Setup;