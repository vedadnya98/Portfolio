import React ,  {useState} from 'react';
import '../App.css'
import axios from 'axios'

const Contact = () => {
    const [formSubmit,setFormSubmit] = useState(false);
    const handleForm = async (event) => {
		event.preventDefault();
		//get all elements from form
		let { name, email, subject, message} = event.target.elements;
        let d = new Date();
		let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		let month = months[d.getMonth()];
		let year = d.getFullYear();
		let day = d.getDate();
		let contactDate = day + ' ' + month + ' ' + year;
        let contactTime = d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();

        axios({
            method: "POST", 
            url:"https://vedadnya-contact-server.herokuapp.com/send", 
            data: {
                name : name.value,
                email : email.value,
                subject : subject.value,
                message : message.value,
                contactDate : contactDate,
                contactTime : contactTime
            }
        }
        ).then((response)=>{
            console.log(response)
            if (response.status === 200){
                console.log("Message sent 2")
                alert("Message Sent.");
                document.getElementById('contact-form').reset();
                setFormSubmit(!formSubmit)
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    };

                return(
                    <div className="background">
                        <div>
                            <div className="sectionTitle">
                            <p>Contact</p>
                            <br></br>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <div className="contact container">
                                <div className="row">
                                <div className="contactLeft col-sm-0 col-md-0 col-lg-6">
                                    {/* <img src={mail} alt="mailLogo"></img> */}
                                    {formSubmit ? (
                                    <div>
                                    <h1>Thank You</h1>
                                    <h2>I'll be in touch<br></br>as soon as possible</h2>
                                    </div>)
                                    :
                                    <div>
                                    <h1>Say Hello</h1>
                                    <h2>I'll be in touch<br></br>as soon as possible</h2>
                                    </div>}

                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 contactFormDiv">
                                    

                                <form onSubmit={handleForm} id="contact-form" name="contact-form">
								<div className='form-group'>
									<label htmlFor="name">Name</label>
									<input className='form-control' name='name' id='name'  placeholder='Name' required />
									<br></br>

                                    <label htmlFor="email">Email</label>
									<input className='form-control' name='email' id='email'  placeholder='Email' required />
									<br></br>

                                    <label htmlFor="subject">Subject</label>
									<input className='form-control' name='subject' id='subject'  placeholder='Subject' required />
									<br></br>

									<label htmlFor="message">Message</label>
									<textarea className='form-control' name='message' id='message'  rows="10" cols="5" placeholder='message' required />
									<br></br>
                                    <button type="submit" className="btnContact">Submit</button>
                                </div>

							</form>

                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                      )
                      
                }

export default Contact;
