import React from 'react';

const DriverPopup = ({ formData, handleInputChange, incrementValue, decrementValue, handleStageChange, submitData }) => {
  return (
    <div className="bg-cyan-700 p-4 rounded">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <button
            type="button"
            onClick={() => incrementValue('speakersFailedTeleop')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer w-full"
          >
            Speaker (Fail)
            <span className="block">{formData.speakersFailedTeleop}</span>
          </button>
          <button
            type="button"
            onClick={() => incrementValue('ampsFailedTeleop')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer w-full mt-2"
          >
            Amp (Fail)
            <span className="block">{formData.ampsFailedTeleop}</span>
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => incrementValue('groundTeleop')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer w-full h-full"
          >
            Ground
            <span className="block">{formData.groundTeleop}</span>
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => incrementValue('speakersScoredTeleop')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer w-full"
          >
            Speaker (Score)
            <span className="block">{formData.speakersScoredTeleop}</span>
          </button>
          <button
            type="button"
            onClick={() => incrementValue('ampsScoredTeleop')}
            className="bg-transparent text-white font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer w-full mt-2"
          >
            Amp (Score)
            <span className="block">{formData.ampsScoredTeleop}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DriverPopup;