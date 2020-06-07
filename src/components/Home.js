
import React from 'react';
import '../App.css'
import Projects from './Projects'
import profile from '../imgs/profileLight.svg'
import profileBeard from '../imgs/profileBeardLight.svg'
import vector from '../imgs/vectorLight.png'
import Education from './Education';
import Experience from './Experience'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer';
import FloatingActiveButton from './FloatingActiveButton'

const Home = () => {

return(
    <div className="background">
    <div className="home">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="profilePicture">
        <img className="profileImg bottom" src={profile} alt="profileNoBeard"/>
        <img className="profileImg top" src={profileBeard} alt="profileBeard"/>
    </div>
    <div className="container introName">
        <br></br>
        <div className="fullName">
        <div className="im">&nbsp;I'm ,</div>
        <div className="myName">&lt;Vedadnya Jadhav/><div className="blink_me">_</div></div>
        </div>
        <br></br>
        <h6>
        I have explored the world of Full Stack Development for quite a while , enough for me to say it has turned into a passion for me now . I have extensively researched courses that cater to my passion, and I believe that Master in Computer Science course at the Stevens Institute of Technology is ideally suited to my academic and professional ambitions and it  is proven to be right until now . I am confident that my experience and dedication will enable me to excel at my career.
        </h6>
        <br></br>
        <br></br>
        <br></br>
    </div>

    <div className="container vectorDiv">
        <img className="vectorImg" src={vector} alt="vectorImg"/>
    </div>
    <FloatingActiveButton/>
    <div id="projects">
        <Projects/>
    </div>
    <div id="experience">
        <Experience/>
    </div>
    <div id="education">
        <Education/>
    </div>
    <div id="skills">
        <Skills/>
    </div>
    <div id="contact">
        <Contact/>
    </div>
    <Footer/>
    </div>
    </div>
)
}

export default Home;