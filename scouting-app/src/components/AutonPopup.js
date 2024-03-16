// AutonPopup.js
import React, { useState, useEffect } from 'react';

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
    <div className="popup">
      <div className="top">
        <header className="header">Autonomous</header>
        <div className="timer">{formatTime(timer)}</div>
        <div className="timeButtons">
          <button onClick={handleStartStop}>{isActive ? 'Stop' : 'Start'}</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-left">
          <button type="button" onClick={() => incrementValue('ampsFailedAuton')}>Amp (Fail)
            <span className="data">{formData.ampsFailedAuton}</span>
          </button>
          <button type="button" onClick={() => incrementValue('speakersFailedAuton')}>Speakers (Fail)
            <span className="data">{formData.speakersFailedAuton}</span>
          </button>
        </div>
        <div className="bottom-center">
          <button type="button" onClick={() => incrementValue('notesCollectedAuton')}>Pickup
            <span className="data">{formData.notesCollectedAuton}</span>
          </button>
        </div>
        <div className="bottom-right">
          <button type="button" onClick={() => incrementValue('speakersPlayedAuton')}>Speaker (Score)
            <span className="data">{formData.speakersPlayedAuton}</span>
          </button>
          <button type="button" onClick={() => incrementValue('ampsPlayedAuton')}>Amp (Score)
            <span className="data">{formData.ampsPlayedAuton}</span>
          </button>
        </div>
      </div>
      <div className="buttons">
        <button onClick={() => handleStageChange('setup')}>Previous</button>
        <button onClick={() => handleStageChange('driver')}>Next</button>
      </div>
    </div>
  );
};

export default AutonPopup;