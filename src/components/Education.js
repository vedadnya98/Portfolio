import React , {useState , useEffect} from 'react';
import '../App.css'
import 'firebase/firestore';
import { getEducation } from '../firebase/FirestoreFunctions'

const Education = () => {
    const [education  , setEducation] = useState();
    const [loading , setLoading] = useState(true);
    useEffect(() => {
		async function getData() {
			try {
                let educationObj = await getEducation();
                let educationList = educationObj['EducationCards']
				setEducation(educationList);
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
                        <div className="container eduContainer col-12 col-sm-12 col-md-6 col-lg-6" key={i+"Education"}>
                            <div className="card card-profile">
                            <div className="card-avatar">
                                <a target="_blank" href="/#"> <img className="eduImg" src={item.img} alt="collegeLogo"/></a>
                            </div>
                            <br></br>
                            <div className="table">
                            <a target="_blank" href={item.website}><h3 className="card-caption">{item.name}</h3></a>
                                <h6 className="category text-muted">{item.address}</h6>
                                <p className="card-description">{item.course}</p>
                                <p className="gpa">GPA : {item.gpa}</p>
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
            <div></div>
        )
    }
}

export default Education;