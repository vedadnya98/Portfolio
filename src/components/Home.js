
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
    <div className="home">
    <div className="profilePicture">
        <img className="profileImg bottom" src={profile} />
        <img className="profileImg top" src={profileBeard} />
    </div>
    <div className="container introName">
        <h1> Hi , I'm &lt;Vedadnya/&gt;</h1>
        <br></br>
        <h6>
        I'm a graduate student at Stevens Institute of Technology
        </h6>
        <h6>
        I took my first step by choosing Computer Science as a subject for my Higher Secondary School Classes. This subject gave me a comprehensive overview of the basics of Computers. The knowledge acquired in this duration prepared me for my further undergraduate degree. I went on to secure my Bachelor’s Degree from SIES GST (Mumbai) in Computer Sciences. My course was instrumental in showcasing the wondrous new avenues in Computer Sciences
        </h6>
        <h6>
        I have explored the world of Full Stack Development for quite a while , enough for me to say it has turned into a passion for me now . I have extensively researched courses that cater to my passion, and I believe that Master in Computer Science course at the Stevens Institute of Technology is ideally suited to my academic and professional ambitions and it  is proven to be right until now . I am confident that my experience and dedication will enable me to excel at my career.
        </h6>
        <br></br>
        <br></br>
        <br></br>
    </div>
    <div className="container vectorDiv">
        <img className="vectorImg" src={vector}/>
    </div>
    <FloatingActiveButton/>
    <Projects id="projects"/>
    <Education id="education"/>
    <Experience id="experience"/>
    <Skills id="skills"/>
    <Contact id="contact"/>
    <Footer/>
    </div>
)
}

export default Home;