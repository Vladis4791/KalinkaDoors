import React from "react";
import "./IconButton.scss";

const IconButton = ({
	iconURL,
	onClick,
}: {
	iconURL: string;
	onClick: () => void;
}) => {
	return (
		<button className="IconButton" onClick={onClick}>
			<img src={iconURL} alt="icon" />
		</button>
	);
};

export default IconButton;
