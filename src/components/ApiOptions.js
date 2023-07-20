import React, {useState} from 'react'
import backwardImage from "../images/backward.png";
import notificationImage from "../images/notification.png";
import userIcon from "../images/user.png";
import { useNavigate } from 'react-router-dom';
import illustrationImage1 from "../images/illustrationImage.svg";
import logoImage from "../images/logo.png";
import vectorImage from "../images/vectorImage.png";
import "../styles/ApiOptions.css";

export default function ApiOptions() {
    const [selectedOption, setSelectedOption] = useState("Apigee-SaaS");
    const navigate = useNavigate();
    const previous = () => {
        navigate('/imex-page');
    };
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (selectedOption === "Apigee-SaaS") {
            navigate('/saas');
        } else if (selectedOption === "Apigee-OPDK") {
            navigate('/opdk');
        }
        else if (selectedOption === "Apigee-Hybrid") {
            navigate('/login');
        }
        else {
            navigate('/login');
        }

    };

    return (
        <div className="ApiOptions-page">
            <div className="container-fluid">
                <div className="row d-flex align-items-center justify-content-between custom-header py-3">
                    <div className="col-md-6 col-5 left-image" align="left">
                        <img
                            src={backwardImage}
                            alt="Return to previous page"
                            onClick={previous}
                            height="auto"
                            width="20px"
                        />
                    </div>
                    <div className="col-md-5 col-6" align="right">
                        <button className="curved-button-header">
                            <img
                                src={notificationImage}
                                alt="Notification"
                                height="20px"
                                width="20px"
                            />
                        </button>
                        <button className="curved-button-header">
                            <img src={userIcon} alt="user1" height="20px" width="20px" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="illustration-image-options">
                <img src={illustrationImage1} alt="G1" /> 
                
            </div> 

                <div className="api-card">
                    <div className="image-logo-api">
                        <img src={logoImage} alt="Logo" className="logo-api" />
                    </div>
                    <div className="options-page">
                        <form onSubmit={handleFormSubmit}>
                            <label className="container-api-option">
                                <input
                                    type="radio"
                                    value="Apigee-SaaS"
                                    checked={selectedOption === "Apigee-SaaS"}
                                    onChange={handleOptionChange}
                                />
                                <span className="checkmark-api"></span>
                                Apigee SaaS
                            </label>
                            <label className="container-api-option">
                                <input
                                    type="radio"
                                    value="Apigee-OPDK"
                                    checked={selectedOption === "Apigee-OPDK"}
                                    onChange={handleOptionChange}
                                />
                                <span className="checkmark-api"></span>
                                Apigee OPDK
                            </label>
                            <label className="container-api-option">
                                <input
                                    type="radio"
                                    value="Apigee-Hybrid"
                                    checked={selectedOption === "Apigee-Hybrid"}
                                    onChange={handleOptionChange}
                                />
                                <span className="checkmark-api"></span>
                                Apigee Hybrid
                            </label>
                            <label className="container-api-option">
                                <input
                                    type="radio"
                                    value="Apigee-X"
                                    checked={selectedOption === "Apigee-X"}
                                    onChange={handleOptionChange}
                                />
                                <span className="checkmark-api"></span>
                                Apigee X
                            </label>
                            <br />
                            <button className="curved-button-apioption" type="submit">
                                Next
                            </button>
                            <img src={vectorImage} alt="Vector1" className="ImageVector" />
                        </form>
                    </div>

                </div>
            
        </div>
    );
}
