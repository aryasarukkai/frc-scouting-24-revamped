import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set } from 'firebase/database';
import SetupPopup from './components/SetupPopup';
import AutonPopup from './components/AutonPopup';
import Header from './components/Header';
import DriverPopup from './components/DriverPopup';
import ReviewAndSubmit from './components/ReviewAndSubmit';

import LandscapePopup from './components/LandscapePopup'; 
import DataLookup from './components/DataLookup';
import SuccessPopup from './components/SuccessPopup';
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
    speakersScoredAuton: 0,
    ampsScoredAuton: 0,
    speakersFailedTeleop: 0,
    ampsFailedTeleop: 0,
    groundTeleop: 0,
    speakersScoredTeleop: 0,
    ampsScoredTeleop: 0,
    notes: '',
  });

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
    const newSubmissionRef = push(ref(database, 'formData-test'));
    set(newSubmissionRef, formData)
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
          speakersScoredTeleop: 0,
          ampsScoredTeleop: 0,
          notes: '',
        });
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
      notes: '',
    });
  };

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
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  useEffect(() => {
    setTimer(currentPopup === 'auton' ? 15 : currentPopup === 'driver' ? 135 : 0);
    setIsActive(false);
  }, [currentPopup]);

  const handleStartStop = () => {
    setIsActive((prevActive) => !prevActive);
  };

  return (
    
    <div className="bg-blue-950 text-white p-4 rounded-lg min-h-screen flex flex-col">
      <LandscapePopup />
      <Header
        title={currentPopup === 'auton' ? 'Auton' : currentPopup === 'driver' ? 'Teleop' : ''}
        timer={formatTime(timer)}
        handleStartStop={handleStartStop}
        isActive={isActive}
        handleHomeClick={() => setCurrentPopup('home')}
      />

      {currentPopup === 'home' && (
        <div className="flex justify-center space-x-4 mb-4">
          <button
            onClick={() => window.location.reload()}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer"
          >
            Reload
          </button>
          <button
            onClick={() => setCurrentPopup('setup')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer"
          >
            Setup
          </button>
          <button
            onClick={() => setCurrentPopup('auton')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer"
          >
            Auton
          </button>
          <button
            onClick={() => setCurrentPopup('driver')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer"
          >
            Teleop
          </button>
          <button
            onClick={() => setCurrentPopup('dataLookup')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer"
          >
            Data Lookup
          </button>
        </div>
      )}
      {currentPopup === 'success' && (
 <SuccessPopup onClose={() => setCurrentPopup('home')} />
)}
      {currentPopup === 'setup' && (
        <SetupPopup
          formData={formData}
          handleInputChange={handleInputChange}
          handleNextPopup={() => setCurrentPopup('auton')}
        />
      )}
      {currentPopup === 'auton' && (
        <AutonPopup
          formData={formData}
          setFormData={setFormData}
          handleStageChange={setCurrentPopup}
        />
      )}
      {currentPopup === 'driver' && (
        <DriverPopup
          formData={formData}
          handleInputChange={handleInputChange}
          incrementValue={incrementValue}
          decrementValue={decrementValue}
          handlePrevPopup={() => setCurrentPopup('auton')}
          handleReviewAndSubmit={() => setCurrentPopup('review')}
        />
      )}
      {currentPopup === 'review' && (
        <ReviewAndSubmit
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={submitData}
          handleStageChange={setCurrentPopup}
        />
      )}
      {currentPopup === 'dataLookup' && <DataLookup />}
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
            onClick={() => setCurrentPopup('driver')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer"
          >
            Next: Teleop
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
            onClick={() => setCurrentPopup('review')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer"
          >
            Next: Review
          </button>
        </div>
      )}
    </div>
  );
};

export default App;