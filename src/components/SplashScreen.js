import React from 'react';
import '../styles/SplashScreen.css';
import splashImg from '../assets/splash.jpg'; // ✅ Import from src/assets

function SplashScreen() {
  return (
    <div
      className="splash-screen"
      style={{ backgroundImage: `url(${splashImg})` }} // ✅ Set dynamically
    >
      <h1 className="splash-heading">
        College Event & Club Management System
      </h1>
    </div>
  );
}

export default SplashScreen;



