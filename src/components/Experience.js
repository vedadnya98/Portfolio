import React , {useState , useEffect} from 'react';
import '../App.css'
const data = require('./data')

const Experience = () => {
    const [experience  , setExperience] = useState();
    const [loading , setLoading] = useState(true);
    useEffect(() => {
		async function getData() {
			try {
                let experienceList = data.Experience
                console.log(experienceList)
				setExperience(experienceList);
				setLoading(false)
			} catch (e) {
				console.log(e)
			}
		}
		getData();
    }, [])
    if(!loading){
                return(
                        <div className="experience">
                            <div className="sectionTitle">
                            <p>Experience</p>
                            <br></br>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <div className="container experienceDiv">
                            {experience ? experience.map((item , i) => {
                            if(i<experience.length-1)
                            {
                            return ( 
                                <div key={i+"Experience"}>
                                <div className="row">
                                <div className="col-sm-3 col-md-3 col-lg-3 expImageDiv">
                                    <img className="expImage" src={item.img}></img>
                                </div>
                                <div className="col-sm-9 col-md-9 col-lg-9 expTextDiv">
                                        <h3 class="card-caption expText">{item.position}</h3>
                                        <h4 class="card-caption expText">{item.company}</h4>
                                        <h6 class="category text-muted expText">{item.address}</h6>
                                        <p class="gpa expText">{item.tenure}</p>
                                        <br></br>
                                        {item.description ? item.description.map((des , d) => {
                                            return (
                                                    <p key={d+"ExpDescription"} className="card-description expText"><i className="fas fa-chevron-circle-right"></i> {des}</p>
                                            )}):<p></p>}
                                </div>
                                </div>
                                <br></br>
                                <br></br>
                                </div>
                                    )}
                                    else{
                                        return(
                                            <div key={i+"Experience"}>
                                <div className="row">
                                <div className="col-sm-3 col-md-3 col-lg-3 expImageDiv">
                                    <img className="expImage" src={item.img}></img>
                                </div>
                                <div className="col-sm-9 col-md-9 col-lg-9 expTextDivLast">
                                        <h3 class="card-caption expText">{item.position}</h3>
                                        <h4 class="card-caption expText">{item.company}</h4>
                                        <h6 class="category text-muted expText">{item.address}</h6>
                                        <p class="gpa expText">{item.tenure}</p>
                                        <br></br>
                                        {item.description ? item.description.map((des , d) => {
                                            return (
                                                    <p key={d+"ExpDescription"} className="card-description expText"><i className="fas fa-chevron-circle-right"></i> {des}</p>
                                            )}):<p></p>}
                                </div>
                                </div>
                                <br></br>
                                <br></br>
                                </div>
                                    )
                                    }}):<p></p>}

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

export default Experience;