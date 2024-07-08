import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import "./SecondaryLink.scss";

const SecondaryLink = ({
	to,
	className,
	children,
	onClick,
}: NavLinkProps) => {
	return (
		<NavLink onClick={onClick} className={`secondaryLink ${className}`} to={to}>
			{children}
		</NavLink>
	);
};

export default SecondaryLink;
