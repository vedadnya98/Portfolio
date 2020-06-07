//basic imports
import React , {lazy , Suspense} from 'react';
//css imports
import '../App.css';
import {BrowserRouter as Router } from 'react-router-dom'
//components imports
// import Navigation from './Navigation';
// import Home from './Home'

import Loader from './Loader'

const Home = lazy(() => {
	return new Promise(resolve => {
	  setTimeout(() => resolve(import("./Home")), 1500);
	});
  });

const Navigation = lazy(() => {
	return new Promise(resolve => {
	  setTimeout(() => resolve(import("./Navigation")), 1500);
	});
});

// const Navigation = lazy(()=>import('./Navigation'));
// const Home = lazy(()=>import('./Home'));

//component code
function App() {
	return (
			
			<Router>
				<Suspense fallback={<Loader/>}>
				<div className='App'>
					<header>
						<Navigation />
					</header>
					<div className="homeDiv">
					<Home/>
					</div>
				</div>
				</Suspense>
			</Router>
	);
}


export default App;
