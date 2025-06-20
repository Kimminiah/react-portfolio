// src/components/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/about');
  };

  return (
    <div className="landing-page">
      <h1>Welcome to Patricia Gallego's Portfolio</h1>
      <p>Explore my work, skills, and projects!</p>
      <button onClick={handleEnter}>Enter</button>
    </div>
  );
};

export default LandingPage;
