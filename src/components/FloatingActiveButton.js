import React from 'react';
import '../App.css'
const logo = require('../imgs/arc.svg')

const FloatingActiveButton = () => {
    return(
            <div className="fab-container">
                <div className="fab fab-icon-holder">
                    <img className="mainFab" src={logo}></img>
                </div>
                    <ul className="fab-options">
                        <li>
                            <span className="fab-label ">Projects</span>
                            <div className="fab-icon-holder ">
                                <i className="fas fa-laptop-code"></i>
                            </div>
                        </li>
                        <li>
                            <span className="fab-label ">Education</span>
                            <div className="fab-icon-holder ">
                                <i className="fas fa-user-graduate"></i>
                            </div>
                        </li>
                        <li>
                            <span className="fab-label ">Experienec</span>
                            <div className="fab-icon-holder ">
                                <i className="fas fa-briefcase"></i>
                            </div>
                        </li>
                        <li>
                            <span className="fab-label ">Hobbies</span>
                            <div className="fab-icon-holder 3">
                                <i className="fas fa-futbol"></i>
                            </div>
                        </li>
                        <li>
                            <span className="fab-label ">Contact</span>
                            <div className="fab-icon-holder ">
                                <i className="far fa-address-book"></i>
                            </div>
                        </li>
                    </ul>
            </div>
        )
}

export default FloatingActiveButton;