import React from "react";
import { NavLink } from "react-router-dom";

const PrimaryLink = ({
	to,
	className,
	title,
}: {
	to: string;
	className: string;
	title: string;
}) => {
	return (
		<NavLink className={`primaryLink ${className}`} to={to}>
			{title}
		</NavLink>
	);
};

export default PrimaryLink;
