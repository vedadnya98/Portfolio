import React , {useState , useEffect} from 'react';
import '../App.css'
import profile from '../imgs/profile.svg'
const data = require('./data')

const Education = () => {
    const [education  , setProjects] = useState();
    const [loading , setLoading] = useState(true);
    useEffect(() => {
		async function getData() {
			try {
                let educationList = data.ProjectCards
                console.log(educationList)
				setProjects(educationList);
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
                            <div class="card card-profile">
                            <div class="card-avatar">
                                <a href="#"> <img class="img" src={profile}/> </a>
                            </div>
                            <div class="table">
                                <h4 class="card-caption">Patrick Wood</h4>
                                <h6 class="category text-muted">CEO / Co-Founder</h6>
                                <p class="card-description"> Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is... </p>
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

export default Education;