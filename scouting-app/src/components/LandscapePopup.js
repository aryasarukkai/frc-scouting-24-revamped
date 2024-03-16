import React, { useState, useEffect, useRef } from 'react';

const LandscapePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  const handleDismiss = () => {
  if (popupRef.current) {
    // Add a class to trigger the exit animation
    popupRef.current.classList.add('animate-popup-exit');

    // Wait for the animation to complete before hiding the popup
    setTimeout(() => {
      setShowPopup(false);
    }, 300); // Adjust the delay if needed to match the animation duration
  }
};

  useEffect(() => {
    const handleAnimationEnd = () => {
      if (popupRef.current) {
        popupRef.current.style.opacity = '1';
      }
    };

    const handleOrientationChange = () => {
      const isPortrait = window.matchMedia('(orientation: portrait)').matches;
      setShowPopup(isPortrait);
    };

    handleOrientationChange(); // Check initial orientation

    if (popupRef.current) {
      popupRef.current.addEventListener('animationend', handleAnimationEnd);
    }

    window.addEventListener('resize', handleOrientationChange);

    return () => {
      if (popupRef.current) {
        popupRef.current.removeEventListener('animationend', handleAnimationEnd);
      }
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div
            ref={popupRef}
            className={`bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-lg p-6 text-center shadow-lg transform transition-all duration-300 ease-in-out scale-90 opacity-0 animate-popup`}
          >
            <h2 className="text-2xl font-bold mb-4 text-white">Landscape Mode</h2>
            <p className="mb-6 text-white">This app is better/designed for use in landscape mode.</p>
            <button onClick={handleDismiss} className="bg-blue-500 text-white px-4 py-2 rounded">
              Dismiss
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LandscapePopup;