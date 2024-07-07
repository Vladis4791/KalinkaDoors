import React from "react";
import "./TextInput.scss";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	inputRef?: React.MutableRefObject<HTMLInputElement>;
	inputLabel?: string;
}

const TextInput = ({ inputRef, inputLabel, ...props }: TextInputProps) => {
	return (
		<div className="TextInputBlock">
			<div className="inputLabel">{inputLabel}</div>
			<input
				{...props}
				className={`TextInput ${props.className}`}
				ref={inputRef}
			/>
		</div>
	);
};

export default TextInput;
