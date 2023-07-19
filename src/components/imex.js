import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from '../images/logo.png';
import illustrationImage from '../images/g3.png';
import backImage2 from '../images/backimage2.jpg'; // Import the second background image

import '../styles/imex.css'; // Import the CSS file

const Imex = () => {
  const navigate = useNavigate();

  const handleImportButtonClick = () => {
    navigate('/options-page'); // Navigates to '/import-page' when the Import button is clicked
  };

  const handleExportButtonClick = () => {
    navigate('/options-page'); // Navigates to '/export-page' when the Export button is clicked
  };

  return (
    <div className="imex-page">
      <div className="imex-right-background" style={{ backgroundImage: `url(${backImage2})` }}></div>
      <div className="imex-content-container">
        <div className="imex-illustration">
          <img src={illustrationImage} alt="Illustration" />
        </div>
        <div className="imex-card">
          <div className="imex-logo-container">
            <img src={logoImage} alt="Logo" className="imex-logo" />
          </div>
          <div className="imex-card-content">
            <h2 className="imex-heading">Welcome!</h2>
            <div className="imex-button-container">
              <button className="imex-curved-button" onClick={handleImportButtonClick}>
                Import
              </button>
              <button className="imex-curved-button" onClick={handleExportButtonClick}>
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imex;
