import React from "react";
import "./App.css";
import Header from "./components/header/header";
import About from "./components/about/about";
import Weather from "./components/weather/weather";

function App() {
	return (
		<div className="App">
			<div className="App-content">
				<Header />
				<div className="Body-container">
					<About />
					<Weather />
				</div>
			</div>
		</div>
	);
}

export default App;
