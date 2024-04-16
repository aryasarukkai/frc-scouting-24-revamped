import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set } from 'firebase/database';
import SetupPopup from './components/SetupPopup';
import AutonPopup from './components/AutonPopup';
import Header from './components/Header';
import DriverPopup from './components/DriverPopup';
import DModePopup from './components/DModePopup';
import ReviewAndSubmit from './components/ReviewAndSubmit';
import LandscapePopup from './components/LandscapePopup';
import DataLookup from './components/DataLookup';
import SuccessPopup from './components/SuccessPopup';
import EndgamePopup from './components/EndgamePopup';


const firebaseConfig = {
  apiKey: "AIzaSyAso045mvuwi4VgaqCFVBT0bz1u3_e9O9g",
  authDomain: "crescendo-scouting-app-649.firebaseapp.com",
  databaseURL: "https://crescendo-scouting-app-649-default-rtdb.firebaseio.com",
  projectId: "crescendo-scouting-app-649",
  storageBucket: "crescendo-scouting-app-649.appspot.com",
  messagingSenderId: "1043419769449",
  appId: "1:1043419769449:web:448a22c410c3efd37c50f8"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const App = () => {
  const [currentPopup, setCurrentPopup] = useState('home');
  const [formData, setFormData] = useState({
    scoutName: '',
    matchNumber: '',
    teamNumber: '',
    allianceColor: '',
    speakersFailedAuton: 0,
    ampsFailedAuton: 0,
    groundAuton: 0,
    amplifiedNotesTeleop: 0,
    speakersScoredAuton: 0,
    ampsScoredAuton: 0,
    speakersFailedTeleop: 0,
    ampsFailedTeleop: 0,
    groundTeleop: 0,
    sourceTeleop: 0,
    speakersScoredTeleop: 0,
    amplifiedNotesAuton: 0,
    ampsScoredTeleop: 0,
    intakeFeed: 0,
    sourceFeed: 0,
    notes: '',
  });
  const [actionLogs, setActionLogs] = useState([]);
  const [brokenBot, setBrokenBot] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const incrementValue = (field) => {
    setFormData((prevData) => ({ ...prevData, [field]: prevData[field] + 1 }));
  };

  const decrementValue = (field) => {
    setFormData((prevData) => ({ ...prevData, [field]: prevData[field] - 1 }));
  };

  const submitData = () => {
    const newSubmissionRef = push(ref(database, 'formData-ebr'));
    set(newSubmissionRef, { ...formData, actionLogs, brokenBot })
      .then(() => {
        console.log('Data submitted successfully');
        setFormData({
          scoutName: '',
          matchNumber: '',
          teamNumber: '',
          allianceColor: '',
          speakersFailedAuton: 0,
          ampsFailedAuton: 0,
          groundAuton: 0,
          speakersScoredAuton: 0,
          ampsScoredAuton: 0,
          speakersFailedTeleop: 0,
          ampsFailedTeleop: 0,
          groundTeleop: 0,
          sourceTeleop: 0,
          speakersScoredTeleop: 0,
          ampsScoredTeleop: 0,
          amplifiedNotesTeleop: 0,
          notes: '',
          onstage: '',
          harmony: '',
          trap: '',
          spotlight: '',
          amplifiedNotesAuton: isNaN(formData.amplifiedNotesAuton) ? 0 : formData.amplifiedNotesAuton,
          actionLogs: actionLogs,
        });
        setActionLogs([]); // Clear the action logs after submission
        setBrokenBot(false); // Reset the brokenBot state after submission
        setCurrentPopup('success');
      })
      .catch((error) => {
        console.error('Error submitting data:', error);
      });
  };

  const clearData = () => {
    setFormData({
      scoutName: '',
      matchNumber: '',
      teamNumber: '',
      allianceColor: '',
      speakersFailedAuton: 0,
      ampsFailedAuton: 0,
      groundAuton: 0,
      speakersScoredAuton: 0,
      ampsScoredAuton: 0,
      speakersFailedTeleop: 0,
      ampsFailedTeleop: 0,
      groundTeleop: 0,
      speakersScoredTeleop: 0,
      ampsScoredTeleop: 0,
      amplifiedNotesTeleop: 0,
      notes: '',
    });
  };

  const [showCountdown, setShowCountdown] = useState(false);
  const [countdownTime, setCountdownTime] = useState(10);

  useEffect(() => {
    let interval;
    if (showCountdown) {
      interval = setInterval(() => {
        setCountdownTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (countdownTime === 0) {
      setShowCountdown(false);
      setCountdownTime(10);
    }

    return () => clearInterval(interval);
  }, [showCountdown, countdownTime]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  useEffect(() => {
    setTimer(currentPopup === 'auton' ? 15 : currentPopup === 'driver' ? 135 : 0);
    if (currentPopup === 'driver') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [currentPopup]);

  const handleStartStop = () => {
    setIsActive((prevActive) => {
      if (prevActive) {
        setTimer(currentPopup === 'auton' ? 15 : currentPopup === 'driver' ? 135 : 0);
      }
      return !prevActive;
    });
  };

  const logAction = (action) => {
    const timestamp = formatTime(timer);
    setActionLogs((prevLogs) => [...prevLogs, { action, timestamp }]);
  };

  return (
    <div className="bg-blue-950 text-white p-4 rounded-lg min-h-screen flex flex-col">
      <LandscapePopup />
      <Header
        title={currentPopup === 'auton' ? 'Auton' : currentPopup === 'driver' ? 'Teleop' : ''}
        timer={currentPopup === 'auton' || currentPopup === 'driver' ? formatTime(timer) : ''}
        handleStartStop={handleStartStop}
        isActive={isActive}
        handleHomeClick={() => setCurrentPopup('home')}
      />
      <div className="relative">
        {currentPopup === 'home' && (
          <div className="flex flex-wrap justify-center mb-4 transition-opacity duration-500 ease-in-out opacity-100">
            <button
              onClick={() => setCurrentPopup('setup')}
              className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer m-2"
            >
              Setup
            </button>
            <button
              onClick={() => setCurrentPopup('auton')}
              className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer m-2"
            >
              Auton
            </button>
            <button
              onClick={() => setCurrentPopup('driver')}
              className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer m-2"
            >
              Teleop
            </button>
            <button
              onClick={() => setCurrentPopup('dmode')}
              className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer m-2"
            >
              DMODE
            </button>
            <button
              onClick={() => setCurrentPopup('endgame')}
              className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer m-2"
            >
              Endgame
            </button>
            <button
              onClick={() => setCurrentPopup('dataLookup')}
              className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer m-2"
            >
              Data Lookup
            </button>
            <button
              onClick={() => window.open('https://msetscoutingcalculator.streamlit.app/', '_blank')}
              className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer m-2"
            >
              Scouting Calculator
            </button>
            <button
              onClick={() => window.location.reload()}
              className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer m-2"
            >
              Reload
            </button>
          </div>
        )}
        {currentPopup === 'success' && (
          <div className="transition-opacity duration-500 ease-in-out opacity-100">
            <SuccessPopup onClose={() => setCurrentPopup('home')} />
          </div>
        )}
        {currentPopup === 'setup' && (
          <div className="transition-opacity duration-500 ease-in-out opacity-100">
            <SetupPopup
              formData={formData}
              handleInputChange={handleInputChange}
              handleNextPopup={() => setCurrentPopup('auton')}
            />
          </div>
        )}
        {currentPopup === 'auton' && (
          <div className="transition-opacity duration-500 ease-in-out opacity-100">
            <AutonPopup
              formData={formData}
              setFormData={setFormData}
              handleStageChange={setCurrentPopup}
              logAction={logAction}
            />
          </div>
        )}
        {currentPopup === 'endgame' && (
          <div className="transition-opacity duration-500 ease-in-out opacity-100">
            <EndgamePopup
              formData={formData}
              handleInputChange={handleInputChange}
              handleStageChange={setCurrentPopup}
            />
          </div>
        )}
        {currentPopup === 'driver' && (
          <div className="transition-opacity duration-500 ease-in-out opacity-100">
            <DriverPopup
              formData={formData}
              setFormData={setFormData}
              handleInputChange={handleInputChange}
              incrementValue={incrementValue}
              decrementValue={decrementValue}
              handlePrevPopup={() => setCurrentPopup('auton')}
              handleReviewAndSubmit={() => setCurrentPopup('review')}
              logAction={logAction}
              brokenBot={brokenBot}
              setBrokenBot={setBrokenBot}
            />
          </div>
        )}
        {currentPopup === 'dmode' && (
          <div className="transition-opacity duration-500 ease-in-out opacity-100">
            <DModePopup
              formData={formData}
              handleInputChange={handleInputChange}
              handleStageChange={setCurrentPopup}
            />
          </div>
        )}
        {currentPopup === 'review' && (
          <div className="transition-opacity duration-500 ease-in-out opacity-100">
            <ReviewAndSubmit
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={submitData}
              handleStageChange={setCurrentPopup}
            />
          </div>
        )}
        {currentPopup === 'dataLookup' && (
          <div className="transition-opacity duration-500 ease-in-out opacity-100">
            <DataLookup />
          </div>
        )}
      </div>

      {currentPopup === 'setup' && (
        <div className="flex justify-between mt-4">
          <button
            onClick={clearData}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer"
          >
            Clear
          </button>
          <button
            onClick={() => setCurrentPopup('auton')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer"
          >
            Next: Autonomous
          </button>
        </div>
      )}
      {currentPopup === 'auton' && (
        <div className="flex justify-between mt-4">
          <button
            onClick={() => setCurrentPopup('setup')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer"
          >
            Previous
          </button>
          <button
            onClick={() => {
              setCurrentPopup('driver');
              logAction('CUT_TO_TELEOP');
            }}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer"
          >
            Next: Teleop
          </button>
        </div>
      )}
      {currentPopup === 'endgame' && (
        <div className="flex justify-between mt-4">
          <button
            onClick={() => setCurrentPopup('driver')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPopup('review')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer"
          >
            Next: Review
          </button>
        </div>
      )}
      {currentPopup === 'dmode' && (
        <div className="flex justify-between mt-4">
          <button
            onClick={() => setCurrentPopup('driver')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPopup('endgame')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer"
          >
            Next: Endgame
          </button>
        </div>
      )}
      {currentPopup === 'driver' && (
        <div className="flex justify-between mt-4">
          <button
            onClick={() => setCurrentPopup('auton')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={() => incrementValue('amplifiedNotesAuton')}
            className={`bg-transparent text-white font-bold uppercase border-2 px-6 py-3 rounded cursor-pointer ${
              showCountdown ? 'bg-orange-500 border-orange-500' : 'border-white'
            }`}
          >
            Amplified
            {showCountdown && <span className="ml-2">{countdownTime}</span>}
          </button>
          <button
  type="button"
  onClick={() => setBrokenBot(!brokenBot)}
  className={`bg-transparent text-white font-bold uppercase border-2 px-6 py-3 rounded cursor-pointer ${
    brokenBot ? 'bg-red-500 border-red-500' : 'border-white'
  }`}
>
  Broken Bot
</button>
<button
  onClick={() => {
    setCurrentPopup('dmode');
    logAction('dmode');
  }}
  className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer"
>
  Next: DMODE
</button>
</div>
)}
{currentPopup === 'review' && (
<div className="flex justify-between mt-4">
<button
  onClick={() => setCurrentPopup('endgame')}
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
)}

</div>
);
};

export default App;