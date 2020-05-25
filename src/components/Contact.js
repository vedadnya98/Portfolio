import React , {useState , useEffect} from 'react';
import '../App.css'
const data = require('./data')


const Contact = () => {
    const [contact  , setProjects] = useState();
    const [loading , setLoading] = useState(true);
    useEffect(() => {
		async function getData() {
			try {
                let contactList = data.ProjectCards
                console.log(contactList)
				setProjects(contactList);
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

export default Contact;
