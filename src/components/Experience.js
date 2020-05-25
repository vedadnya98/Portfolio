import React , {useState , useEffect} from 'react';
import '../App.css'
const data = require('./data')

const Experience = () => {
    const [experience  , setProjects] = useState();
    const [loading , setLoading] = useState(true);
    useEffect(() => {
		async function getData() {
			try {
                let experienceList = data.ProjectCards
                console.log(experienceList)
				setProjects(experienceList);
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

export default Experience;