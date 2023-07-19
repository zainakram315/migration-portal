import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from '../images/logo.png';

import illustrationImage from '../images/g3.png';
import '../styles/saas.css'; // Import the Saas CSS file

const Saas = () => {
  const navigate = useNavigate();

  const handleExportButtonClick = () => {
    navigate('/saasoptions-page'); // Navigates to '/export-page' when the Export button is clicked
  };

  return (
    <div className="saas-page">
      <div className="saas-content-container">
        <div className="saas-illustration">
          <img src={illustrationImage} alt="Illustration" />
        </div>
        <div className="saas-card">
          <div className="saas-logo-container">
            <img src={logoImage} alt="Logo" className="saas-logo" />
          </div>
          <div className="saas-card-content">
            <h2 className="saas-heading">Welcome!</h2>
            <div className="saas-button-container">
              <button className="saas-curved-button" onClick={handleExportButtonClick}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saas;
