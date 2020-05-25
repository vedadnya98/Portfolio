
import React from 'react';
import '../App.css'
import Projects from './Projects'
import profile from '../imgs/profile.svg'
import profileBeard from '../imgs/profileBeard.svg'
import Education from './Education';


const Home = () => {
return(
    <div className="home">
    <div className="profilePicture">
        <img className="profileImg bottom" src={profile} />
        <img className="profileImg top" src={profileBeard} />
    </div>
    <div className="introName">
        <h1>Hi , I am Vedadnya</h1>
        <br></br>
        <p>
            Intro
        </p>
    </div>
    <Projects/>
    <Education/>
    </div>
)
}

export default Home;