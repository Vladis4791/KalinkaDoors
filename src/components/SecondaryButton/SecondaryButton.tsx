import React from "react";
import Button from "../Button/Button";
import "./SecondaryButton.scss";

const SecondaryButton = ({
	onClick,
	title,
    className
}: {
	onClick: () => void;
	title: string;
    className?: string
}) => {
	return (
		<Button onClick={onClick} className={`secondaryButton ${className}`}>
			{title}
		</Button>
	);
};

export default SecondaryButton;
