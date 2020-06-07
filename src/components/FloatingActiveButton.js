import React from 'react';
import '../App.css'

const FloatingActiveButton = () => {
    return(
            <div className="fab-container">
                <div className="fab fab-icon-holder mainFab">
                    <img src="https://img.icons8.com/ios-filled/96/000000/navigation.png" alt="navButton"/>
                </div>
                    <ul className="fab-options">
                        <li>
                            <span className="fab-label label1">Projects</span>
                            <a href="#projects">
                            <div className="fab-icon-holder iconNo1">
                                <i className="fas fa-laptop-code"></i>
                            </div>
                            </a>
                        </li>
                        <li>
                            <span className="fab-label label2">Experienece</span>
                            <a href="#experience">
                            <div className="fab-icon-holder iconNo2">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            </a>
                        </li>
                        <li>
                            <span className="fab-label label3">Education</span>
                            <a href="#education">
                            <div className="fab-icon-holder iconNo3">
                                <i className="fas fa-user-graduate"></i>
                            </div>
                            </a>
                        </li>
                        <li>
                            <span className="fab-label label4">Skills</span>
                            <a href="#skills">
                            <div className="fab-icon-holder iconNo4">
                                <i className="fas fa-code"></i>
                            </div>
                            </a>
                        </li>
                        <li>
                            <span className="fab-label label5">Contact</span>
                            <a href="#contact">
                            <div className="fab-icon-holder iconNo5">
                                <i className="far fa-address-book"></i>
                            </div>
                            </a>
                        </li>
                    </ul>
            </div>
        )
}

export default FloatingActiveButton;