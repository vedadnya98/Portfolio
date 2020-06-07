import React from 'react';
import '../App.css'

const Footer = () => {
	return (
			<div>
				<div className="footer">
				<div>
				<img className="footer-brand" src="http://www.brandgradients.com/img/logos/vue-js-hex-colors-gradient-logo.png" alt="Logo"/>
				</div>
				<br></br>
				<div className="quotationUp">“</div>
				<div className="footerQuote">
				Code is like humor. When you have to explain it, it’s bad.
				</div>
				<div className="quotationDown">”</div>
				<br></br>
						<div className="icons">
							<a target="_blank" href="https://www.linkedin.com/in/vedadnya-jadhav-96bba6152/">
								<div className="layer">
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span className="fab fa-linkedin-in"></span>
								</div>
								<span className="text">LinkedIn</span>
							</a>
							<a target="_blank" href="https://github.com/vedadnya98">
								<div className="layer">
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span className="fab fa-github"></span>
								</div>
								<span className="text">Github</span>
							</a>
							<a target="_blank" href="https://www.instagram.com/vedadnya_98/">
								<div className="layer">
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span className="fab fa-instagram"></span>
								</div>
								<span className="text">Instagram</span>
							</a>
							<a target="_blank" href="https://www.facebook.com/vedadnya.jadhav">
								<div className="layer">
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span className="fab fa-facebook-f"></span>
								</div>
								<span className="text">Facebook</span>
							</a>
							<a href="/#" type="button" data-toggle="modal" data-target="#resumeLong">
								<div className="layer">
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span className="fab"><img src="https://img.icons8.com/ios-glyphs/50/000000/resume.png" alt="resumeLogo"/></span>
								</div>
								<span className="text">Resume</span>
							</a>
						</div>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<p>Designed & Developed By<br></br><span>VedadnyA JadhaV</span></p>
				</div>
			</div>
)};


export default Footer;
