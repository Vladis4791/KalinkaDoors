import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import './PrimaryLink.scss';

const PrimaryLink = ({
	to,
	className,
	children,
	onClick,
}: NavLinkProps) => {

    // const onCl = (e) => {
    //     // e.preventDefault();
    //     onClick(e);
    // }
	return (
		<NavLink
			onClick={onClick}
			className={`primaryLink ${className}`}
			to={to}
		>
			{children}
		</NavLink>
	);
};

export default PrimaryLink;
