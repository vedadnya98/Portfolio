import React , {useState , useEffect} from 'react';
import '../App.css'
const data = require('./data')

const Education = () => {
    const [education  , setEducation] = useState();
    const [loading , setLoading] = useState(true);
    useEffect(() => {
		async function getData() {
			try {
                let educationList = data.EducationCards
                console.log(educationList)
				setEducation(educationList);
				setLoading(false)
			} catch (e) {
				console.log(e)
			}
		}
		getData();
    }, [data])
    if(!loading){
                return(
                        <div className="education">
                        <div className="sectionTitle">
                        <p>Education</p>
                        <br></br>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="row contentDiv">
                        {education ? education.map((item , i) => {
                        return (
                            <div className="container eduContainer col-sm-12 col-md-6 col-lg-6" key={i+"Education"}>
                            <div class="card card-profile">
                            <div class="card-avatar">
                                <a href="#"> <img class="eduImg" src={item.img}/></a>
                            </div>
                            <br></br>
                            <div class="table">
                            <a href={item.website}><h3 class="card-caption">{item.name}</h3></a>
                                <h6 class="category text-muted">{item.address}</h6>
                                <p class="card-description">{item.course}</p>
                                <p className="gpa">GPA : {item.gpa}</p>
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
            <div></div>
        )
    }
}

export default Education;