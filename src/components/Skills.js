import React , {useState , useEffect} from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../App.css'
import 'firebase/firestore';
import { getSkills } from '../firebase/FirestoreFunctions'



const Skills = () => {
    const [languages  , setLanguages] = useState();
    const [frameworks , setFrameworks] = useState();
    const [loading , setLoading] = useState(true);
    useEffect(() => {
		async function getData() {
			try {
                let skillObj = await  getSkills()
                setLanguages(skillObj["languages"]);
                setFrameworks(skillObj["frameworks"]);
				setLoading(false)
			} catch (e) {
				console.log(e)
			}
		}
		getData();
    }, [])
    if(!loading){
                return(
                        <div className="background">
                            <div className="sectionTitle">
                            <p>Skills</p>
                            <br></br>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <div id="skills" className="skills container">
                            <div className="languages">
                            <h3>Scripting and Programming Languages</h3>
                            <div className="row">
                            {Object.keys(languages).map((key , i) => {
                                        return(
                                            <div key={"languages"+i}>
                                             <div className="skillItem col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2">
                                                    <div className="circleSkills">
                                                        <CircularProgressbarWithChildren value={languages[key][0]} strokeWidth={17}
                                                        styles={{
                                                            root: {},
                                                            path: {
                                                                    stroke: `#0470FF`,
                                                                    strokeLinecap: 'butt',
                                                            },
                                                            background: {
                                                            fill: '#FFFFFF',
                                                            },
                                                        }}
                                                        >
                                                                <div className="skillLogo">
                                                                    <img src={languages[key][1]} alt="languageLogo"/>
                                                                </div>
                                                        </CircularProgressbarWithChildren>
                                                    </div>
                                                    <h5>{languages[key][0]} %</h5>
                                                    <h6>{key}</h6>
                                             </div>
                                            </div>
                                        )})}
                                    </div>              
                            </div>
                            <div className="frameworks">
                            <h3>Frameworks and Technologies</h3>
                            <div className="row">
                                {Object.keys(frameworks).map((key , i) => {
                                    return(
                                        <div key={"frameworks"+i}>
                                                <div className="skillItem col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2">
                                                    <div className="circleSkills">
                                                        <CircularProgressbarWithChildren value={frameworks[key][0]} strokeWidth={17}
                                                        styles={{
                                                            root: {},
                                                            path: {
                                                                    stroke: `#0470FF`,
                                                                    strokeLinecap: 'butt',
                                                            },
                                                            background: {
                                                            fill: '#FFFFFF',
                                                            },
                                                        }}
                                                        >
                                                                <div className="skillLogo">
                                                                    <img src={frameworks[key][1]} alt="languageLogo"/>
                                                                </div>
                                                        </CircularProgressbarWithChildren>
                                                    </div>
                                                    <h5>{frameworks[key][0]} %</h5>
                                                    <h6>{key}</h6>

                                             </div>
                                        </div>
                                    )})}
                                    </div>
                                    </div>
                                    </div>
                            </div>
                      )
                }
    else{
        return(
            <div></div>
        )
    }
}

export default Skills;
