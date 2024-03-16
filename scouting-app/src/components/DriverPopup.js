import React from 'react';

const DriverPopup = ({ formData, handleInputChange, incrementValue, decrementValue, handlePrevPopup, submitData }) => {
  return (
    <div className="bg-cyan-700 p-4 rounded">
      <h2 className="text-2xl font-bold mb-4">Teleop</h2>
      <div className="mb-4">
        <label htmlFor="notes_collected_teleop" className="block mb-2 font-bold">
          Notes Collected in Teleop:
        </label>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => decrementValue('notesCollectedTeleop')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer"
          >
            -
          </button>
          <span>{formData.notesCollectedTeleop}</span>
          <button
            onClick={() => incrementValue('notesCollectedTeleop')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
      {/* Rest of the form fields */}
      <div className="mb-4">
        <label htmlFor="notes" className="block mb-2 font-bold">
          Notes:
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded"
        ></textarea>
      </div>
      <div className="flex justify-between">
        <button
          onClick={handlePrevPopup}
          className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer"
        >
          Previous
        </button>
        <button
          onClick={submitData}
          className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default DriverPopup;