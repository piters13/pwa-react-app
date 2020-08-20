import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import About from './About';
import Home from './Home';
import React from 'react';

function App() {
	return (
		<Router>
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
		</Router>
	);
}

export default App;
