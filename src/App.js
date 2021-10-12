import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SinglePage from "./SinglePage";
import HomePage from "./HomePage";

function App() {
	return (
		<div className="app">
			<Router>
				<div className="app__container">
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/singleshow/:id" component={SinglePage} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
