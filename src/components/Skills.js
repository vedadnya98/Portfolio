import React , {useState , useEffect} from 'react';
import '../App.css'
const data = require('./data')


const Skills = () => {
    const [skills  , setProjects] = useState();
    const [loading , setLoading] = useState(true);
    useEffect(() => {
		async function getData() {
			try {
                let skillList = data.ProjectCards
                console.log(skillList)
				setProjects(skillList);
				setLoading(false)
			} catch (e) {
				console.log(e)
			}
		}
		getData();
    }, [])
    if(!loading){
                return(
                        <div className="skills">
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