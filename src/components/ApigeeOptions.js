import React, { useState } from "react";
import "../styles/newlogin.css";
import notificationImage from "../images/notification.png";
import userIcon from "../images/user.png";
import backwardImage from "../images/backward.png";
import "../styles/CenteredCard.css";
import logoImage from "../images/logo.png";
import vectorImage from "../images/vectorImage.png";
import { useNavigate } from 'react-router-dom';
import "../styles/RadioButtons.css";
import illustrationImage from "../images/illustrationImage.svg";

export default function ApigeeOptions() {
    const [selectedOption, setSelectedOption] = useState("Apigee-SaaS");
    const navigate = useNavigate();
    const gotoPrevious = () => {
        navigate('/login');
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (selectedOption === "Apigee-SaaS") {
            navigate('/login');
        } else if (selectedOption === "Apigee-OPDK") {
            navigate('/login');
        }
        else if (selectedOption === "Apigee-Hybrid") {
            navigate('/login');
        }
        else {
            navigate('/login');
        }

    };
    return (
        <div className="Apigee-Options-Page">
            <div className="container-fluid">
                <div className="row d-flex align-items-center justify-content-between navbar-custom py-3">
                    <div className="col-md-6 col-5 left-options" align="left">
                        <img
                            src={backwardImage}
                            alt="Return to previous page"
                            onClick={gotoPrevious}
                            height="auto"
                            width="20px"
                        />
                    </div>
                    <div className="col-md-5 col-6 right-options" align="right">
                        <button className="curved-button-nav">
                            <img
                                src={notificationImage}
                                alt="Notification"
                                height="20px"
                                width="20px"
                            />
                        </button>
                        <button className="curved-button-nav">
                            <img src={userIcon} alt="user1" height="20px" width="20px" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="illustration-image">
                <img src={illustrationImage} alt="G1" />
            </div>
            <div className="centered-card">
                <div className="card">
                    <div className="image-logo">
                        <img src={logoImage} alt="Logo" className="logo" />
                    </div>
                    <div>
                        <form onSubmit={handleFormSubmit}>
                            <label className="container">
                                <input
                                    type="radio"
                                    value="Apigee-SaaS"
                                    checked={selectedOption === "Apigee-SaaS"}
                                    onChange={handleOptionChange}
                                />
                                <span className="checkmark"></span>
                                Apigee SaaS
                            </label>
                            <label className="container">
                                <input
                                    type="radio"
                                    value="Apigee-OPDK"
                                    checked={selectedOption === "Apigee-OPDK"}
                                    onChange={handleOptionChange}
                                />
                                <span className="checkmark"></span>
                                Apigee OPDK
                            </label>
                            <label className="container">
                                <input
                                    type="radio"
                                    value="Apigee-Hybrid"
                                    checked={selectedOption === "Apigee-Hybrid"}
                                    onChange={handleOptionChange}
                                />
                                <span className="checkmark"></span>
                                Apigee Hybrid
                            </label>
                            <label className="container">
                                <input
                                    type="radio"
                                    value="Apigee-X"
                                    checked={selectedOption === "Apigee-X"}
                                    onChange={handleOptionChange}
                                />
                                <span className="checkmark"></span>
                                Apigee X
                            </label>
                            <br />
                            <button className="curved-button" type="submit">
                                Next
                            </button>
                            <img src={vectorImage} alt="Vector" className="vector" />
                        </form>



                    </div>
                </div>
            </div>
        </div>
    );
}