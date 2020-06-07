import React , {useState , useEffect} from 'react';
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
                            {Object.keys(languages).map((key , i) => {
                                    let style = {
                                        width:languages[key][0]
                                    }
                                        return(
                                            <div key={"languages"+i}>
                                            <div className="row">
                                            <div className="skillName col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                                            <div className="skillLogo">
                                                <img src={languages[key][1]} alt="languageLogo"/>
                                            </div>
                                            <h5>{key}</h5>
                                            </div>
                                            <div className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11">
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={style} aria-valuenow={languages[key][0]} aria-valuemin="0" aria-valuemax="100">{languages[key][0]}</div>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                        )})}
                            </div>
                            <div className="frameworks">
                            <h3>Frameworks and Technologies</h3>
                                {Object.keys(frameworks).map((key , i) => {
                                    let style = {
                                        width:frameworks[key][0]
                                    }
                                    return(
                                        <div key={"frameworks"+i}>
                                            <div className="row">
                                            <div className="skillName col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                                            <div className="skillLogo">
                                                <img src={frameworks[key][1]} alt="frameworkLogo"/>
                                            </div>
                                            <h5>{key}</h5>
                                            </div>
                                            <div className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11">
                                            <div className="progress">
                                                <div className="progress-bar" style={style} role="progressbar" aria-valuenow={frameworks[key][0]} aria-valuemin="0" aria-valuemax="100">{frameworks[key][0]}</div>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                    )})}
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
