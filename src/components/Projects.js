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
    }, [data])
    if(!loading){
                return(
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
                    <div key={i+"Project"} className='col-sm-12 col-md-6 col-lg-4'>
                    <div class="card">
                        <div class="project-card">
                            <div class="card-image">
                                <img src={item.img} alt="Avatar"/>
                                <br></br>
                                <br></br>
                                <br></br>
                                <h3 className="card-title">{item.title}</h3>
                            </div>
                            <div class="project-card-back">
                            <div className="container">
                            <br></br>
                            <br></br>
                            <br></br>
                            <div class="card-description">{item.description}</div>
                            <br></br>
                            <br></br>
                            <br></br>
                            {item.code?(<a href= {item.code} className="btn">Code <i className="fas fa-chevron-circle-right"></i></a>):<p></p>}
                            {item.live?(<a href= {item.live} className="btn">Visit <i className="fas fa-chevron-circle-right"></i></a>):<p></p>}
                        
                            {/* <h5 className="card-title">Technologies</h5>
                            {item.technologies ? item.technologies.map((tech , t) => {
                            return (
                                        <button key={t+"Technology"} className="listButton">{tech}</button>
                            )}):<p></p>}
                            <h5 className="card-title">Frameworks</h5>
                            {item.frameworks ? item.frameworks.map((framework , f) => {
                            return (
                                    <button key={f+"Framework"} className="listButton">{framework}</button>
                            )}):<p></p>} */}
                            </div>
                            </div>
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