import React , {useState , useEffect} from 'react';
import '../App.css'
const data = require('./data')

const Projects = () => {
    const [projects  , setProjects] = useState();
    const [loading , setLoading] = useState(true);
    useEffect(() => {
		async function getData() {
			try {
                let projectList = data.ProjectCards
                console.log(projectList)
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
                    <div className="projects">
                    <h2>Projects</h2>
                    <br></br>
                    <br></br>
                    <div className="row">
                    {projects ? projects.map((item , i) => {
				    return (
                    <div key={i+"Project"} className='col-sm-12 col-md-6 col-lg-4'>
                    <div className="card promoting-card">
                    <div class="card-image">    
                        <img className="card-img-top" src={item.img} alt="Card image cap"/>
                    </div>
                        <div className="container">
                            <h3 className="card-title">item.title</h3>
                            <p className="card-text">item.description</p>
                            <h5 className="card-title">Technologies</h5>
                        {item.technologies ? item.technologies.map((tech , t) => {
				         return (
                                    <ul key={t+"Technology"} className="list-group list-group-flush">
                                        <li className="list-group-item">{tech}</li>
                                    </ul>
                         )}):<p></p>}
                        <h5 className="card-title">Frameworks</h5>
                        {item.frameworks ? item.frameworks.map((framework , f) => {
                        return (
                                <ul key={f+"Framework"} className="list-group list-group-flush">
                                    <li className="list-group-item">{framework}</li>
                                </ul>
                        )}):<p></p>}
                        </div>
                    </div>
                    </div>
                    )}):<p></p>}
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