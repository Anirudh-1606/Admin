import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Clients from "./pages/Clients/Clients";
import History from "./pages/History/History";
import Progress from "./pages/Progress/Progress";

function App() {
	const [showNav, setShowNav] = useState(true);

	return (
		<Router>
			<div className={`body-area${showNav ? " body-pd" : ""}`}>
				<Sidebar showNav={showNav} setShowNav={setShowNav} />
				<Switch>
					<div className="pt-4 pb-4">
						<Route path="/" exact component={Progress} />
						<Route path="/history" exact component={History} />
						<Route path="/clients" exact component={Clients} />
					</div>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
