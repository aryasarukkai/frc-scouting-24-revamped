import React, { useState, useEffect } from 'react';
import Header from './Header';

const DriverPopup = ({ formData, setFormData, handleStageChange, logAction }) => {
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

  const handleVibrate = () => {
    if (navigator.vibrate) {
      navigator.vibrate(500); 
    }
  };

  const [showCheckmark, setShowCheckmark] = useState(false);
  const [scoredItem, setScoredItem] = useState('');

  const handleButtonClick = (item) => {
    setScoredItem(item);
    setShowCheckmark(true);
    setTimeout(() => {
      setShowCheckmark(false);
    }, 750);
  };

  const handleStartStop = () => {
    setIsActive((prevActive) => !prevActive);
  };

  const handleReset = () => {
    setTimer(15);
    setIsActive(false);
  };

  return (
    <div className="bg-cyan-700 p-4 rounded">
      <div className="grid grid-cols-3 gap-4 h-full">
        <div>
          <button
            type="button"
            onClick={() => {
              incrementValue('speakersFailedTeleop');
              logAction('SPEAKER_FAILED_TELEOP');
            }}
            className="bg-red-600 text-white font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer w-full mt-2 lg:px-6 lg:py-3"
          >
            Speaker [F]
            <span className="block">{formData.speakersFailedTeleop}</span>
          </button>
          <button
            type="button"
            onClick={() => {
              incrementValue('ampsFailedTeleop');
              logAction('AMP_FAILED_TELEOP');
            }}
            className="bg-red-600 text-white font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer w-full mt-2 lg:px-6 lg:py-3"
          >
            Amp [F]
            <span className="block">{formData.ampsFailedTeleop}</span>
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              incrementValue('groundTeleop');
              logAction('PICKUP_TELEOP');
            }}
            className="bg-transparent text-white bg-blue-500 font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer w-full h-full lg:px-6 lg:py-3"
          >
            Pickup
            <span className="block">{formData.groundTeleop}</span>
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              setFormData((prevData) => ({
                ...prevData,
                speakersScoredTeleop: prevData.speakersScoredTeleop + 1
              }));
              handleButtonClick('SPEAKER');
              logAction('SPEAKER_SCORED_TELEOP');
            }}
            className="bg-transparent text-black bg-yellow-200 font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer w-full lg:px-6 lg:py-3"
          >
            Speaker [S]
            <span className="block">{formData.speakersScoredTeleop}</span>
          </button>
          <button
            type="button"
            onClick={() => {
              incrementValue('ampsScoredTeleop');
              handleButtonClick('AMP');
              logAction('AMP_SCORED_TELEOP');
            }}
            className="bg-transparent text-black bg-yellow-200 font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer w-full mt-2 lg:px-6 lg:py-3"
          >
            Amp [S]
            <span className="block">{formData.ampsScoredTeleop}</span>
          </button>
        </div>
      </div>

      {/* New row with "FEEDING:" header */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="col-span-3 text-white font-bold uppercase">
          FEEDING:
        </div>
      </div>

      {/* New row with "source feed" and "intake feed" buttons */}
      <div className="grid grid-cols-3 gap-4 mt-2">
        <div>
          <button
            type="button"
            onClick={() => {
              incrementValue('sourceFeed');
              logAction('SOURCE_FEED');
            }}
            className="bg-transparent text-white bg-blue-500 font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer w-full h-full lg:px-6 lg:py-3"
          >
            Feed Shot
            <span className="block">{formData.sourceFeed}</span>
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              incrementValue('intakeFeed');
              logAction('INTAKE_FEED');
            }}
            className="bg-transparent text-white bg-blue-500 font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer w-full h-full lg:px-6 lg:py-3"
          >
            Intaked Feed
            <span className="block">{formData.intakeFeed}</span>
          </button>
        </div>
        <div></div>
      </div>

      {showCheckmark && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-green-500 bg-opacity-75 transition-opacity duration-1000 animate-fade-out" style={{ zIndex: 9999 }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-white text-2xl font-bold mt-4">{scoredItem} SCORE RECORDED</p>
        </div>
      )}
    </div>
  );
};

export default DriverPopup;