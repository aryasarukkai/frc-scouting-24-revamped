import React from 'react';

const Header = ({ title, timer }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="w-20 h-20 mr-2 rounded-lg" />
        <div>
          <h1 className="text-2xl font-bold">649 Scouting</h1>
          <code className="text-sm">V3 • DEMO</code>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        {timer && <div className="text-2xl font-bold">{timer}</div>}
      </div>
    </div>
  );
};

export default Header;