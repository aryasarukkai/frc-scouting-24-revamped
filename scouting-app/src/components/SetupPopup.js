import React from 'react';

const SetupPopup = ({ formData, handleInputChange, handleNextPopup }) => {
  return (
    <div className="bg-blue-800 p-4 rounded">
      <h2 className="text-2xl font-bold mb-4">Setup</h2>
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
      {/* Rest of the form fields */}
      <div className="flex justify-end">
        <button
          onClick={handleNextPopup}
          className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SetupPopup;