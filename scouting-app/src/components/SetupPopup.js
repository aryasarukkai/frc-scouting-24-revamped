import React from 'react';

const SetupPopup = ({ formData, handleInputChange, handleNextPopup }) => {
  return (
    <div className="bg-blue-950 text-white p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Setup 🚀</h2>

      <div className="mb-4">
        <label htmlFor="scout_name" className="block mb-2 font-bold">
          Scout Name:
        </label>
        <input
          type="text"
          id="scout_name"
          name="scoutName"
          value={formData.scoutName}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="match_number" className="block mb-2 font-bold">
          Match Number:
        </label>
        <input
          type="number"
          id="match_number"
          name="matchNumber"
          value={formData.matchNumber}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="team_number" className="block mb-2 font-bold">
          Team Number:
        </label>
        <input
          type="number"
          id="team_number"
          name="teamNumber"
          value={formData.teamNumber}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="alliance_color" className="block mb-2 font-bold">
          Alliance Color:
        </label>
        <select
          name="allianceColor"
          id="alliance_color"
          value={formData.allianceColor}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded"
        >
          <option value="">Select Color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
        </select>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleNextPopup}
          className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer"
        >
          Next: Autonomous
        </button>
      </div>
    </div>
  );
};

export default SetupPopup;