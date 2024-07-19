import React from "react";
import Button from "../Button/Button";
import "./SecondaryButton.scss";

const SecondaryButton = ({
	onClick,
	title,
    className,
    disabled = false
}: {
	onClick: () => void;
	title: string;
    className?: string,
    disabled?: boolean
}) => {
	return (
		<Button onClick={onClick} className={`secondaryButton ${className}`} disabled={disabled}>
			{title}
		</Button>
	);
};

export default SecondaryButton;
