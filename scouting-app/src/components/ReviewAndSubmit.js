import React from 'react';

const ReviewAndSubmit = ({ formData, handleInputChange, handleSubmit }) => {
  return (
    <div className="bg-blue-950 text-white p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Review and Submit</h2>
      <div className="mb-4">
        <h3 className="font-bold mb-2">Setup Data:</h3>
        <p>Scout Name: {formData.scoutName}</p>
        <p>Match Number: {formData.matchNumber}</p>
        <p>Team Number: {formData.teamNumber}</p>
        <p>Alliance Color: {formData.allianceColor}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold mb-2">Auton Data:</h3>
        <p>Speakers Failed: {formData.speakersFailedAuton}</p>
        <p>Amps Failed: {formData.ampsFailedAuton}</p>
        <p>Ground: {formData.groundAuton}</p>
        <p>Speakers Scored: {formData.speakersScoredAuton}</p>
        <p>Amps Scored: {formData.ampsScoredAuton}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold mb-2">Teleop Data:</h3>
        <p>Speakers Failed: {formData.speakersFailedTeleop}</p>
        <p>Amps Failed: {formData.ampsFailedTeleop}</p>
        <p>Ground: {formData.groundTeleop}</p>
        <p>Speakers Scored: {formData.speakersScoredTeleop}</p>
        <p>Amps Scored: {formData.ampsScoredTeleop}</p>
      </div>
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
        <button
          onClick={handleSubmit}
          className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer"
        >
          Submit
        </button>
      </div>

  );
};

export default ReviewAndSubmit;