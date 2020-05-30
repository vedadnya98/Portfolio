import React from 'react';
import '../App.css'
import mail from '../imgs/mail.png'

const Contact = () => {
                return(
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
                                <div className="col-sm-0 col-md-3 col-lg-6 contactImageDiv">
                                    <img src={mail}></img>
                                </div>
                                <div className="col-sm-12 col-md-9 col-lg-6 contactFormDiv">
                                    

                                <form>
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
								
									<button variant="primary" type='submit' className="btnContact"> Send </button>

                                </div>

							</form>

                                </div>
                            </div>
                        </div>
                        </div>
                      )
                }

export default Contact;
