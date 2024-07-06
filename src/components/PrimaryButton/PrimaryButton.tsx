import React from "react";
import Button from "../Button/Button";
import "./PrimaryButton.scss";

const PrimaryButton = ({
	onClick,
	title,
	className,
}: {
	onClick: () => void;
	title: string;
	className?: string;
}) => {
	return (
		<Button onClick={onClick} className={`primaryButton ${className}`}>
			{title}
		</Button>
	);
};

export default PrimaryButton;
