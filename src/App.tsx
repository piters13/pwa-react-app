import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React, {Suspense, lazy} from 'react';

const About = lazy(() => import('./About'));
const Home = lazy(() => import('./Home'));

function App() {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				
				<nav>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
					</ul>
				</nav>
				
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			
			</Suspense>
		</Router>
	);
}

export default App;
