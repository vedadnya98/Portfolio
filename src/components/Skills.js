import React , {useState , useEffect} from 'react';
import '../App.css'
const data = require('./data')


const Skills = () => {
    const [languages  , setLanguages] = useState();
    const [frameworks , setFrameworks] = useState();
    const [loading , setLoading] = useState(true);
    useEffect(() => {
		async function getData() {
			try {
                let skillObj = data.Skills
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
                        <div>
                            <div className="sectionTitle">
                            <p>Skills</p>
                            <br></br>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <div className="skills container">
                            <div className="languages">
                            <h3>Scripting and Programming Languages</h3>
                            {Object.keys(languages).map((key , i) => {
                                        return(
                                            <div>
                                            <h5>{key}</h5>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" aria-valuenow={languages[key]} aria-valuemin="0" aria-valuemax="100">{languages[key]} %</div>
                                            </div>
                                            </div>
                                        )})}
                            </div>
                            <div className="frameworks">
                            <h3>Frameworks and Technologies</h3>
                                {Object.keys(frameworks).map((key , i) => {
                                    return(
                                        <div>
                                        <h5>{key}</h5>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" aria-valuenow={frameworks[key]} aria-valuemin="0" aria-valuemax="100">{frameworks[key]} %</div>
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