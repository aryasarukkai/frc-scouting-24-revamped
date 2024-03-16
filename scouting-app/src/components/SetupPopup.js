import React from 'react';

const SetupPopup = ({ formData, handleInputChange, handleNextPopup }) => {
  return (
    <div className="bg-blue-950 text-white p-4 rounded-lg">

      <div className="flex flex-wrap -mx-2">
        <div className="w-1/2 px-2 mb-2">
          <label htmlFor="scout_name" className="block font-bold mb-1">
            Scout Name:
          </label>
          <input
            type="text"
            id="scout_name"
            name="scoutName"
            value={formData.scoutName}
            onChange={handleInputChange}
            required
            className="w-full px-2 py-1 bg-gray-800 text-white border border-gray-700 rounded"
          />
        </div>

        <div className="w-1/2 px-2 mb-2">
          <label htmlFor="match_number" className="block font-bold mb-1">
            Match Number:
          </label>
          <input
            type="number"
            id="match_number"
            name="matchNumber"
            value={formData.matchNumber}
            onChange={handleInputChange}
            required
            className="w-full px-2 py-1 bg-gray-800 text-white border border-gray-700 rounded"
          />
        </div>

        <div className="w-1/2 px-2 mb-2">
          <label htmlFor="team_number" className="block font-bold mb-1">
            Team Number:
          </label>
          <input
            type="number"
            id="team_number"
            name="teamNumber"
            value={formData.teamNumber}
            onChange={handleInputChange}
            required
            className="w-full px-2 py-1 bg-gray-800 text-white border border-gray-700 rounded"
          />
        </div>

        <div className="w-1/2 px-2 mb-2">
          <label htmlFor="alliance_color" className="block font-bold mb-1">
            Alliance Color:
          </label>
          <select
            name="allianceColor"
            id="alliance_color"
            value={formData.allianceColor}
            onChange={handleInputChange}
            required
            className="w-full px-2 py-1 bg-gray-800 text-white border border-gray-700 rounded"
          >
            <option value="">Select Color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
          </select>
        </div>
      </div>

    </div>
  );
};

export default SetupPopup;