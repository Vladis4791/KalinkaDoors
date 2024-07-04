import React, { useState } from "react";
import "./Button.scss";

const Button = ({
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {

	return (
		<button
			{...props}
			className={`${props.className} Button`}
		></button>
	);
};

export default Button;
