import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set } from 'firebase/database';
import './index.css';
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

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const App = () => {
  const [currentPopup, setCurrentPopup] = useState('home');
  const [formData, setFormData] = useState({
    // Your form data state
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

  const [submissionRef, setSubmissionRef] = useState(null);

  const submitData = () => {
    // Your submit data logic
  };

  useEffect(() => {
    // Your useEffect logic
  }, [formData, currentPopup]);

  const clearData = () => {
    // Your clear data logic
  };

  return (
    <div className="bg-blue-900 min-h-screen text-white p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">649 Scouting</h1>
        <p className="text-sm">V3 • DEMO</p>
        <h2 className="text-4xl font-bold">FRC Crescendo</h2>
      </div>

      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold">2024</h3>
        <img src="logo.png" alt="Logo" className="w-64 h-64" />
      </div>

      {currentPopup === 'home' && (
        <div className="flex justify-center space-x-4">
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
        </div>
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
          submitData={submitData}
        />
      )}

      {currentPopup !== 'home' && (
        <button
          type="button"
          onClick={submitData}
          className="bg-transparent text-white font-bold uppercase border-2 border-white px-6 py-3 rounded cursor-pointer mt-4"
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default App;