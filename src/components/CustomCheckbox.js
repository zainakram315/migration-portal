import React from "react";
import notificationImage from "../images/notification.png";
import userIcon from "../images/user.png";
import backwardImage from "../images/backward.png";
import logoImage from "../images/logo.png";
import vectorImage from "../images/vectorImage.png";
import { useNavigate } from 'react-router-dom';
import illustrationImage from "../images/illustrationImage.svg";
import "../styles/CustomCheckbox.css";

export default function CustomCheckbox() {

    const navigate = useNavigate();
    const migrateData=() =>{
        navigate('/ApigeeOptions')
    }
    const gotoPrevious = () => {
        navigate('/ApigeeOptions');
    };
    return (
        <div className="Apigee-Checkbox-Page">
            <div className="container-fluid">
                <div className="row d-flex align-items-center justify-content-between navbar-custom py-3">
                    <div className="col-md-6 col-5 left-options-checkbox" align="left">
                        <img
                            src={backwardImage}
                            alt="Return to previous page"
                            onClick={gotoPrevious}
                            height="auto"
                            width="20px"
                        />
                    </div>
                    <div className="col-md-5 col-6" align="right">
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
            <div className="checkbox-illustration-image">
                <img src={illustrationImage} alt="G1" />
            </div>
            <div className="centered-card-check">
                <div className="checkbox-card">
                    <div className="image-logo">
                        <img src={logoImage} alt="Logo" className="checkbox-logo" />
                    </div>

                    <div className="custom-checkkbox">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <label class="containerCheck">
                                    <input type="checkbox" checked="checked" />
                                    <span class="checkmarkCheck"></span>
                                    Apps
                                </label>
                                <label class="containerCheck">
                                    <input type="checkbox" />
                                    <span class="checkmarkCheck"></span>
                                    Companies
                                </label>
                                <label class="containerCheck">
                                    <input type="checkbox" />
                                    <span class="checkmarkCheck"></span>
                                    Developers
                                </label>
                                <label class="containerCheck">
                                    <input type="checkbox" />
                                    <span class="checkmarkCheck"></span>
                                    Environmental KVMs
                                </label>
                                <label class="containerCheck">
                                    <input type="checkbox" />
                                    <span class="checkmarkCheck"></span>
                                    Organizational KVMs
                                </label>
                                <label class="containerCheck">
                                    <input type="checkbox" />
                                    <span class="checkmarkCheck"></span>
                                    Proxy KVMs
                                </label>
                            </div>
                            <br />
                            <div className="col-md-6">
                                <label class="containerCheck">
                                    <input type="checkbox" />
                                    <span class="checkmarkCheck"></span>
                                    Companies
                                </label>
                                <label class="containerCheck">
                                    <input type="checkbox" />
                                    <span class="checkmarkCheck"></span>
                                    Developers
                                </label>
                                <label class="containerCheck">
                                    <input type="checkbox" />
                                    <span class="checkmarkCheck"></span>
                                    Shared Flows
                                </label>
                                <label class="containerCheck">
                                    <input type="checkbox" />
                                    <span class="checkmarkCheck"></span>
                                    Target Servers
                                </label>
                                <label class="containerCheck">
                                    <input type="checkbox" />
                                    <span class="checkmarkCheck"></span>
                                    All
                                </label>
                                <br/>
                            <img src={vectorImage} alt="Vector" className="vector" />
                            </div>
                            <button className="curved-button" onClick={migrateData}>
                                Next
                            </button>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
