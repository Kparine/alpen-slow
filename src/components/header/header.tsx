import React from "react";
import "./header.css";

const Header: React.FunctionComponent = () => {
	return (
		<div className="header-container">
			<div className="header-content title">Alpen Glow</div>
			<div className="header-content wx-content wx"></div>
		</div>
	);
};
export default Header;
