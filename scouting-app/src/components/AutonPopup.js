import React, { useState, useEffect } from 'react';

const AutonPopup = ({ formData, setFormData, handleStageChange }) => {
  const incrementValue = (field) => {
    setFormData((prevData) => ({ ...prevData, [field]: prevData[field] + 1 }));
  };

  const decrementValue = (field) => {
    setFormData((prevData) => ({ ...prevData, [field]: Math.max(prevData[field] - 1, 0) }));
  };

  const handleInputChange = (e) => {
    const { name, type, checked, value } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const [timer, setTimer] = useState(15);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((prevTimer) => Math.max(prevTimer - 1, 0));
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleStartStop = () => {
    setIsActive((prevActive) => !prevActive);
  };

  const handleReset = () => {
    setTimer(15);
    setIsActive(false);
  };

  return (
    <div className="bg-blue-800 p-4 rounded">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Autonomous</h2>
        <div className="text-2xl font-bold">{formatTime(timer)}</div>
        <div className="space-x-2">
          <button
            onClick={handleStartStop}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer"
          >
            {isActive ? 'Stop' : 'Start'}
          </button>
          <button
            onClick={handleReset}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer"
          >
            Reset
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="preload_scored" className="block mb-2 font-bold">
          Preload Scored:
        </label>
        <input
          type="checkbox"
          id="preload_scored"
          name="preloadScored"
          checked={formData.preloadScored}
          onChange={handleInputChange}
          className="mr-2"
        />
        <label htmlFor="preload_scored">Yes</label>
      </div>
      <div className="mb-4">
        <label htmlFor="notes_collected_auton" className="block mb-2 font-bold">
          Notes Collected in Auton:
        </label>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => decrementValue('notesCollectedAuton')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer"
          >
            -
          </button>
          <span>{formData.notesCollectedAuton}</span>
          <button
            onClick={() => incrementValue('notesCollectedAuton')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="amps_played_auton" className="block mb-2 font-bold">
          Amps Played in Auton:
        </label>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => decrementValue('ampsPlayedAuton')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer"
          >
            -
          </button>
          <span>{formData.ampsPlayedAuton}</span>
          <button
            onClick={() => incrementValue('ampsPlayedAuton')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="speakers_played_auton" className="block mb-2 font-bold">
          Speakers Played in Auton:
        </label>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => decrementValue('speakersPlayedAuton')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer"
          >
            -
          </button>
          <span>{formData.speakersPlayedAuton}</span>
          <button
            onClick={() => incrementValue('speakersPlayedAuton')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => handleStageChange('setup')}
          className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer"
        >
          Previous
        </button>
        <button
          onClick={() => handleStageChange('driver')}
          className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AutonPopup;