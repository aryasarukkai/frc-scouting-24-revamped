// ReviewAndSubmit.js
import React, { useState } from 'react';

const ReviewAndSubmit = ({ formData, handleInputChange, handleSubmit, handleStageChange }) => {
  const [editField, setEditField] = useState(null);

  const handleEdit = (field) => {
    setEditField(field);
  };

  const handleSave = () => {
    setEditField(null);
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    handleInputChange({ target: { name, value } });
  };

  return (
    <div className="bg-blue-950 text-white p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Review and Submit</h2>
      <div className="mb-4">
        <h3 className="font-bold mb-2">Setup Data:</h3>
        <p>
          Scout Name:{' '}
          {editField === 'scoutName' ? (
            <input
              type="text"
              name="scoutName"
              value={formData.scoutName}
              onChange={handleEditInputChange}
              className="border border-gray-300 rounded px-2 py-1 bg-black text-white"
            />
          ) : (
            formData.scoutName
          )}{' '}
          {editField !== 'scoutName' && (
            <button onClick={() => handleEdit('scoutName')} className="text-blue-500">
              Edit
            </button>
          )}
        </p>
        <p>
          Match Number:{' '}
          {editField === 'matchNumber' ? (
            <input
              type="text"
              name="matchNumber"
              value={formData.matchNumber}
              onChange={handleEditInputChange}
              className="border border-gray-300 rounded px-2 py-1 bg-black text-white"
            />
          ) : (
            formData.matchNumber
          )}{' '}
          {editField !== 'matchNumber' && (
            <button onClick={() => handleEdit('matchNumber')} className="text-blue-500">
              Edit
            </button>
          )}
        </p>
        <p>
          Team Number:{' '}
          {editField === 'teamNumber' ? (
            <input
              type="text"
              name="teamNumber"
              value={formData.teamNumber}
              onChange={handleEditInputChange}
              className="border border-gray-300 rounded px-2 py-1 bg-black text-white"
            />
          ) : (
            formData.teamNumber
          )}{' '}
          {editField !== 'teamNumber' && (
            <button onClick={() => handleEdit('teamNumber')} className="text-blue-500">
              Edit
            </button>
          )}
        </p>
        <p>
          Alliance Color:{' '}
          {editField === 'allianceColor' ? (
            <input
              type="text"
              name="allianceColor"
              value={formData.allianceColor}
              onChange={handleEditInputChange}
              className="border border-gray-300 rounded px-2 py-1 bg-black text-white"
            />
          ) : (
            formData.allianceColor
          )}{' '}
          {editField !== 'allianceColor' && (
            <button onClick={() => handleEdit('allianceColor')} className="text-blue-500">
              Edit
            </button>
          )}
        </p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold mb-2">Auton Data:</h3>
        <p>
          Speakers Failed:{' '}
          {editField === 'speakersFailedAuton' ? (
            <input
              type="number"
              name="speakersFailedAuton"
              value={formData.speakersFailedAuton}
              onChange={handleEditInputChange}
              className="border border-gray-300 rounded px-2 py-1 bg-black text-white"
            />
          ) : (
            formData.speakersFailedAuton
          )}{' '}
          {editField !== 'speakersFailedAuton' && (
            <button onClick={() => handleEdit('speakersFailedAuton')} className="text-blue-500">
              Edit
            </button>
          )}
        </p>
        <p>
          Amps Failed:{' '}
          {editField === 'ampsFailedAuton' ? (
            <input
              type="number"
              name="ampsFailedAuton"
              value={formData.ampsFailedAuton}
              onChange={handleEditInputChange}
              className="border border-gray-300 rounded px-2 py-1 bg-black text-white"
            />
          ) : (
            formData.ampsFailedAuton
          )}{' '}
          {editField !== 'ampsFailedAuton' && (
            <button onClick={() => handleEdit('ampsFailedAuton')} className="text-blue-500">
              Edit
            </button>
          )}
        </p>
        <p>
          Ground:{' '}
          {editField === 'groundAuton' ? (
            <input
              type="number"
              name="groundAuton"
              value={formData.groundAuton}
              onChange={handleEditInputChange}
              className="border border-gray-300 rounded px-2 py-1 bg-black text-white"
            />
          ) : (
            formData.groundAuton
          )}{' '}
          {editField !== 'groundAuton' && (
            <button onClick={() => handleEdit('groundAuton')} className="text-blue-500">
              Edit
            </button>
          )}
        </p>
        <p>
          Speakers Scored:{' '}
          {editField === 'speakersScoredAuton' ? (
            <input
              type="number"
              name="speakersScoredAuton"
              value={formData.speakersScoredAuton}
              onChange={handleEditInputChange}
              className="border border-gray-300 rounded px-2 py-1 bg-black text-white"
            />
          ) : (
            formData.speakersScoredAuton
          )}{' '}
          {editField !== 'speakersScoredAuton' && (
            <button onClick={() => handleEdit('speakersScoredAuton')} className="text-blue-500">
              Edit
            </button>
          )}
        </p>
        <p>
          Amps Scored:{' '}
          {editField === 'ampsScoredAuton' ? (
            <input
              type="number"
              name="ampsScoredAuton"
              value={formData.ampsScoredAuton}
              onChange={handleEditInputChange}
              className="border border-gray-300 rounded px-2 py-1 bg-black text-white"
            />
          ) : (
            formData.ampsScoredAuton
          )}{' '}
          {editField !== 'ampsScoredAuton' && (
            <button onClick={() => handleEdit('ampsScoredAuton')} className="text-blue-500">
              Edit
            </button>
          )}
        </p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold mb-2">Teleop Data:</h3>
        <p>
          Speakers Failed:{' '}
          {editField === 'speakersFailedTeleop' ? (
            <input
              type="number"
              name="speakersFailedTeleop"
              value={formData.speakersFailedTeleop}
              onChange={handleEditInputChange}
              className="border border-gray-300 rounded px-2 py-1 bg-black text-white"
            />
          ) : (
            formData.speakersFailedTeleop
          )}{' '}
          {editField !== 'speakersFailedTeleop' && (
            <button onClick={() => handleEdit('speakersFailedTeleop')} className="text-blue-500">
              Edit
            </button>
          )}
        </p>
        <p>
          Amps Failed:{' '}
          {editField === 'ampsFailedTeleop' ? (
            <input
              type="number"
              name="ampsFailedTeleop"
              value={formData.ampsFailedTeleop}
              onChange={handleEditInputChange}
              className="border border-gray-300 rounded px-2 py-1 bg-black text-white"
            />
          ) : (
            formData.ampsFailedTeleop
          )}{' '}
          {editField !== 'ampsFailedTeleop' && (
            <button onClick={() => handleEdit('ampsFailedTeleop')} className="text-blue-500">
              Edit
            </button>
          )}
        </p>
        <p>
          Ground:{' '}
          {editField === 'groundTeleop' ? (
            <input
              type="number"
              name="groundTeleop"
              value={formData.groundTeleop}
              onChange={handleEditInputChange}
              className="border border-gray-300 rounded px-2 py-1 bg-black text-white"
            />
          ) : (
            formData.groundTeleop
          )}{' '}
          {editField !== 'groundTeleop' && (
            <button onClick={() => handleEdit('groundTeleop')} className="text-blue-500">
              Edit
            </button>
          )}
        </p>
        <p>
          Speakers Scored:{' '}
          {editField === 'speakersScoredTeleop' ? (
            <input
              type="number"
              name="speakersScoredTeleop"
              value={formData.speakersScoredTeleop}
              onChange={handleEditInputChange}
              className="border border-gray-300 rounded px-2 py-1 bg-black text-white"
            />
          ) : (
            formData.speakersScoredTeleop
          )}{' '}
          {editField !== 'speakersScoredTeleop' && (
            <button onClick={() => handleEdit('speakersScoredTeleop')} className="text-blue-500">
              Edit
            </button>
          )}
        </p>
        <p>
          Amps Scored:{' '}
          {editField === 'ampsScoredTeleop' ? (
            <input
              type="number"
              name="ampsScoredTeleop"
              value={formData.ampsScoredTeleop}
              onChange={handleEditInputChange}
              className="border border-gray-300 rounded px-2 py-1 bg-black text-white"
            />
          ) : (
            formData.ampsScoredTeleop
          )}{' '}
          {editField !== 'ampsScoredTeleop' && (
            <button onClick={() => handleEdit('ampsScoredTeleop')} className="text-blue-500">
              Edit
            </button>
          )}
        </p>
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
      {editField && (
        <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
          Save
        </button>
      )}
      <button
        onClick={handleSubmit}
        className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer"
      >
        Submit
      </button>
      <button
        onClick={() => handleStageChange('driver')}
        className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer ml-2"
      >
        Previous
      </button>
    </div>
  );
};

export default ReviewAndSubmit;