import React , {useState , useEffect} from 'react';
import '../App.css';
import 'firebase/firestore';
import { getProjects } from '../firebase/FirestoreFunctions'

const Projects = () => {
    const [projects  , setProjects] = useState();
    const [loading , setLoading] = useState(true);
    useEffect(() => {
		async function getData() {
			try {
                let projectObj = await getProjects();
                let projectList = projectObj['ProjectCards']
				setProjects(projectList);
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
                    <div className="projects">
                    <div className="sectionTitle">
                    <p>Projects</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="row contentDiv">
                    {projects ? projects.map((item , i) => {
				    return (
                    <div key={i+"Project"} className='col-sm-12 col-md-12 col-lg-6 col-xl-4'>
                    <div className="card">
                        <div className="project-card">
                            <div className="card-image">
                                <img src={item.img} alt="Avatar"/>
                                <br></br>
                                <br></br>
                                <br></br>
                                <h3 className="card-title">{item.title}</h3>
                            </div>
                            <div className="project-card-back">
                            <div className="container">
                            <br></br>
                            <br></br>
                            <br></br>
                            <div className="card-description">{item.description}</div>
                            <br></br>
                            <br></br>
                            <br></br>
                            {item.code?(<a rel="noopener noreferrer" target="_blank" href= {item.code} className="btn">Code <i className="fas fa-chevron-circle-right"></i></a>):<p></p>}
                            {item.live?(<a rel="noopener noreferrer" target="_blank" href= {item.live} className="btn">Visit <i className="fas fa-chevron-circle-right"></i></a>):<p></p>}
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    )}):<p></p>}
                    </div>
                    </div>
                    </div>
                )
                }
    else{
        return(
            <p>Loading....</p>
        )
    } 
}

export default Projects;