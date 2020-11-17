import React from "react";
import "./Header.css";

interface HeaderProps {
	id: string;
	msg: string;
}

const Header: React.FC<HeaderProps> = () => {
	return (
		<div className="header-container">
			<div className="header-content">Alpen Glow</div>
		</div>
	);
};
export default Header;
