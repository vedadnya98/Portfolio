import React from 'react';
import '../App.css'
import Resume from '../imgs/Resume.pdf'

const Navigation = () => {
	return (
			<div>
				<nav className="navbar">
				<img className="navbar-brand" src="http://www.brandgradients.com/img/logos/vue-js-hex-colors-gradient-logo.png" alt="Logo"/>
				<div className="btn-toolbar pull-right" id="navbarSupportedContent">
					<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#resumeLong">
					Resume
					</button>



				</div>
				</nav>
				
				<div class="modal fade" id="resumeLong" tabindex="-1" role="dialog" aria-labelledby="resumeLongTitle" aria-hidden="true">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="resumeLongTitle">Resume</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
												<iframe className="iframe" src={Resume} frameborder="0"></iframe>
						</div>
						<div class="modal-footer">
							<a class="btnContact btn-primary" href={Resume} download>Download</a>
							<button type="button" class="btnContact btn-secondary" data-dismiss="modal">Close</button>
						</div>
						</div>
					</div>
					</div>

			</div>
)};


export default Navigation;
