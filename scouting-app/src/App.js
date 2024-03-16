
import React, { useState, useEffect } from 'react';
import './App.css';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set } from 'firebase/database';
import SetupPopup from './components/SetupPopup';
import AutonPopup from './components/AutonPopup';
import DriverPopup from './components/DriverPopup';


const firebaseConfig = {
  apiKey: "AIzaSyAso045mvuwi4VgaqCFVBT0bz1u3_e9O9g",
  authDomain: "crescendo-scouting-app-649.firebaseapp.com",
  databaseURL: "https://crescendo-scouting-app-649-default-rtdb.firebaseio.com",
  projectId: "crescendo-scouting-app-649",
  storageBucket: "crescendo-scouting-app-649.appspot.com",
  messagingSenderId: "1043419769449",
  appId: "1:1043419769449:web:448a22c410c3efd37c50f8"
};


console.log("FRC 649 Scouting App");


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


const App = () => {
  const [currentStage, setCurrentStage] = useState('home');
  const [formData, setFormData] = useState({
    scoutName: '',
    matchNumber: '',
    teamNumber: '',
    allianceColor: '',
    preloadScored: false,
    notesCollectedAuton: 0,
    notesCollectedTeleop: 0,
    ampsPlayedAuton: 0,
    speakersPlayedAuton: 0,
    ampsPlayedTeleop: 0,
    unamplifiedSpeakersPlayedTeleop: 0,
    amplifiedSpeakersPlayedTeleop: 0,
    harmonized: false,
    spotlight: false,
    buddyClimb: false,
    notes: '',
    scoredSpeakers: 0,
    scoredAmps: 0,
  });
  const handleStageChange = (stage) => {
    setCurrentStage(stage);
  };
  const [currentPopup, setCurrentPopup] = useState('home');

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

  const [submissionRef, setSubmissionRef] = useState(null);

  const submitData = () => {
    if(currentStage !== 'home') {
    if (submissionRef) {
      set(submissionRef, formData)
        .catch((error) => {
          console.error('Error updating data:', error);
          alert('Failed to update data. Please try again.');
        });
    } else {
      const dataRef = ref(database, 'formData-test');
      const newSubmissionRef = push(dataRef);
      set(newSubmissionRef, formData)
        .then(() => {
          setSubmissionRef(newSubmissionRef);
        })
        .catch((error) => {
          console.error('Error saving data:', error);
          alert('Failed to submit data. Please try again.');
        });
    }
  } else {
    console.log("no active stage");
  }
  };

  useEffect(() => {
    const delay = 500;
    const timeoutId = setTimeout(() => {
      // Only submit data if not on the 'home' stage
      if (currentPopup !== 'home') {
        submitData();
      }
    }, delay);

    // Return a cleanup function to clear the timeout
    return () => clearTimeout(timeoutId);
  }, [formData, currentPopup]);

  const clearData = () => {
    setFormData((prevData) => ({
      ...prevData,
      matchNumber: '',
      teamNumber: '',
      notesCollectedAuton: 0,
      notesPlayedAuton: 0,
      notesCollectedTeleop: 0,
      notesPlayedTeleop: 0,
      amplifiedSpeakersPlayedTeleop: 0,
      unamplifiedSpeakersPlayedTeleop: 0,
      spotlight: false,
      harmonized: false,
      preloadScored: false,
      scoredSpeakers: 0,
      scoredAmps: 0,
      buddyClimb: false,
      notes: '',
    }));
    setSubmissionRef(null);
  };

  const handleNextPopup = () => {
    if (currentPopup === 'setup') {
      setCurrentPopup('auton');
    } else if (currentPopup === 'auton') {
      setCurrentPopup('driver');
    }
  };

  const handlePrevPopup = () => {
    if (currentPopup === 'driver') {
      setCurrentPopup('auton');
    } else if (currentPopup === 'auton') {
      setCurrentPopup('setup');
    }
  };

  return (
    <div className="App">
      <div className="header">
        <img src="logo.png" alt="Logo" width="80px" height="80px" />
        <h1>649 Scouting <br /><code>V3 • DEMO</code></h1>
      </div>
      <h1>FRC Crescendo</h1>
  
      {/* Render buttons only when in 'home' stage */}
      {currentPopup === 'home' && (
        <div className="button-container">
          <button onClick={() => setCurrentPopup('setup')}>Setup</button>
          <button onClick={() => setCurrentPopup('auton')}>Auton</button>
          <button onClick={() => setCurrentPopup('driver')}>Teleop</button>
        </div>
      )}
  
      {/* Conditional rendering based on currentPopup state */}
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
    setFormData={setFormData} // Pass the setFormData function as a prop
    handleStageChange={handleStageChange}
  />
)}
      {currentPopup === 'driver' && (
        <DriverPopup
          formData={formData}
          handleInputChange={handleInputChange}
          incrementValue={incrementValue}
          decrementValue={decrementValue}
          handlePrevPopup={() => setCurrentPopup('auton')}
          submitData={submitData}
        />
      )}
  
      {/* Submit button might be rendered conditionally or always visible based on your application's flow */}
      {currentPopup !== 'home' && (
        <button type="button" onClick={submitData} className="submit-button">
          Submit
        </button>
      )}
    </div>
  );
  
};

export default App;