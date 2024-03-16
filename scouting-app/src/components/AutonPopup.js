import React, { useState, useEffect } from 'react';
import Header from './Header';

const AutonPopup = ({ formData, setFormData, handleStageChange }) => {
  const incrementValue = (field) => {
    setFormData((prevData) => ({ ...prevData, [field]: prevData[field] + 1 }));
  };

  const decrementValue = (field) => {
    setFormData((prevData) => ({ ...prevData, [field]: Math.max(prevData[field] - 1, 0) }));
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
    <div className="bg-lime-700 p-4 rounded">
      <div className="flex items-center justify-between mb-4">
        <div className="space-x-2">
          <button
            onClick={handleStartStop}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer"
          >
            {isActive ? 'Stop' : 'Go'}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <button 
            type="button"
            onClick={() => incrementValue('speakersFailedAuton')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer w-full"
          >
            Speaker (Fail)
            <span className="block">{formData.speakersFailedAuton}</span>
          </button>
          <button
            type="button"
            onClick={() => incrementValue('ampsFailedAuton')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer w-full mt-2"
          >
            Amp (Fail)
            <span className="block">{formData.ampsFailedAuton}</span>
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => incrementValue('groundAuton')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer w-full h-full"
          >
            Ground
            <span className="block">{formData.groundAuton}</span>
          </button>
        </div>
        <div>
          <button
            type="button" 
            onClick={() => incrementValue('speakersScoredAuton')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer w-full"
          >
            Speaker (Score)
            <span className="block">{formData.speakersScoredAuton}</span>
          </button>
          <button
            type="button"
            onClick={() => incrementValue('ampsScoredAuton')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer w-full mt-2"
          >
            Amp (Score) 
            <span className="block">{formData.ampsScoredAuton}</span>
          </button>
        </div>
      </div>
      <div className="flex justify-between mt-4">
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