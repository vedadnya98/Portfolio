//basic imports
import React from 'react';
//css imports
import '../App.css';
import {BrowserRouter as Router } from 'react-router-dom'
//components imports
import Navigation from './Navigation';
import FloatingActiveButton from './FloatingActiveButton'
import Home from './Home'

//component code
function App() {
	return (
			<Router>
				<div className='App'>
					<header>
						<Navigation />
					</header>
					<FloatingActiveButton/>
					<Home/>
				</div>
			</Router>
	);
}


export default App;
