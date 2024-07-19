import React from "react";
import Button from "../Button/Button";
import "./PrimaryButton.scss";

const PrimaryButton = ({
	onClick,
	title,
	className,
	disabled = false,
}: {
	onClick: () => void;
	title: string;
	className?: string;
	disabled?: boolean;
}) => {
	return (
		<Button onClick={onClick} className={`primaryButton ${className}`} disabled={disabled}>
			{title}
		</Button>
	);
};

export default PrimaryButton;
