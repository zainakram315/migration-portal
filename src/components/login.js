import React from 'react';
import { useNavigate } from 'react-router-dom';
import userIcon from '../images/user.png';
import lockIcon from '../images/lock.png';
import g1Image from '../images/g1.svg';
import logoImage from '../images/logo.png';
import vectorImage from '../images/vectorImage.png';

import '../styles/login.css'; // Import the CSS file

const Login = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/imex-page');
  };

  return (
    <div className="login-page">
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="logo" />
      </div>
      <div className="g1-image">
        <img src={g1Image} alt="G1" />
      </div>
      <div className="card">
        <div className="card-content">
          <h2 className="heading">Apigee Migration<br />Portal</h2>
          <div>
            {/* White card with text fields and button */}
            <div className="input-container">
              <label htmlFor="username" className="input-label">User Name</label>
            </div>
            <div className="input-container">
              <input type="text" id="username" className="input" placeholder="Username"/>
              <img src={userIcon} alt="User" className="icon" />
            </div>

            <div className="input-container">
              <label htmlFor="password" className="input-label">Password</label>
            </div>
            <div className="input-container">
              <input type="password" id="password" className="input" placeholder="Password"/>
              <img src={lockIcon} alt="Lock" className="icon" />
            </div>
            <button className="curved-button" onClick={handleButtonClick}>
              Login
            </button>
            <img src={vectorImage} alt="Vector" className="vector" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
