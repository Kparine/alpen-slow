import React from "react";
import logo from "./images/cabin-one.jpg";
import "./App.css";
import Header from "./components/header/header";
import About from "./components/about/about";

const styles = {};

function App() {
	return (
		<div className="App" style={styles}>
			<div className="App-content">
				<Header id="hi" msg="hi" />
				<About />
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
			</div>
		</div>
	);
}

export default App;
