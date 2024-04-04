import React, { useState, useEffect } from 'react';
import Header from './Header';

const DModePopup = () => {
  const incrementValue = (field) => {
    setFormData((prevData) => ({ ...prevData, [field]: prevData[field] + 1 }));
  };

  const decrementValue = (field) => {
    setFormData((prevData) => ({ ...prevData, [field]: Math.max(prevData[field] - 1, 0) }));
  };

  const [formData, setFormData] = useState({
    defensePosition: "",
    shotsBlocked: 0,
    penalties: 0
  });

  const [timer, setTimer] = useState(135);
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
    setTimer(135);
    setIsActive(false);
  };

  return (
    <div className="bg-red-700 p-4 rounded">
      <div className="grid grid-cols-3 gap-4 h-full">
        <div>
          <header className="header">Defense Mode</header>
          <div className="timer">{formatTime(timer)}</div>
          <div className="timeButtons">
            <button onClick={handleStartStop} className={`px-4 py-2 rounded ${isActive ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}>
              {isActive ? 'Stop' : 'Start'}
            </button>
            <button onClick={handleReset} className="px-4 py-2 rounded bg-white text-black">
              Reset
            </button>
          </div>
        </div>
        <div>
          <div className="side-by-side-buttons">
            <button
              type="button"
              className="px-4 py-2 rounded bg-white text-black"
              onClick={() => incrementValue('shotsBlocked')}
            >
              Shots Blocked
              <span className="data">{formData.shotsBlocked}</span>
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded bg-white text-black"
              onClick={() => incrementValue('penalties')}
            >
              Penalties
              <span className="data">{formData.penalties}</span>
            </button>
          </div>
        </div>
        <div>
          <div className="input-section">
            <div>
              <header>Where did they play defense?</header>
            </div>
            <div>
              <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
          <div className="input-section">
            <div>
              <header>Who did they play defense on?</header>
            </div>
            <div>
              <input type="text" placeholder='649' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DModePopup;