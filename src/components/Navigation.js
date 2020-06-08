import React from 'react';
import '../App.css'
import Resume from '../imgs/Resume.pdf'
import logo from '../imgs/logoBlack.png'

const Navigation = () => {
	return (
			<div>
				<nav className="navbar navbar-expand-lg">
				<img className="navbar-brand" src={logo} alt="Logo"/>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<i className="fas fa-bars"></i>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
				{/* <div className="icons"> */}
				<ul className="navbar-nav ml-auto icons">
							<li className="nav-item">
							<a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/vedadnya-jadhav-96bba6152/">
								<div className="layer">
									<span></span>
									<span></span>
									<span className="fab fa-linkedin-in"></span>
								</div>
							</a>
							</li><li className="nav-item">
							<a rel="noopener noreferrer" target="_blank" href="https://github.com/vedadnya98">
								<div className="layer">
									<span></span>
									<span></span>
									<span className="fab fa-github"></span>
								</div>
							</a>
							</li><li className="nav-item">
							<a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/vedadnya_98/">
								<div className="layer">
									<span></span>
									<span></span>
									<span className="fab fa-instagram"></span>
								</div>
							</a>
							</li><li className="nav-item">
							<a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/vedadnya.jadhav">
								<div className="layer">
									<span></span>
									<span></span>
									<span className="fab fa-facebook-f"></span>
								</div>
							</a>
							</li><li className="nav-item">
							<a href="/#" data-toggle="modal" data-target="#resumeLong">
								<div className="layer">
									<span></span>
									<span></span>
									<span className="fab"><img src="https://img.icons8.com/ios-glyphs/50/000000/resume.png" alt="resumeLogo"/></span>
								</div>
							</a>
							</li>
							</ul>
						</div>
					{/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#resumeLong">
					Resume
					</button> */}
				{/* </div> */}
				</nav>
				
				<div className="modal fade" id="resumeLong" tabIndex="-1" role="dialog" aria-labelledby="resumeLongTitle" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="resumeLongTitle">Resume</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
												<iframe className="iframe" src={Resume} frameBorder="0" title="Resume"></iframe>
						</div>
						<div className="modal-footer">
							<a className="btnContact" href={Resume} download>Download <i className="fas fa-download"></i></a>
							<button type="button" className="btnContact" data-dismiss="modal">Close <i className="fas fa-times-circle"></i></button>
						</div>
						</div>
					</div>
					</div>

			</div>
)};


export default Navigation;
