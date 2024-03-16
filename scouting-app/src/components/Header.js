import React from 'react';

const Header = ({ title, timer, handleStartStop, isActive, handleHomeClick }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="w-20 h-20 mr-2 rounded-lg" />
        <div>
          <h1 className="text-2xl font-bold">649 Scouting</h1>
          <code className="text-sm">V4.4 • TRAINING</code>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="text-2xl font-bold">{timer}</div>
        <button
          onClick={handleStartStop}
          className="bg-transparent text-white font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer"
        >
          {isActive ? 'Stop' : 'Go'}
        </button>
        <button
          onClick={handleHomeClick}
          className="bg-transparent text-white font-bold uppercase border-2 border-white px-4 py-2 rounded cursor-pointer"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Header;