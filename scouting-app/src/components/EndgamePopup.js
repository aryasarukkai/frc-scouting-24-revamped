import React, { useState } from 'react';

const EndgamePopup = ({ formData, handleInputChange, handleStageChange }) => {
  const [selectedOptions, setSelectedOptions] = useState({
    onstage: '',
    harmony: '',
    trap: '',
    spotlight: '',
    defenseBot: '',
    disabledDamagedBot: '',
    nonFunctionalBot: '',
  });

  const handleOptionChange = (category, value) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [category]: value,
    }));
    handleInputChange({ target: { name: category, value } });
  };

  return (
    <div className="bg-blue-950 text-white p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Endgame</h2>
      <div className="mb-4">
        <div className="mb-2">
          <label className="block mb-1">Onstage:</label>
          <div className="flex space-x-2">
            {['Yes', 'No', 'Fail'].map((option) => (
              <button
                key={option}
                className={`px-4 py-2 rounded ${
                  selectedOptions.onstage === option
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-black'
                }`}
                onClick={() => handleOptionChange('onstage', option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-2">
          <label className="block mb-1">Harmony:</label>
          <div className="flex space-x-2">
            {['Yes', 'No', 'Fail'].map((option) => (
              <button
                key={option}
                className={`px-4 py-2 rounded ${
                  selectedOptions.harmony === option
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-black'
                }`}
                onClick={() => handleOptionChange('harmony', option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-2">
          <label className="block mb-1">Trap:</label>
          <div className="flex space-x-2">
            {['Yes', 'No', 'Fail'].map((option) => (
              <button
                key={option}
                className={`px-4 py-2 rounded ${
                  selectedOptions.trap === option
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-black'
                }`}
                onClick={() => handleOptionChange('trap', option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-2">
          <label className="block mb-1">Spotlight:</label>
          <div className="flex space-x-2">
            {['Yes', 'No', 'Fail'].map((option) => (
              <button
                key={option}
                className={`px-4 py-2 rounded ${
                  selectedOptions.spotlight === option
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-black'
                }`}
                onClick={() => handleOptionChange('spotlight', option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="mb-2">
          <label className="block mb-1">Defense Bot:</label>
          <div className="flex space-x-2">
            {['Yes', 'No'].map((option) => (
              <button
                key={option}
                className={`px-4 py-2 rounded ${
                  selectedOptions.defenseBot === option
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-black'
                }`}
                onClick={() => handleOptionChange('defenseBot', option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndgamePopup;