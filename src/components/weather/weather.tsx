import Axios from "axios";
import React, { useState, useEffect } from "react";
import "./weather.css";

interface printMainData {
	name: string;
	main: {
		[key: string]: printTempData;
	};
	weather: {
		[key: string]: printWxData;
	};
}

interface printWxData {
	description: string;
	icon: string;
}

interface printTempData {
	temp: number;
	temp_max: number;
	temp_min: number;
}

const Weather: React.FunctionComponent = () => {
	const [data, setData] = useState<printMainData | undefined>(undefined);

	useEffect(() => {
		async function asyncEffect(
			lat: string = "48.7519",
			lon: string = "-122.4787"
		) {
			try {
				const res = await Axios.get(
					`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
				);
				console.log("res ******------>>>>>>", res);
				const incomingData = res.data;
				console.log("incomingData.temp ******------>>>>>>", incomingData);
				setData(incomingData);
			} catch (err) {
				console.log("err ******------>>>>>>", err);
				throw new Error(err);
			}
		}
		asyncEffect();
	}, []);
	console.log("data ******------>>>>>>", data);
	if (!data) return <div>Loading...</div>;
	return (
		<div className="weather-container">
			<div className="weather-content wx-content wx">
				<div className="weather-content wx">{data.name}</div>
				<div className="weather-content wx">
					Conditions {data.weather[0].description}
				</div>
				<div>
					<img
						alt="/"
						src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
					></img>
				</div>
				<div className="weather-content wx">
					Current Temp {data.main.temp} <sup>o</sup>F
				</div>
				<div className="weather-content wx">
					Daily Hi {data.main.temp_max} <sup>o</sup>F
				</div>
				<div className="weather-content wx">
					Daily Lo {data.main.temp_min} <sup>o</sup>F
				</div>
			</div>
		</div>
	);
};
export default Weather;
