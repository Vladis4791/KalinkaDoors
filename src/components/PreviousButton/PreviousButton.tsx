import React from "react";
import Button from "../Button/Button";
import "./PreviousButton.scss";

const PreviousButton = ({
	onClick,
	title,
}: {
	onClick: () => void;
	title: string;
}) => {
	return (
		<Button onClick={onClick} className="previousButton">
			{title}
		</Button>
	);
};

export default PreviousButton;
