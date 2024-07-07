import React from "react";
import { NavLink } from "react-router-dom";
import "./SecondaryLink.scss";

const SecondaryLink = ({
	to,
	className,
	title,
}: {
	to: string;
	className: string;
	title: string;
}) => {
	return (
		<NavLink className={`secondaryLink ${className}`} to={to}>
			{title}
		</NavLink>
	);
};

export default SecondaryLink;
