import React, { useState } from 'react';
import Header from './Header';

const DModePopup = () => {
  const incrementValue = (field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: prevData[field] + 1,
    }));
  };

  const decrementValue = (field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: Math.max(prevData[field] - 1, 0),
    }));
  };

  const [formData, setFormData] = useState({
    defensePosition: '',
    shotsBlocked: 0,
    penalties: 0,
    playerDefendedOn: '',
  });

  return (
    <div className="bg-red-700 p-4 rounded h-full">
      <div className="grid grid-cols-1 gap-4 h-full">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col space-y-2">
            <button
              type="button"
              onClick={() => {
                incrementValue('shotsBlocked');
              }}
              className="bg-transparent text-white bg-blue-500 font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer w-full lg:px-6 lg:py-3"
            >
              Shots Blocked
              <span className="block">{formData.shotsBlocked}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                incrementValue('penalties');
              }}
              className="bg-transparent text-white bg-blue-500 font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer w-full lg:px-6 lg:py-3"
            >
              Penalties
              <span className="block">{formData.penalties}</span>
            </button>
          </div>
          <div className="input-section">
            <div>
              <header className="text-white font-bold uppercase">
                Where did they play defense?
              </header>
            </div>
            <div>
              <select
                value={formData.defensePosition}
                onChange={(e) =>
                  setFormData({ ...formData, defensePosition: e.target.value })
                }
                className="bg-white text-black font-bold uppercase px-4 py-2 rounded w-full lg:px-6 lg:py-3"
              >
                <option value="">Select Position</option>
                <option value="option1">Source Side</option>
                <option value="option2">Subwoofer</option>
                <option value="option3">Full Field</option>
              </select>
            </div>
          </div>
          <div className="input-section">
            <div>
              <header className="text-white font-bold uppercase">
                Who did they play defense on?
              </header>
            </div>
            <div>
              <input
                type="text"
                placeholder="649"
                value={formData.playerDefendedOn}
                onChange={(e) =>
                  setFormData({ ...formData, playerDefendedOn: e.target.value })
                }
                className="bg-white text-black font-bold uppercase px-4 py-2 rounded w-full lg:px-6 lg:py-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DModePopup;