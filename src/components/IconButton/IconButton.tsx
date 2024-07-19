import React from "react";
import "./IconButton.scss";

export interface IconButtonProps {
    iconURL: string;
	onClick: () => void;
}

const IconButton = ({
	iconURL,
	onClick,
}: IconButtonProps) => {
	return (
		<button className="IconButton" onClick={onClick}>
			<img src={iconURL} alt="icon" />
		</button>
	);
};

export default IconButton;
